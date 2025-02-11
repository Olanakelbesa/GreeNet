import React from "react";
import alert from "@/public/images/alert.png";
import Image from "next/image";
import pricealert from "@/public/icons/pricealert.svg";
import cloudplus from "@/public/icons/cloud-plus.svg";

function AlertOverview() {
	return (
		<div className=" px-6 py-8 rounded-lg  shadow-md shadow-[#c1ffcf]">
			<div className="flex flex-col gap-2 justify-center items-center py-2">
				<div className="w-20 h-20 bg-[#29bb49] bg-opacity-10 p-2  rounded-3xl flex justify-center ">
					<Image src={alert} alt="alert" className="" />
				</div>
				<p className="font-medium text-3xl">Alert</p>
			</div>
			<div className="flex flex-col gap-3 py-6">
				<div className="flex flex-col gap-1">
					<div className="flex gap-3">
						<Image src={pricealert} alt="price alert" />
						<p className="">Price Alert</p>
					</div>
					<div className="flex gap-2 items-center px-3">
						<div className="font-bold text-2xl w-1 h-1 rounded-full bg-gray-400"></div>
						<p className="text-gray-400 text-sm">
							Wheat Price has icreased by 5%
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<div className="flex gap-3">
						<Image src={cloudplus} alt="price alert" />
						<p className="">Weather Alert</p>
					</div>
					<div className="flex gap-2 items-center px-3">
						<div className="font-bold text-2xl w-1 h-1 rounded-full bg-gray-400"></div>
						<p className="text-gray-400 text-sm">
							Heavy rain expected tomorrow.
						</p>
					</div>
				</div>
			</div>
			<div className="w-full py-3 bg-[#29bb49] bg-opacity-10 flex justify-center items-center rounded-lg">
				<a
					href="./"
					className="text-[#29bb49] underline font-semibold hover:no-underline "
				>
					View All Alerts
				</a>
			</div>
		</div>
	);
}

export default AlertOverview;
