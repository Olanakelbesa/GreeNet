import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Crops from "./Crops";
import { MarketStatus } from "../overview/MarketStatus";
import Croplist from "../overview/Croplist";
import Watchlist from "./Watchlist";
import { HighDemandChart } from "../overview/HighDemandChart";
import AlertOverview from "../overview/AlertOverview";
import Setting from "@/components/Dashboard/Setting";

const cropData = [
	{ crop: "Maize", percent: 15 },

	{ crop: "Wheat", percent: 8 },

	{ crop: "Rice", percent: 15 },

	{ crop: "Barley", percent: 5 },
];

function page() {
	return (
		<div className="px-6 dark:text-white">
			<div className="flex justify-between items-center ">
				<div className="text-2xl font-semibold  py-3">Market Data</div>
				<div>
					<Setting />
				</div>
			</div>
			<div className="flex gap-4">
				<div className="left-side w-[70%]">
					<form className=" relative w-full flex gap-2 items-center py-4">
						<IoSearchOutline className="absolute left-3 text-gray-400" />
						<input
							type="text"
							// value={}
							placeholder="Find Crop or Hign Demand Area"
							className=" border-2 w-[80%] border-[#3f3f3f] border-opacity-40 dark:bg-[#3f3f3f] focus:outline-none focus:border-[#29bb49] rounded-lg p-2 px-10"
							// onChange={(e) => setInputValue(e.target.value)}
						/>
						<button
							type="submit"
							className="w-[20%] text-center bg-[#29bb49] hover:bg-opacity-80 p-2 rounded-lg text-white font-semibold cursor-pointer"
						>
							Find
						</button>
					</form>
					<div className=" flex gap-3 w-full pt-5  ">
						{cropData.map((item, index) => (
							<Crops key={index} crop={item.crop} percent={item.percent} />
						))}
					</div>
					<MarketStatus isInMarket={true} />
					<Croplist isInMarket={true} />
				</div>
				<div className="right-side w-[40%] flex flex-col gap-2 ">
					<Watchlist />
					<HighDemandChart />
					<AlertOverview />
				</div>
			</div>
		</div>
	);
}

export default page;
