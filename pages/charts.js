// pages/charts.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/unauthorized", // create this page for non-admins
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function ChartsPage({ session }) {
  return <div>Welcome Admin! 📊 You can access the charts.</div>;
}
