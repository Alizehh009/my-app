import clientPromise from '../lib/mongodb'
import HomePage from '../Components/HomePage.jsx'

export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = client.db('myDatabase')
    const collection = db.collection('charts')
    const chartData = await collection.find({}).toArray()

    const chartConfigs = chartData
      .filter(item => item.chartId)
      .map(item => ({
        id: item.chartId,
        type: item.type ?? 'bar',
        data: item.data ?? {
          labels: ['A', 'B', 'C'],
          datasets: [{
            label: 'Default',
            data: [10, 20, 30],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
          }]
        },
        options: item.options ?? { responsive: true },
      }))

    const cardProps = chartData.map((item, index) => ({
      key: `${item.chartId}-${index}`,
      chartId: item.chartId,
      title: item.title ?? '',
      value: item.value ?? '',
      subValue: item.subValue ?? '',
      imageUrl: typeof item.imageUrl === 'string' ? item.imageUrl.replace(/^"+|"+$/g, '') : '',
      stats: item.stats ?? [],
      isChart4: item.chartId === 'chart4',
      isCentered: ['chart7', 'chart9'].includes(item.chartId),
    }))

    return {
      props: { chartConfigs, cardProps },
    }
  } catch (error) {
    console.error('Error fetching MongoDB data:', error)
    return {
      props: { chartConfigs: [], cardProps: [] },
    }
  }
}

export default function Home(props) {
  return <HomePage {...props} />
}
