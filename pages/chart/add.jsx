import { useSession, signIn, signOut } from "next-auth/react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import styles from './add.css';


export default function AddChartPage() {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* HEADER SECTION */}
      <div className="header">
        <h1></h1>

        <div className="nav-right">
          {session && (
            <Link href="/admin">
              <button className="add-chart-btn">Add Chart</button>
            </Link>
          )}

          <div className="profile-container" ref={dropdownRef}>
            {session ? (
              <>
                <img
                  src={session.user.image || "/default.png"}
                  alt="Profile"
                  className="profile-image"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                {showDropdown && (
                  <div className="profile-dropdown">
                    <p className="profile-name">{session.user.name}</p>
                    <p className="profile-email">{session.user.email}</p>
                    <button onClick={() => signOut()} className="logout-btn">
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <button onClick={() => signIn()} className="login-btn">
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">
        <h2>Add Chart Page</h2>
        <p>Welcome! You can add a new chart using the form below (coming soon).</p>
      </div>
    </div>
  );
}
