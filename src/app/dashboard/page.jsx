import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const isAdmin = session.user.email === "cat420catcat@gmail.com";

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📊 Dashboard</h1>
      <p>Welcome, {session.user.name}</p>

      {isAdmin ? (
        <p>✅ Admin: You can see full dashboard</p>
      ) : (
        <p>👤 Viewer: Limited access</p>
      )}

      <button>➕ Add Chart</button>
    </div>
  );
}
