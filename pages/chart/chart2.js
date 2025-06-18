import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Chart from 'chart.js/auto';

export default function Chart2Page() {
  const chartRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Orders', 'Ratings', 'Returns'],
        datasets: [
          {
            label: 'Priority Orders Data',
            data: [2000, 1400, 800],
            backgroundColor: ['#40E0D0', '#FF69B4', '#9370DB'], // cyan, pink, purple
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            ticks: { font: { size: 14 } },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 500,
              font: { size: 14 },
            },
          },
        },
      },
    });

    return () => chartInstance.destroy();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Priority Orders Details</h1>

      <div style={styles.info}>
        <p><strong>Total Orders:</strong> 2,000</p>
        <p><strong>Ratings:</strong> 1,400</p>
        <p><strong>Return Orders:</strong> 800</p>
      </div>

      <canvas ref={chartRef} width="400" height="300" />

      <button style={styles.button} onClick={() => router.push('/')}>
        ← Back to Home
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '16px',
    color: '#4B0082',
  },
  info: {
    marginBottom: '20px',
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: '1.6',
  },
  button: {
    marginTop: '24px',
    backgroundColor: '#4B0082',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
