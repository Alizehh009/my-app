import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Card from '../Components/card.js';
import '../styles/global.css';
import clientPromise from '../lib/mongodb';

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('charts');
    const chartData = await collection.find({}).toArray();

    const chartConfigs = chartData.map((item) => ({
      id: item.chartId,
      type: item.type,
      data: item.data,
      options: item.options,
    }));

    const cardProps = chartData.map((item) => ({
      chartId: item.chartId,
      title: item.title,
      value: item.value,
      subValue: item.subValue,
      imageUrl: item.imageUrl,
      stats: item.stats,
      isChart4: item.chartId === 'chart4',
      isCentered: ['chart7', 'chart9'].includes(item.chartId),
    }));

    return {
      props: { chartConfigs, cardProps },
    };
  } catch (error) {
    console.error('Error fetching MongoDB data:', error);
    return {
      props: { chartConfigs: [], cardProps: [] },
    };
  }
}

export default function Home({ chartConfigs, cardProps }) {
  const chartInstances = useRef([]);

  useEffect(() => {
    chartInstances.current.forEach((chart) => chart.destroy());
    chartInstances.current = [];

    chartConfigs.forEach((config) => {
      const canvas = document.getElementById(config.id);
      if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.style.height = '100%';
        canvas.style.width = '100%';
        const chart = new Chart(ctx, {
          type: config.type,
          data: config.data,
          options: config.options,
        });
        chartInstances.current.push(chart);
      }
    });

    return () => {
      chartInstances.current.forEach((chart) => chart.destroy());
      chartInstances.current = [];
    };
  }, [chartConfigs]);

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Supply Chain</h1>
          <button>Add Card</button>
        </div>
        <div className="grid">
          {cardProps.map((card) => (
            <Card
              key={card.chartId}
              title={card.title}
              value={card.value}
              subValue={card.subValue}
              chartId={card.chartId}
              imageUrl={card.imageUrl}
              stats={card.stats}
              isChart4={card.isChart4}
              isCentered={card.isCentered}
            />
          ))}
        </div>
      </div>
    </div>
  );
}