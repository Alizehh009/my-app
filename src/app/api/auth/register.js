import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { email, role, image, emailVerified } = req.body;
  const uri = process.env.MONGODB_URI; // Set this in your .env file
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('myDatabase');
    const users = database.collection('users');

    const existingUser = await users.findOne({ email });
    if (!existingUser) {
      await users.insertOne({ email, role, image, emailVerified });
    } else {
      await users.updateOne({ email }, { $set: { role, image, emailVerified } });
    }

    localStorage.setItem('email', email);
    res.status(200).json({ message: 'User registered/updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  } finally {
    await client.close();
  }
}