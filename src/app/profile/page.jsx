'use client';

import { useSession, signOut } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return <p>You are not logged in</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold">Welcome, {session.user.name}</h1>
      <img src={session.user.image} alt="Profile" className="w-20 h-20 rounded-full" />
      <p>Email: {session.user.email}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}
