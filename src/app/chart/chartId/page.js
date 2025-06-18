export default function ChartPage({ params }) {
  const { chartId } = params;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Chart Page</h1>
      <p>Chart ID: {chartId}</p>
    </div>
  );
}
