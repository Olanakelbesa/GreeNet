import Image from "next/image";
import React from "react";
import hint from "@/public/images/hint.png";
import Triangle from "@/public/images/triangle.png";
import check from "@/public/images/🦆 icon _Check Circle_.png";
import cross from "@/public/images/cross.png";
import white_check from "@/public/images/white_check.png";
import dropbox from "@/public/images/dropbox.png";

function PricingPlan() {
	return (
		<div className=" h-screen">
			<div className="flex justify-center">
				<p className="font-semibold text-3xl py-3">Pricing Plan</p>
			</div>
			<div className="border-b-4 w-32 rounded-full  border-solid border-green-400 mx-auto "></div>

			<div className="flex items-center justify-center gap-2 py-5">
				<Image src={hint} alt="" className="w-3 h-4" />
				<div className="flex gap-5">
					<p className="font-semibold ">Monthly</p>
					<p className="font-semibold">Annually (20% off)</p>
				</div>
			</div>
			<div className="flex justify-center gap-10 pt-14">
				<div className="w-[20%] border-2 border-solid border-green-500 h-[60vh] mt-10 pt-12 rounded-2xl py-8">
					<div className="flex gap-3 px-5">
						<div className="bg-green-100 p-2 rounded-xl">
							<Image src={Triangle} alt="triangle" />
						</div>
						<div className="">
							<p className="font-semibold">For individuals</p>
							<p className="font-bold text-lg">Basic</p>
						</div>
					</div>
					<div className="p-5 ">
						<div className="bg-green-100 rounded-lg p-2">
							<p className="text-center font-semibold">Free</p>{" "}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2 px-5">
							<Image src={check} alt="" className="w-4 h-4" />
							<p className="">Basic Market Data</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={check} alt="" className="w-4 h-4" />
							<p className="">Basic weather forecasts</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={check} alt="" className="w-4 h-4" />
							<p className="">Basic crop listings</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={check} alt="" className="w-4 h-4" />
							<p className="">Limited community access</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={check} alt="" className="w-4 h-4" />
							<p className="">Limited community access</p>
						</div>
						<div className="px-5 py-3">
							<div className="border-2 border-solid border-green-500 rounded-3xl text-center p-2">
								<p className="text-green-500">Get Started For Free</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[22%] text-white bg-green-500 rounded-2xl h-[66vh] py-6">
					<div className="flex justify-end px-5">
						<div className=" bg-white p-2 w-28 text-center rounded-xl">
							<p className="text-black font-semibold">Popular</p>
						</div>
					</div>
					<div className="flex gap-3 px-5 py-3">
						<div className="bg-white p-2 rounded-xl">
							<Image src={cross} alt="triangle" />
						</div>
						<div className="">
							<p className="font-semibold">For individuals</p>
							<p className="font-bold text-lg">Standard</p>
						</div>
					</div>
					<div className="p-5 ">
						<div className="bg-green-400 rounded-lg p-2">
							<p className="text-center font-semibold">$10/Month</p>{" "}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2 px-5">
							<Image src={white_check} alt="" className="w-4 h-4" />
							<p className="">All features in Basic plan</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={white_check} alt="" className="w-4 h-4" />
							<p className="">Enhanced market data and trends</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={white_check} alt="" className="w-4 h-4" />
							<p className="">Advanced weather forecasts & alerts</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={white_check} alt="" className="w-4 h-4" />
							<p className="">Priority crop listings</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={white_check} alt="" className="w-4 h-4" />
							<p className="">Access to educational resources</p>
						</div>
						<div className="px-5 py-3">
							<div className="bg-white rounded-3xl text-center p-2">
								<p className="text-black font-semibold">Upgrade to Standard</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-[20%] border-2 border-solid border-green-500 h-[60vh] mt-10 pt-12 rounded-2xl py-8">
					<div className="flex gap-3 px-5">
						<div className="bg-green-100 p-2 rounded-xl">
							<Image src={dropbox} alt="triangle" />
						</div>
						<div className="">
							<p className="font-semibold">For individuals</p>
							<p className="font-bold text-lg">Premium</p>
						</div>
					</div>
					<div className="p-5 ">
						<div className="bg-green-100 rounded-lg p-2">
							<p className="text-center font-semibold">$30/Month</p>{" "}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2 px-5">
							<Image src={check} alt="" className="w-4 h-4" />
							<p className="">All features in Standard plan</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={check} alt="" className="w-4 h-4" />
							<p className="">Custom alerts and notifications</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={check} alt="" className="w-4 h-4" />
							<p className="">Premium listing visibility</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={check} alt="" className="w-4 h-4" />
							<p className="">Full community access</p>
						</div>
						<div className="flex items-center gap-2 px-5">
							<Image src={check} alt="" className="w-4 h-4" />
							<p className="">Personal account manager</p>
						</div>
						<div className="px-5 py-3">
							<div className="border-2 border-solid border-green-500 rounded-3xl text-center p-2">
								<p className="text-green-500">Go Premium</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PricingPlan;
