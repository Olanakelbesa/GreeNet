import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { connectToDB } from "@/lib/mongodb";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			name?: string | null;
			email?: string | null;
			image?: string | null;
		}
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
	}
}

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
				await connectToDB();

				// Find user in MongoDB
				const user = await User.findOne({ email: credentials?.email });
				if (!user) throw new Error("User not found");

				// Compare passwords
				const isValidPassword = await bcrypt.compare(credentials!.password, user.password);
				if (!isValidPassword) throw new Error("Incorrect password");

				return { id: user._id.toString(), name: user.name, email: user.email };
			},
		}),
	],

	secret: process.env.NEXTAUTH_SECRET,
	session: { strategy: "jwt" },

	callbacks: {
		async signIn({ account, profile }) {
			try {
				if (account?.provider === "google") {
					await connectToDB();

					if (!profile?.email) {
						console.error("❌ No email in Google profile");
						return false; 
					}
		
					let user = await User.findOne({ email: profile?.email });
					if (!user) {
						console.log("✅ Creating new user...");
						user = new User({
							name: profile?.name,
							email: profile?.email,
							image: profile?.image,
							provider: "google",
						});
						await user.save();
						console.log("✅ User saved to database");
					} else {
						console.log("✅ User already exists");
					}
				}
				return true;
			} catch (error) {
				console.error("❌ Error during Google sign-in:", error);
				return false;
			}
		},

		async jwt({ token, user }) {
			if (user) token.id = user.id;
			return token;
		},

		async session({ session, token }) {
			if (session?.user) {
				session.user.id = token.id;
			}
			return session;
		},
	},

	pages: { signIn: "/login" },
});

export { handler as GET, handler as POST };
