const { MongoClient } = require('mongodb');

async function seedData() {
  const uri = 'mongodb+srv://cat420catcat:go2zbY7WPH8IwiVQ@cluster0.ybidqgr.mongodb.net/myDatabase?retryWrites=true&w=majority';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('myDatabase');
    const collection = db.collection('charts');
    await collection.deleteMany({});

    const chartData = [
      {
        chartId: 'chart1',
        title: 'Quarterly Inventory',
        value: '7106',
        subValue: 'Total Sales',
        imageUrl: 'https://picsum.photos/32/32?random=1',
        stats: [{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }],
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            { label: 'Category A', data: [500, 600, 700, 400, 300, 200], backgroundColor: '#FF6F61' },
            { label: 'Category B', data: [400, 500, 600, 300, 200, 100], backgroundColor: '#FFD700' },
            { label: 'Category C', data: [300, 400, 500, 200, 100, 50], backgroundColor: '#6A5ACD' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { x: { stacked: true, display: false }, y: { stacked: true, display: false } },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
        },
      },
      {
        chartId: 'chart2',
        title: 'Priority Orders',
        value: '2k',
        subValue: 'orders',
        imageUrl: 'https://picsum.photos/32/32?random=2',
        stats: [{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }],
        type: 'bar',
        data: {
          labels: ['Category A', 'Category B', 'Category C'],
          datasets: [
            { label: 'Orders', data: [1200, 800, 600], backgroundColor: ['#40E0D0', '#FF69B4', '#7B68EE'] },
          ],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: { x: { display: false }, y: { display: false } },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
        },
      },
      {
        chartId: 'chart3',
        title: 'Cycle Time by Supplier',
        value: '13',
        subValue: 'average',
        imageUrl: 'https://picsum.photos/32/32?random=3',
        stats: [{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }],
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Supplier A',
              data: [10, 12, 15, 14, 13, 16],
              borderColor: '#FF4500',
              backgroundColor: 'rgba(255, 69, 0, 0.3)',
              fill: true,
              tension: 0.4,
            },
            {
              label: 'Supplier B',
              data: [8, 9, 11, 10, 12, 14],
              borderColor: '#00CED1',
              backgroundColor: 'rgba(0, 206, 209, 0.3)',
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { x: { display: false }, y: { display: false } },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
        },
      },
      {
        chartId: 'chart4',
        title: 'Inventory Holding Costs',
        value: '19k',
        subValue: 'by Month',
        imageUrl: 'https://picsum.photos/32/32?random=4',
        stats: [{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }],
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Cost A',
              data: [5000, 6000, 7000, 6500, 6000, 7000],
              borderColor: '#8A2BE2',
              borderDash: [5, 5],
              fill: false,
              tension: 0.3,
              borderWidth: 2,
            },
            {
              label: 'Cost B',
              data: [4000, 4500, 5000, 4800, 4700, 5200],
              borderColor: '#FF69B4',
              borderDash: [5, 5],
              fill: false,
              tension: 0.3,
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { x: { display: false }, y: { display: false } },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
        },
      },
      {
        chartId: 'chart5',
        title: 'Turnover Trend',
        value: '1.29%',
        subValue: 'this Month',
        imageUrl: 'https://picsum.photos/32/32?random=5',
        stats: [{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }],
        type: 'bar',
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
          datasets: [
            { label: 'Turnover', data: [50, 30, 40, 20, 60, 30, 40, 50], backgroundColor: '#4682B4' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { x: { display: false }, y: { display: false } },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
        },
      },
      {
        chartId: 'chart6',
        title: 'Social Media Growth',
        value: '1,321',
        subValue: 'Current Total Visits',
        imageUrl: 'https://picsum.photos/32/32?random=6',
        stats: [{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }],
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Visits A',
              data: [200, 300, 400, 500, 600, 700],
              borderColor: '#32CD32',
              backgroundColor: 'rgba(50, 205, 50, 0.4)',
              fill: true,
              tension: 0.4,
            },
            {
              label: 'Visits B',
              data: [150, 250, 350, 450, 550, 650],
              borderColor: '#FF8C00',
              backgroundColor: 'rgba(255, 140, 0, 0.4)',
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { x: { display: false }, y: { display: false } },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
        },
      },
      {
        chartId: 'chart7',
        title: 'Cross Merchant Sales',
        value: '$122.3k',
        subValue: 'Current Gross Sales',
        imageUrl: 'https://picsum.photos/32/32?random=7',
        stats: [{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }],
        type: 'doughnut',
        data: {
          labels: ['Category A', 'Category B', 'Category C', 'Category D'],
          datasets: [
            {
              data: [30, 25, 25, 20],
              backgroundColor: ['#FF4500', '#FFD700', '#00CED1', '#6A5ACD'],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          cutout: '70%',
        },
      },
      {
        chartId: 'chart8',
        title: 'Asset Turnover',
        value: '55%',
        subValue: 'Avg Asset Turnover',
        imageUrl: 'https://picsum.photos/32/32?random=8',
        stats: [{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }],
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Turnover',
              data: [50, 52, 48, 55, 53, 50],
              borderColor: '#20B2AA',
              fill: false,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { x: { display: false }, y: { display: false } },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
        },
      },
      {
        chartId: 'chart9',
        title: 'Market Share',
        value: '179.2M',
        subValue: 'Current Market Share',
        imageUrl: 'https://picsum.photos/32/32?random=9',
        stats: [{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }],
        type: 'pie',
        data: {
          labels: ['Segment A', 'Segment B', 'Segment C', 'Segment D'],
          datasets: [
            {
              data: [40, 30, 20, 10],
              backgroundColor: ['#1E90FF', '#FF69B4', '#FFA500', '#32CD32'],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
        },
      },
      {
        chartId: 'chart10',
        title: 'DSO & DPO',
        value: '54',
        subValue: 'Average DSO',
        imageUrl: 'https://picsum.photos/32/32?random=10',
        stats: [{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }],
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'DPO',
              data: [40, 45, 50, 55, 50, 45],
              type: 'line',
              borderColor: '#FF6347',
              fill: false,
              tension: 0.4,
            },
            {
              label: 'DSO',
              data: [30, 35, 40, 45, 40, 35],
              backgroundColor: '#DDA0DD',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { x: { display: false }, y: { display: false } },
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
        },
      },
    ];

    await collection.insertMany(chartData);
    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await client.close();
  }
}

seedData();