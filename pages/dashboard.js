// pages/dashboard.js
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;
  if (!session) return <div>Please log in</div>;

  const isAdmin = session.user.role === "admin";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {session.user.email} ({session.user.role})</p>
      {isAdmin ? (
        <div>
          <button className="bg-green-500 text-white p-2 rounded mr-2">Add Chart</button>
          <button className="bg-blue-500 text-white p-2 rounded">Admin Panel</button>
        </div>
      ) : (
        <div>
          <button className="bg-green-500 text-white p-2 rounded mr-2">Add Chart</button>
          <button className="bg-blue-500 text-white p-2 rounded" disabled>Admin Panel</button>
        </div>
      )}
      <button onClick={() => signOut()} className="mt-4 bg-red-500 text-white p-2 rounded">
        Sign Out
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getServerSession(req, null, authOptions); // Ensure authOptions is imported or defined
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return { props: {} };
}