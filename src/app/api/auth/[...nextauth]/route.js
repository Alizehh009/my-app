import NextAuth from "next-auth";
import {authOptions} from "../../../../../my-supply-chain/src/lib/authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
