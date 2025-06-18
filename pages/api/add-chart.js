import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('charts');

    const { chartId, title, value, subValue, imageUrl, type, data, options, stats } = req.body;

    if (!chartId || !title || !value) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (data && (!data.labels || !data.datasets)) {
      return res.status(400).json({ message: 'Invalid chart data format' });
    }

    const chart = {
      chartId,
      title,
      value,
      subValue: subValue || '',
      imageUrl: imageUrl || '',
      type: type || 'bar',
      data: data || {
        labels: ['A', 'B', 'C'],
        datasets: [{ label: 'Default', data: [10, 20, 30], backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'] }],
      },
      options: options || {
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { display: false }, y: { display: false } },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
      },
      stats: stats || [],
    };

    await collection.insertOne(chart);
    return res.status(200).json({ message: 'Chart added successfully' });
  } catch (error) {
    console.error('Error adding chart:', error);
    return res.status(500).json({ message: 'Error adding chart' });
  }
}