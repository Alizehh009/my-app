import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminPanelPage() {
  const session = await getServerSession(authOptions);

  console.log("SESSION:", session); // 👈 this logs to terminal

  if (!session || session.user.role !== "admin") {
    redirect("/unauthorized");
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🔐 Admin Panel</h1>
      <p>Only visible to admins.</p>
    </div>
  );
}

