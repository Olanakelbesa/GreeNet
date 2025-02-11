import Image from "next/image";
import Logo from "@/public/images/logo-1.png";
import search from "@/public/images/Vector.png";
import React from "react";
import Link from "next/link";
const NavBar = () => {
	return (
		<div className="h-10">
			<nav className="z-40 fixed w-full bg-white flex items-center justify-around  shadow-md py-1  ">
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
					<Link href={"/dashboard"}>Dashboard</Link>
					<Link href={"/howitwork"}>How it work</Link>
					<Link href={"/help"}>Help</Link>
					<div className="">
						<Image src={search} alt="search" width={18} height={18} />
					</div>
				</div>
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
			</nav>
		</div>
	);
};

export default NavBar;
