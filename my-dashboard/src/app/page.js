'use client';

import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import Card from '../../components/Card';

export default function Dashboard() {
  useEffect(() => {
    // Chart 1: Stacked Bar Chart (Quarterly Inventory)
    new Chart(document.getElementById('chart1').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Category A',
            data: [500, 600, 700, 400, 300, 200],
            backgroundColor: '#FF6F61',
          },
          {
            label: 'Category B',
            data: [400, 500, 600, 300, 200, 100],
            backgroundColor: '#FFD700',
          },
          {
            label: 'Category C',
            data: [300, 400, 500, 200, 100, 50],
            backgroundColor: '#6A5ACD',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { stacked: true }, y: { stacked: true } },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
      },
    });

    // Chart 2: Horizontal Bar Chart (Priority Orders)
    new Chart(document.getElementById('chart2').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Category A', 'Category B', 'Category C'],
        datasets: [
          {
            label: 'Orders',
            data: [1200, 800, 600],
            backgroundColor: ['#40E0D0', '#FF69B4', '#7B68EE'],
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { display: false }, y: { display: false } },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
      },
    });

    // Chart 3: Line Chart (Cycle Time by Supplier)
    new Chart(document.getElementById('chart3').getContext('2d'), {
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
    });

    // Chart 4: Line Chart (Inventory Holding Costs)
    new Chart(document.getElementById('chart4').getContext('2d'), {
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
    });

    // Chart 5: Histogram (Turnover Trend)
    new Chart(document.getElementById('chart5').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [
          {
            label: 'Turnover',
            data: [50, 30, 40, 20, 60, 30, 40, 50],
            backgroundColor: '#4682B4',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { display: false }, y: { display: false } },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
      },
    });

    // Chart 6: Area Chart (Social Media Growth)
    new Chart(document.getElementById('chart6').getContext('2d'), {
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
    });

    // Chart 7: Donut Chart (Cross Merchandised Sales)
    new Chart(document.getElementById('chart7').getContext('2d'), {
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
    });

    // Chart 8: Line Chart (Asset Turnover)
    new Chart(document.getElementById('chart8').getContext('2d'), {
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
    });

    // Chart 9: Pie Chart (Market Share)
    new Chart(document.getElementById('chart9').getContext('2d'), {
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
    });

    // Chart 10: Mixed Chart (DSO & DPO)
    new Chart(document.getElementById('chart10').getContext('2d'), {
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
    });
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-2 sm:p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="w-full h-[50px] bg-gray-100 flex items-center justify-between px-4 sm:px-6">
          <h1 className="text-lg sm:text-xl font-semibold">Supply Chain</h1>
          <button className="bg-gray-500 text-white px-2 py-1 sm:px-3 sm:py-1 text-sm sm:text-base rounded-md hover:bg-blue-700 transition">
            Add Card
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4">
          <Card
            title="Quarterly Inventory"
            value="7106"
            subValue="Total Sales"
            chartId="chart1"
            imageUrl="https://picsum.photos/32/32?random=1"
            stats={[{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }]}
          />
          <Card
            title="Priority Orders"
            value="2k"
            subValue="orders"
            chartId="chart2"
            imageUrl="https://picsum.photos/32/32?random=2"
            stats={[{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }]}
          />
          <Card
            title="Cycle Time by Supplier"
            value="13"
            subValue="average"
            chartId="chart3"
            imageUrl="https://picsum.photos/32/32?random=3"
            stats={[{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }]}
          />
          <Card
            title="Inventory Holding Costs"
            value="19k"
            subValue="by Month"
            chartId="chart4"
            imageUrl="https://picsum.photos/32/32?random=4"
            stats={[{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }]}
          />
          <Card
            title="Turnover Trend"
            value="1.29%"
            subValue="this Month"
            chartId="chart5"
            imageUrl="https://picsum.photos/32/32?random=5"
            stats={[{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }]}
          />
          <Card
            title="Social Media Growth"
            value="1,321"
            subValue="Current Total Visits"
            chartId="chart6"
            imageUrl="https://picsum.photos/32/32?random=6"
            stats={[{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }]}
          />
          <Card
            title="Cross Merchant Sales"
            value="$122.3k"
            subValue="Current Gross Sales"
            chartId="chart7"
            imageUrl="https://picsum.photos/32/32?random=7"
            stats={[{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }]}
          />
          <Card
            title="Asset Turnover"
            value="55%"
            subValue="Avg Asset Turnover"
            chartId="chart8"
            imageUrl="https://picsum.photos/32/32?random=8"
            stats={[{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }]}
          />
          <Card
            title="Market Share"
            value="179.2M"
            subValue="Current Market Share"
            chartId="chart9"
            imageUrl="https://picsum.photos/32/32?random=9"
            stats={[{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }]}
          />
          <Card
            title="DSO & DPO"
            value="54"
            subValue="Average DSO"
            chartId="chart10"
            imageUrl="https://picsum.photos/32/32?random=10"
            stats={[{ icon: 'eye', value: '20' }, { icon: 'chat', value: '11' }]}
          />
        </div>
      </div>
    </div>
  );
}