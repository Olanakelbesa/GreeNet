"use client";

import Link from "next/link";
import React, { useState } from "react";
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

function SideBar() {
	const [enabled, setEnabled] = useState(false);

	return (
		<div className="fixed top-16 left-2 w-[20%] bg-[#29BB49] bg-opacity-0 px-5 pr-10 py-4 border-2 border-solid border-[#29BB49] border-opacity-25 rounded-lg ">
			<p className="text-xl ">DashBoard</p>
			<div>
				<p className="py-2 text-black text-opacity-40 ">menu</p>
				<div className="flex flex-col gap-2">
					{[
						{ href: "/overview", icon: <MdMenu />, text: "Overview" },
						{ href: "/", icon: <TiWeatherCloudy />, text: "Weather" },
						{ href: "/", icon: <MdOutlineAutoGraph />, text: "Market Data" },
						{ href: "/", icon: <IoMapOutline />, text: "Interactive Map" },
						{ href: "/", icon: <IoAlertCircleOutline />, text: "Alert" },
						{ href: "/", icon: <GoPeople />, text: "Community" },
					].map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className="flex items-center gap-2 text-black hover:bg-[#29BB49] hover:text-white hover:font-semibold hover:rounded-lg p-2"
						>
							<span>{item.icon}</span>
							<p>{item.text}</p>
						</Link>
					))}
				</div>
			</div>
			<div>
				<p className="py-3  text-black text-opacity-40 ">personal</p>
				<div className="flex flex-col gap-2">
					<Link
						href={"/"}
						className="flex items-center gap-2 text-black hover:bg-[#29BB49] hover:text-white hover:font-semibold hover:rounded-lg p-2  "
					>
						<IoListCircleOutline className="" />
						<p>Wachlist</p>
					</Link>
					<div className="flex  justify-between items-center gap-2 text-black hover:bg-[#29BB49] hover:text-white hover:font-semibold hover:rounded-lg p-2 ">
						<Link href={"/"} className="flex items-center gap-2  ">
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
						<label className="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								className="sr-only peer"
								checked={enabled}
								onChange={() => setEnabled(!enabled)}
							/>
							<div className="w-14 h-6 bg-[#29BB49] bg-opacity-20 border-2 border-solid border-[#29BB49] peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
						</label>
					</div>
				</div>
			</div>
			<Link
				href={"./"}
				className="flex gap-2 items-center mt-4  text-black hover:bg-[#29BB49] hover:text-white hover:font-semibold hover:rounded-lg p-2"
			>
				<LuLogOut className="text-xl" />
				<p>LogOut</p>
			</Link>
		</div>
	);
}

export default SideBar;
