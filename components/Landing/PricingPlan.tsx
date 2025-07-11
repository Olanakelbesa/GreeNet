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
		<div className="py-12 px-4 md:px-10 lg:px-20" id="pricing">
			<div className="text-center">
				<p className="font-semibold text-3xl py-3">Pricing Plan</p>
				<div className="border-b-4 w-32 rounded-full border-green-400 mx-auto" />
			</div>

			<div className="flex items-center justify-center gap-2 py-5">
				<Image src={hint} alt="" className="w-3 h-4" />
				<div className="flex gap-5 text-sm sm:text-base">
					<p className="font-semibold cursor-pointer">Monthly</p>
					<p className="font-semibold cursor-pointer">Annually (20% off)</p>
				</div>
			</div>

			{/* Cards */}
			<div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10">
				{/* Basic Plan */}
				<div className="w-full sm:w-[80%] lg:w-[22%] border-2 border-green-500 rounded-2xl p-6 flex flex-col justify-between">
					<div className="flex gap-3 items-center mb-4">
						<div className="bg-green-100 p-2 rounded-xl">
							<Image src={Triangle} alt="triangle" />
						</div>
						<div>
							<p className="font-semibold text-sm">For individuals</p>
							<p className="font-bold text-lg">Basic</p>
						</div>
					</div>
					<div className="bg-green-100 text-center rounded-lg p-2 font-semibold mb-4">Free</div>
					<div className="flex flex-col gap-2 text-sm text-gray-700">
						{[
							"Basic Market Data",
							"Basic weather forecasts",
							"Basic crop listings",
							"Limited community access",
							"Limited community access"
						].map((item, index) => (
							<div key={index} className="flex items-center gap-2">
								<Image src={check} alt="" className="w-4 h-4" />
								<p>{item}</p>
							</div>
						))}
					</div>
					<div className="mt-6">
						<div className="border-2 border-green-500 rounded-3xl text-center p-2 text-green-500 font-medium cursor-pointer">
							Get Started For Free
						</div>
					</div>
				</div>

				{/* Standard Plan */}
				<div className="w-full sm:w-[80%] lg:w-[22%] bg-green-500 text-white rounded-2xl p-6 flex flex-col justify-between ">
					<div className="flex justify-end mb-2">
						<div className="bg-white text-black font-semibold text-center px-4 py-1 rounded-xl text-sm">
							Popular
						</div>
					</div>
					<div className="flex gap-3 items-center mb-4">
						<div className="bg-white p-2 rounded-xl">
							<Image src={cross} alt="cross" />
						</div>
						<div>
							<p className="font-semibold text-sm">For individuals</p>
							<p className="font-bold text-lg">Standard</p>
						</div>
					</div>
					<div className="bg-green-400 text-center rounded-lg p-2 font-semibold mb-4">$10/Month</div>
					<div className="flex flex-col gap-2 text-sm">
						{[
							"All features in Basic plan",
							"Enhanced market data and trends",
							"Advanced weather forecasts & alerts",
							"Priority crop listings",
							"Access to educational resources"
						].map((item, index) => (
							<div key={index} className="flex items-center gap-2">
								<Image src={white_check} alt="" className="w-4 h-4" />
								<p>{item}</p>
							</div>
						))}
					</div>
					<div className="mt-6">
						<div className="bg-white text-black rounded-3xl text-center p-2 font-semibold cursor-pointer">
							Upgrade to Standard
						</div>
					</div>
				</div>

				{/* Premium Plan */}
				<div className="w-full sm:w-[80%] lg:w-[22%] border-2 border-green-500 rounded-2xl p-6 flex flex-col justify-between">
					<div className="flex gap-3 items-center mb-4">
						<div className="bg-green-100 p-2 rounded-xl">
							<Image src={dropbox} alt="dropbox" />
						</div>
						<div>
							<p className="font-semibold text-sm">For individuals</p>
							<p className="font-bold text-lg">Premium</p>
						</div>
					</div>
					<div className="bg-green-100 text-center rounded-lg p-2 font-semibold mb-4">$30/Month</div>
					<div className="flex flex-col gap-2 text-sm text-gray-700">
						{[
							"All features in Standard plan",
							"Custom alerts and notifications",
							"Premium listing visibility",
							"Full community access",
							"Personal account manager"
						].map((item, index) => (
							<div key={index} className="flex items-center gap-2">
								<Image src={check} alt="" className="w-4 h-4" />
								<p>{item}</p>
							</div>
						))}
					</div>
					<div className="mt-6">
						<div className="border-2 border-green-500 text-green-500 rounded-3xl text-center p-2 font-medium cursor-pointer">
							Go Premium
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PricingPlan;
