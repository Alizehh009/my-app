export default function ErrorPage({ searchParams }) {
  const error = searchParams?.error;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Access Denied</h1>
      <p>{error === 'AccessDenied' ? 'You must be an admin to sign in.' : 'Something went wrong.'}</p>
    </div>
  );
}
