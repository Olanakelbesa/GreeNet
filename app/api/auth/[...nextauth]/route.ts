import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/lib/mongodb";
import bcrypt from "bcrypt"
import User from "@/models/User";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				// Fetch user from MongoDB
				await connectToDB();

				const user = await User.findOne({ email: credentials?.email });
				if(!user) throw new Error("Use not found");
                
                const isValidPassword = await bcrypt.compare(credentials?.password, user.password);
                if(!isValidPassword) throw new Error("Incorrect password");

				return { id: user._id.toString(), name: user.name, email: user.email };
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: { strategy: "jwt" },
	callbacks: {
		async session({ session, token }) {
			session.user!.id = token.sub!;
			return session;
		},
	},
    pages: {signIn: "/login"},
});

export { handler as GET, handler as POST };
