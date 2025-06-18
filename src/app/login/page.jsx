// app/components/Header.jsx or pages/components/Header.jsx
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import './login.css';

export default function Header() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p className="loading">Loading...</p>;
  }

  return (
    <header className="">
      {session ? (
        <div className="profile">
          <img
            src={session.user.image || '/default-profile.png'}
            alt={`${session.user.name || 'User'}'s profile`}
            className="profile-img"
          />
          <span className="user-name">{session.user.name || 'User'}</span>
          <button onClick={() => signOut({ callbackUrl: '/' })} className="btn logout" aria-label="Logout">
            Logout
          </button>
        </div>
      ) : (
        <div className="login-buttons">
          <button onClick={() => signIn('google')} className="btn google" aria-label="Login with Google">
            <FaGoogle /> Login with Google
          </button>
          <button onClick={() => signIn('facebook')} className="btn facebook" aria-label="Login with Facebook">
            <FaFacebook /> Login with Facebook
          </button>
          <button onClick={() => signIn('twitter')} className="btn twitter" aria-label="Login with Twitter">
            <FaTwitter /> Login with Twitter
          </button>
        </div>
      )}
    </header>
  );
}