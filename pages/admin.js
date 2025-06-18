import { useState } from 'react';
import '../Styles/admin.css';

export default function Admin() {
  const [formData, setFormData] = useState({
    title: '',
    value: '',
    subValue: '',
    imageUrl: '',
    chartType: 'bar',
    labels: '',
    data: '',
    stats: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chartId = `chart-${Date.now()}`; // Auto-generate unique chartId
    const payload = {
      chartId,
      title: formData.title,
      value: formData.value,
      subValue: formData.subValue,
      imageUrl: formData.imageUrl,
      type: formData.chartType,
      data: {
        labels: formData.labels ? formData.labels.split(',').map((l) => l.trim()) : ['A', 'B', 'C'],
        datasets: [
          {
            label: formData.title || 'Chart',
            data: formData.data ? formData.data.split(',').map(Number) : [10, 20, 30],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { display: false }, y: { display: false } },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
      },
      stats: formData.stats
        ? formData.stats.split(',').map((s) => ({ value: s.trim(), icon: 'eye' }))
        : [],
    };

    try {
      const response = await fetch('/api/add-chart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      alert(result.message);
      setFormData({
        title: '',
        value: '',
        subValue: '',
        imageUrl: '',
        chartType: 'bar',
        labels: '',
        data: '',
        stats: '',
      });
    } catch (error) {
      alert('Error adding chart: ' + error.message);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <label>Title</label>
        <input name="title" value={formData.title} onChange={handleChange} required />

        <label>Value</label>
        <input name="value" value={formData.value} onChange={handleChange} required />

        <label>Sub Value</label>
        <input name="subValue" value={formData.subValue} onChange={handleChange} />

        <label>Image URL</label>
        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

        <label>Chart Type</label>
        <select name="chartType" value={formData.chartType} onChange={handleChange}>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="doughnut">Doughnut</option>
          <option value="pie">Pie</option>
        </select>

        <label>Labels (comma-separated, e.g., Jan,Feb,Mar)</label>
        <input name="labels" value={formData.labels} onChange={handleChange} />

        <label>Data (comma-separated, e.g., 10,20,30)</label>
        <input name="data" value={formData.data} onChange={handleChange} />

        <label>Stats (comma-separated values, e.g., 20,11)</label>
        <input name="stats" value={formData.stats} onChange={handleChange} />

        <button type="submit">Add Chart</button>
      </form>
    </div>
  );
}