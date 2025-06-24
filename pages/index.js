// pages/index.js

import { getServerSession } from "next-auth/next";
import clientPromise from "../my-supply-chain/src/lib/mongodb";
import HomePage from "../Components/HomePage";
import { authOptions } from "../my-supply-chain/src/lib/authOptions";

export async function getServerSideProps(context) {
  // 1️⃣ Grab the NextAuth session
  const session = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  // 2️⃣ If not logged in, redirect to the Sign-In page
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  try {
    // 3️⃣ Connect to MongoDB and fetch only this user’s charts
    const client = await clientPromise;
    const db = client.db("myDatabase");
    const rawCharts = await db
      .collection("charts")
      .find({ userEmail: session.user.email })
      .toArray();

    // 4️⃣ Build the props your HomePage expects
    const chartConfigs = rawCharts
      .filter((item) => item.chartId)
      .map((item) => ({
        id: item.chartId,
        type: item.type ?? "bar",
        data:
          item.data ?? {
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Default",
                data: [10, 20, 30],
                backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
              },
            ],
          },
        options: item.options ?? { responsive: true },
      }));

    const cardProps = rawCharts.map((item, i) => ({
      key: `${item._id}-${i}`,
      chartId: item.chartId,
      title: item.title ?? "",
      value: item.value ?? "",
      subValue: item.subValue ?? "",
      imageUrl:
        typeof item.imageUrl === "string"
          ? item.imageUrl.replace(/^"+|"+$/g, "")
          : "",
      stats: item.stats ?? [],
      isChart4: item.chartId === "chart4",
      isCentered: ["chart7", "chart9"].includes(item.chartId),
    }));

    // 5️⃣ Return them, plus the session
    return {
      props: {
        session,
        chartConfigs,
        cardProps,
      },
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return {
      props: {
        session,
        chartConfigs: [],
        cardProps: [],
      },
    };
  }
}

export default function Home({ session, chartConfigs, cardProps }) {
  // Pass session into HomePage so you can still show the profile dropdown
  return (
    <HomePage
      session={session}
      chartConfigs={chartConfigs}
      cardProps={cardProps}
    />
  );
}
