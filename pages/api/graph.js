import { connectMongo } from '@/lib/mongodb';


export default async function handler(req, res) {
  await connectMongo();

  if (req.method === 'POST') {
    const { label, value } = req.body;
    try {
      const entry = await GraphData.create({ label, value });
      res.status(201).json(entry);
    } catch (error) {
      res.status(400).json({ message: 'Error saving graph data', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
