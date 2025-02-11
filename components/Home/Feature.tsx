import React from "react";
import Image from "next/image";
import market from "@/public/images/market.png";
import weather from "@/public/images/cloud-plus.png";
import map from "@/public/images/map.png";
import people from "@/public/images/people.png";

function Feature() {
	return (
		<div className=" flex flex-col items-center justify-center h-screen pt-40 ">
			<p className=" text-3xl font-semibold py-2 ">Why Choose GreenNet?</p>
			<div className="border-b-4 w-40 rounded-full border-solid border-green-500 "></div>
			<div className="flex gap-4 w-[50%]  pt-10">
				<div className=" flex flex-col   w-[50%] p-2">
					<div className=" mx-auto border-2 border-green-500 rounded-full z-20 w-14 bg-green-50 p-3">
						<Image src={market} alt="market" width={30} height={30} />
					</div>
					<div className="border-2 border-gray-300 border-opacity-25 -mt-3 z-10 h-28 rounded-lg p-3 ">
						<p className=" font-semibold ">Real-Time Market Data</p>
						<p className="text-sm text-gray-500">
							Stay updated with the latest market prices and trends for your
							crops.
						</p>
					</div>
				</div>
				<div className=" flex flex-col   w-[50%] p-2">
					<div className=" mx-auto border-2 border-[#45DAE5] rounded-full z-20 w-14 bg-[#effdff] p-3">
						<Image src={weather} alt="market" width={30} height={30} />
					</div>
					<div className="border-2 border-gray-300 border-opacity-25 -mt-3 z-10 h-28 rounded-lg p-3 ">
						<p className=" font-semibold ">Weather Forecasts</p>
						<p className="text-sm text-gray-500">
							Plan your activities with accurate weather predictions and alerts.
						</p>
					</div>
				</div>
				<div className=" flex flex-col   w-[50%] p-2">
					<div className=" mx-auto border-2 border-[#E545AA] rounded-full z-20 w-14 bg-[#fef4fa] p-3">
						<Image src={map} alt="market" width={30} height={30} />
					</div>
					<div className="border-2 border-gray-300 border-opacity-25 -mt-3 z-10 h-28 rounded-lg p-3 ">
						<p className=" font-semibold ">Interactive Maps</p>
						<p className="text-sm text-gray-500">
							Explore markets and resources with detailed maps.
						</p>
					</div>
				</div>
			</div>
			<div className="flex gap-4 w-[30%] pt-10">
				<div className=" flex flex-col   w-[50%] p-2">
					<div className=" mx-auto border-2 border-[#A545E5] rounded-full z-20 w-14  bg-[#faf3ff] p-3">
						<Image src={map} alt="market" width={30} height={30} />
					</div>
					<div className="border-2 border-gray-300 border-opacity-25 -mt-3 z-10 h-28  rounded-lg p-3 ">
						<p className=" font-semibold ">SMS based Market Data</p>
						<p className="text-sm text-gray-500">
							Receive instant SMS alerts on market prices and trends.
						</p>
					</div>
				</div>
				<div className=" flex flex-col   w-[50%] p-2">
					<div className=" mx-auto border-2 border-[#454DE5] rounded-full z-20 w-14 bg-[#f4f4ff] p-3">
						<Image src={people} alt="market" width={30} height={30} />
					</div>
					<div className="border-2 border-gray-300 border-opacity-25 -mt-3 z-10 h-28 rounded-lg p-3 ">
						<p className=" font-semibold ">Community Support</p>
						<p className="text-sm text-gray-500">
							Join a network of user’s and experts for advice and collaboration.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feature;
