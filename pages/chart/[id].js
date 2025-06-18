import { useRouter } from 'next/router';

export default function ChartDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: 20 }}>
      <h1>Chart ID: {id}</h1>
      <p>This page will show details for chart: {id}</p>
    </div>
  );
}
