import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import {
  Chart,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  DoughnutController,
  PieController,
  LineController,
  BarController
} from 'chart.js';
import clientPromise from '../../lib/mongodb';
import '../styles/global.css';

Chart.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  DoughnutController,
  PieController,
  LineController,
  BarController
);

export async function getServerSideProps(context) {
  const { chartId } = context.params;
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('charts');
    const chart = await collection.findOne({ chartId });

    if (!chart) {
      return { notFound: true };
    }

    return {
      props: {
        chart: {
          chartId: chart.chartId,
          title: chart.title || '',
          value: chart.value || '',
          subValue: chart.subValue || '',
          imageUrl: chart.imageUrl || '',
          stats: chart.stats || [],
          type: chart.type || 'bar',
          data: chart.data || {
            labels: ['A', 'B', 'C'],
            datasets: [{ label: 'Default', data: [10, 20, 30], backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'] }],
          },
          options: chart.options || { responsive: true, maintainAspectRatio: false },
        },
      },
    };
  } catch (error) {
    console.error('Error fetching chart:', error);
    return { notFound: true };
  }
}

const ChartDetails = ({ chart }) => {
  const router = useRouter();
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chart.chartId) return;

    const canvas = document.getElementById(chart.chartId);
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const existingChart = Chart.getChart(chart.chartId);
    if (existingChart) existingChart.destroy();

    chartRef.current = new Chart(ctx, {
      type: chart.type,
      data: chart.data,
      options: {
        ...chart.options,
        plugins: {
          ...chart.options.plugins,
          legend: { display: true }, // Show legend in details view
          tooltip: { enabled: true }, // Enable tooltips
        },
      },
    });

    return () => {
      const chartToClean = Chart.getChart(chart.chartId);
      if (chartToClean) chartToClean.destroy();
    };
  }, [chart]);

  const getIcon = (type) => {
    switch (type) {
      case 'eye':
        return (
          <svg className="stat-item-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      case 'chat':
        return (
          <svg className="stat-item-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h1>{chart.title}</h1>
      <div className="chart-details">
        <div className="chart-container">
          <canvas id={chart.chartId} className="chart-canvas"></canvas>
        </div>
        <div className="chart-info">
          <p><strong>Value:</strong> {chart.value}</p>
          <p><strong>Sub Value:</strong> {chart.subValue}</p>
          {chart.imageUrl && <img src={chart.imageUrl} alt="Profile" className="profile-img" />}
          <div className="stats">
            {Array.isArray(chart.stats) && chart.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                {getIcon(stat.icon)}
                <span>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="back-btn" onClick={() => router.push('/')}>Back to Dashboard</button>
    </div>
  );
};

export default ChartDetails;