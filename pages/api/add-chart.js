// pages/api/add-chart.js

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../my-supply-chain/src/lib/authOptions";  // adjust path if needed
import clientPromise from "../../my-supply-chain/src/lib/mongodb";        // you already have this

export default async function handler(req, res) {
  // 1. Only POST allowed
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // 2. Get user session
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "You must be logged in" });
  }

  // 3. Pull chart fields from request
  const { chartId, title, value, subValue, imageUrl, type, data, options, stats } = req.body;
  if (!chartId || !title || !value) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("myDatabase");
    const collection = db.collection("charts");

    // 4. Build the document, stamping in the user's email
    const chartDoc = {
      chartId,
      title,
      value,
      subValue: subValue || "",
      imageUrl: imageUrl || "",
      type: type || "bar",
      data: data || {
        labels: ["A", "B", "C"],
        datasets: [{
          label: "Default",
          data: [10, 20, 30],
          backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        }],
      },
      options: options || {
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { display: false }, y: { display: false } },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
      },
      stats: stats || [],
      userEmail: session.user.email,   // ← **tag with the current user**
      createdAt: new Date(),            // optional: timestamp
    };

    // 5. Insert into Mongo
    await collection.insertOne(chartDoc);
    return res.status(200).json({ message: "Chart added successfully" });
  } catch (error) {
    console.error("Error adding chart:", error);
    return res.status(500).json({ message: "Error adding chart" });
  }
}
