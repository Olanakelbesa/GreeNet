import React from "react";
import Image from "next/image";
import line from "@/public/images/line.png";

function HowItWork() {
	return (
		<div className="relative h-screen overflow-x-hidden">
			<div className="flex justify-center">
				<p className="font-semibold text-3xl py-4">How It Works</p>
			</div>
			<div className="border-b-4 w-32 rounded-full border-solid border-green-400 mx-auto "></div>
			<div className="absolute -left-3 top-0  bg-green-50 w-60 h-60 rounded-full z-10  "></div>
			<div className="absolute -right-10 bottom-20  bg-green-50 w-60 h-60 rounded-full z-10  "></div>
			<div className=" relative flex justify-center mt-20">
				<div className="relative ">
					<p className="absolute top-32 left-40  text-[110px] font-semibold text-green-500 z-20">
						1
					</p>
					<div className="absolute -bottom-32 left-16  w-56 border-2 border-green-300 -mt-3 z-10 h-28 rounded-lg p-3 ">
						<p className=" font-semibold ">Real-Time Market Data</p>
						<p className="text-sm text-gray-500">
							Stay updated with the latest market prices and trends for your
							crops.
						</p>
					</div>
				</div>
				<div className="relative ">
					<p className="absolute top-16 left-[4.3em] pl-6  text-[110px] font-semibold text-green-500 z-20">
						2
					</p>
					<div className="absolute top-[17.5em] left-[26em] w-56 border-2 border-green-300 -mt-3 z-10 h-28 rounded-lg p-3 ">
						<p className=" font-semibold ">Real-Time Market Data</p>
						<p className="text-sm text-gray-500">
							Stay updated with the latest market prices and trends for your
							crops.
						</p>
					</div>
				</div>
				
				<Image
					src={line}
					alt="line"
					width={960}
					height={600}
					className="relative "
				/>
				<div className="relative ">
					<p className="absolute -top-36  -right-1  text-[110px] font-semibold text-green-500 z-20">
						3
					</p>
					<div className="absolute top-16 -right-24  w-56 border-2 border-green-300 -mt-3 z-10 h-28 rounded-lg p-3 ">
						<p className=" font-semibold ">Real-Time Market Data</p>
						<p className="text-sm text-gray-500">
							Stay updated with the latest market prices and trends for your
							crops.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HowItWork;
