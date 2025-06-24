'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    return (
      <div style={{ padding: '1rem' }}>
        <header>
          <button onClick={() => signIn()}>Login</button>
        </header>
        <p>You are not logged in.</p>
      </div>
    );
  }

  const isAdmin = session.user.role === "admin";

  return (
    <div style={{ padding: '1rem' }}>
      <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <nav>
          <Link href="/">Home</Link> | <Link href="/dashboard">Dashboard</Link>
          {isAdmin && <> | <Link href="/admin-panel">Admin Panel</Link></>}
        </nav>
        <button onClick={() => signOut()}>Logout</button>
      </header>

      <h1>📊 Dashboard</h1>

      {isAdmin ? (
        <section>
          <h2>👑 Admin View</h2>
          <p>Showing full dashboard (overall charts, data, etc.)</p>
        </section>
      ) : (
        <section>
          <h2>➕ Add Chart</h2>
          <p>You only have permission to add charts.</p>
        </section>
      )}
    </div>
  );
}
