"use client";

import { toggleTheme } from "@/app/redux/slice/themeSlice";
import { RootState } from "@/app/redux/store";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react"; // Import useEffect for client-side rendering
import { GoPeople } from "react-icons/go";
import {
	IoAlertCircleOutline,
	IoListCircleOutline,
	IoMapOutline,
} from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdMenu, MdOutlineAutoGraph, MdOutlineDarkMode } from "react-icons/md";
import { TbPremiumRights } from "react-icons/tb";
import { TiWeatherCloudy } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

function SideBar() {
	const dispatch = useDispatch();
	const { mode } = useSelector((state: RootState) => state.theme);

	const pathname = usePathname();
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		if (mode === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [mode]);

	const handleSignOut = async () => {
		await signOut(); // Perform sign out
		window.location.href = "/";
	};

	return (
		<div className="fixed w-[20%] mt-1  ml-1 h-[90vh] bg-[#29BB49] bg-opacity-0 dark:bg-[#282828] dark:text-white px-5 pr-10 py-4 border-2 border-solid border-[#29BB49] border-opacity-25 rounded-lg ">
			<p className="text-xl ">DashBoard</p>
			<div>
				<p className="py-2 text-black dark:text-white text-opacity-40 ">menu</p>
				<div className="flex flex-col gap-2">
					{[
						{ href: "/dashboard/overview", icon: <MdMenu />, text: "Overview" },
						{
							href: "/dashboard/weather",
							icon: <TiWeatherCloudy />,
							text: "Weather",
						},
						{
							href: "/dashboard/marketdata",
							icon: <MdOutlineAutoGraph />,
							text: "Market Data",
						},
						{
							href: "/dashboard/interactivemaps",
							icon: <IoMapOutline />,
							text: "Interactive Map",
						},
						{
							href: "/dashboard/alert",
							icon: <IoAlertCircleOutline />,
							text: "Alert",
						},
						{
							href: "/dashboard/community",
							icon: <GoPeople />,
							text: "Community",
						},
					].map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className={`flex items-center gap-2 text-black dark:text-white ${
								pathname === item.href
									? "bg-[#29BB49] text-white font-semibold rounded-lg"
									: "hover:text-[#29bb49]"
							} p-2`}
						>
							<span>{item.icon}</span>
							<p>{item.text}</p>
						</Link>
					))}
				</div>
			</div>
			<div>
				<p className="py-3  text-black dark:text-white text-opacity-40 ">personal</p>
				<div className="flex flex-col gap-2">
					<Link
						href={"/dashboard/watchlist"}
						className={`flex items-center gap-2 text-black dark:text-white ${
							pathname === "/dashboard/watchlist"
								? "bg-[#29BB49] text-white font-semibold rounded-lg"
								: "hover:text-[#29bb49]"
						} p-2  `}
					>
						<IoListCircleOutline className="" />
						<p>Watchlist</p>
					</Link>
					<div
						className={`flex justify-between items-center gap-2 text-black dark:text-white ${
							pathname === "/dashboard/subscription"
								? "bg-[#29BB49] text-white font-semibold rounded-lg"
								: "hover:text-[#29bb49]"
						} p-2  `}
					>
						<Link
							href={"/dashboard/subscription"}
							className="flex items-center gap-2  "
						>
							<TbPremiumRights className="text-lg  text-opacity-60" />
							<p className="font-normal focus:bg-[#29BB49] focus:text-white focus:font-semibold ">
								Subscription
							</p>
						</Link>
						<div className="flex items-center bg-[#29BB49] bg-opacity-25 rounded-full px-2 ">
							<p>Basic</p>
						</div>
					</div>
					<div className="flex justify-between items-center p-2">
						<div className="flex items-center gap-2  ">
							<MdOutlineDarkMode className="text-lg" />
							<p className="font-normal focus:bg-[#29BB49] focus:text-white focus:font-semibold ">
								DarkMode
							</p>
						</div>
						<label
							onClick={() => dispatch(toggleTheme())}
							className="relative inline-flex items-center cursor-pointer"
						>
							<input
								type="checkbox"
								className="sr-only peer"
								checked={enabled}
								onChange={() => {
									setEnabled(!enabled);
									dispatch(toggleTheme());
								}}
							/>
							<div className="w-14 h-6 bg-[#29BB49] bg-opacity-20 border-2 border-solid border-[#29BB49] peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
						</label>
					</div>
				</div>
			</div>
			<div className="flex items-end w-full">
				<button
					onClick={handleSignOut} // Call the handleSignOut function
					className="flex gap-2 w-full items-center mt-4 text-black dark:text-white  hover:text-[#29bb49] p-2"
				>
					<LuLogOut className="text-xl text-[#29bb49] " />
					<p>Logout</p>
				</button>
			</div>
		</div>
	);
}

export default SideBar;
