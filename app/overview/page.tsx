import CircularProgressbar from "@/app/overview/CircularProgressbar";
import React from "react";
import { MarketStatus } from "./MarketStatus";
import Croplist from "./Croplist";
import Map from "./Map";
import { IoFilterOutline, IoSettingsOutline } from "react-icons/io5";
import { Barchart } from "@/app/overview/WeeklyOverviewBarChart";
import { HighDemandChart } from "@/app/overview/HighDemandChart";
import AlertOverview from "./AlertOverview";
import BlogCard from "./BlogCard";

function Page() {
	return (
		<div className="w-full flex gap-4 ">
			<div className="middle w-[60%]">
				<h1 className="text-2xl font-semibold px-4 py-3">Overview</h1>
				<div className="flex gap-4 flex-wrap justify-between">
					<CircularProgressbar
						name="Temperature"
						progress={75}
						percentage="15%"
						isTemperature={true}
						image = {"/images/sun.png"}
					/>
					<CircularProgressbar
						name="Humidity"
						progress={50}
						percentage="10%"
						isTemperature={false}
						image = {"/images/drop.png"}
					/>
					<CircularProgressbar
						name="Wind Speed"
						progress={30}
						percentage="5%"
						isTemperature={false}
						image = {"/images/cloud-drizzle.png"}
					/>
				</div>
				<div className="">
					<MarketStatus />
				</div>
				<div>
					<Croplist />
				</div>
				<div>
					<Map />
				</div>
			</div>
			<div className="right w-[40%] flex flex-col gap-4  ">
				<div className="flex gap-4 justify-end w-full pt-2">
					<button className="flex items-center gap-2 border border-[#29bb49] border-opacity-20 rounded-lg p-2 px-3 ">
						<IoSettingsOutline />
						<p>Setting</p>
					</button>
					<button className="flex items-center gap-2 border border-[#29bb49] border-opacity-20 rounded-lg p-2 px-3 ">
						<IoFilterOutline />
						<p>Filter</p>
					</button>
				</div>
				<div className="">
					<Barchart />
				</div>
				<div>
					<HighDemandChart />
				</div>
				<div>
					<AlertOverview/>
				</div>
				<div>
					<BlogCard imageSrc={"/images/blogcard.png"}/>
				</div>
				<div>
					<BlogCard imageSrc={"/images/movie.png"}/>
				</div>
			</div>
		</div>
	);
}

export default Page;
