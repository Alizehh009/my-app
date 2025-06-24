// pages/admin-dashboard.js
import { getServerSession } from "next-auth";
import { authOptions } from "../src/app/api/auth/[...nextauth]/route";


export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // Redirect if not logged in or not an admin
  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/unauthorized", // You'll create this page too
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function AdminDashboard({ session }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome Admin {session.user.name} 👋</h1>
      <p>You have full access to this dashboard.</p>
    </div>
  );
}
