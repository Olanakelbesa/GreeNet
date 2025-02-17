"use client";
// import { metadata } from "./metadata";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();

	const hideLayout = pathname === "/login" || pathname === "/signup";

	return (
		<html lang="en">
			<body className=" flex flex-col">
				<SessionProvider>{!hideLayout && <NavBar />}</SessionProvider>
				<main>{children}</main>
			</body>
		</html>
	);
}
