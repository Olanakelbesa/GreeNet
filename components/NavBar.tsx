"use client";

import Image from "next/image";
import Logo from "@/public/images/logo-1.png";
import search from "@/public/images/Vector.png";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { IoNotificationsOutline } from "react-icons/io5";
import profilepic from "@/public/images/profilepic.jpg";

const NavBar = () => {
	const { data: session } = useSession();
	const [userName, setUserName] = useState(session?.user?.name || "");

	useEffect(() => {
		if (session?.user?.name) {
			setUserName(
				session?.user?.name[0].toUpperCase() + session.user.name.slice(1)
			);
		}
	}, [session]);

	return (
		<div className="h-16">
			<nav className="h-16 z-40 fixed w-full bg-white flex items-center justify-around  shadow-md py-1  ">
				<div className="flex items-center">
					<Image
						src={Logo}
						alt="logo"
						width={20}
						height={20}
						className="rounded-full w-full p-3"
					/>
					<p className="text-lg font-semibold">
						GreeNet<span className="text-green-500">.</span>
					</p>
				</div>
				<div className="flex items-center font-semibold gap-8">
					<Link href={"/home"}>Home</Link>
					<Link href={"/dashboard/overview"}>Dashboard</Link>
					<Link href={"/howitwork"}>How it work</Link>
					<Link href={"/help"}>Help</Link>
					<div className="">
						<Image src={search} alt="search" width={18} height={18} />
					</div>
				</div>
				{session ? (
					<div className="flex items-center ">
						<IoNotificationsOutline className="text-2xl text-[#29bb49]" />
						<div className="w-[2px] h-8 bg-[#28bb49] mx-2 "></div>
						<Image
							className="rounded-full"
							src={session?.user?.image? session?.user?.image : profilepic }
							alt=""
							width={35}
							height={35}
						/>

						<div className="px-2 flex flex-col justify-center py-2">
							<p className="font-semibold text-lg">{userName}</p>
							<p className="text-sm text-gray-400">{session.user?.email}</p>
						</div>
					</div>
				) : (
					<div className="flex items-center gap-4">
						<Link
							href={"/login"}
							className="border-2 border-solid border-green-500 py-2 px-6 text-green-500 text-sm font-semibold rounded-xl "
						>
							LogIn
						</Link>
						<Link
							href={"/signup"}
							className="bg-green-500 text-white text-sm font-semibold py-2 px-6 rounded-xl "
						>
							SignUp
						</Link>
					</div>
				)}
			</nav>
		</div>
	);
};

export default NavBar;
