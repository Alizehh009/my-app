'use client';

import { useSession, signOut } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return <p>You are not logged in.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <img
        src={session.user.image}
        alt="Profile"
        width={80}
        style={{ borderRadius: '50%', marginTop: '1rem' }}
      />
      <br />
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
