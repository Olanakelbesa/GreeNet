"use client";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import {Provider} from "react-redux";
import {store} from "@/app/redux/store";


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
				<Provider store={store}>
					<SessionProvider>{!hideLayout && <NavBar />}</SessionProvider>
					<main>{children}</main>
				</Provider>
			</body>
		</html>
	);
}
