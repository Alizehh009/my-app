import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold">Dashboard</div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-2">
            <Link href="/dashboard" className="hover:bg-blue-700 p-2 rounded block">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard/analytics" className="hover:bg-blue-700 p-2 rounded block">
              Analytics
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard/settings" className="hover:bg-blue-700 p-2 rounded block">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}