import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./mongodb";


export const authOptions = {
adapter: MongoDBAdapter(clientPromise),

  session: {
    strategy: "jwt",
  },

providers: [
GoogleProvider({
clientId: process.env.GOOGLE_CLIENT_ID,
clientSecret: process.env.GOOGLE_CLIENT_SECRET,
authorization: {
params: { prompt: "select_account", scope: "profile email" }
},
httpOptions: { timeout: 10000 },
}),
TwitterProvider({ clientId: process.env.TWITTER_CLIENT_ID, clientSecret: process.env.TWITTER_CLIENT_SECRET }),
FacebookProvider({ clientId: process.env.FACEBOOK_CLIENT_ID, clientSecret: process.env.FACEBOOK_CLIENT_SECRET })
],
secret: process.env.NEXTAUTH_SECRET,
events: {
async createUser({ user }) {
const client = await clientPromise;
const db = client.db();
const role = user.email === "cat420catcat@gmail.com" ? "admin" : "user";
await db.collection("users").updateOne({ email: user.email }, { $set: { role } });
}
},
callbacks: {
async jwt({ token, user }) {
if (user) {
const client = await clientPromise;
const db = client.db();
const dbUser = await db.collection("users").findOne({ email: user.email });
token.role = dbUser?.role || "viewer";
}
return token;
},
async session({ session, token }) {
if (session?.user) session.user.role = token?.role || "viewer";
return session;
},
async redirect({ baseUrl }) {
return baseUrl;
}
}
};

