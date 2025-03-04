import CircularProgressbar from "@/app/dashboard/overview/CircularProgressbar";
import React from "react";
import { MarketStatus } from "./MarketStatus";
import Croplist from "./Croplist";
import Map from "./Map";
import { Barchart } from "@/app/dashboard/overview/WeeklyOverviewBarChart";
import { HighDemandChart } from "@/app/dashboard/overview/HighDemandChart";
import AlertOverview from "./AlertOverview";
import BlogCard from "./BlogCard";
import VideoCard from "./video";
import { Sun, Wind } from "lucide-react";
import { MdOutlineWaterDrop } from "react-icons/md";
import Setting from "@/components/Dashboard/Setting";

function Overview() {
	return (
		<div className="w-full flex gap-4 py-2 px-4 dark:text-white ">
			<div className="middle w-[60%]">
				<h1 className="text-2xl font-semibold px-4 py-3 dark:text-white">Overview</h1>
				<div className="flex gap-4 flex-wrap justify-between">
					<CircularProgressbar
						name="Temperature"
						progress={75}
						percentage={15}
						isTemperature={true}
						isWindSpeed={false}
						progressIcon={<Sun size={32}/>}
					/>
					<CircularProgressbar
						name="Humidity"
						progress={50}
						percentage={10}
						isTemperature={false}
						isWindSpeed={false}
						progressIcon={<MdOutlineWaterDrop size={32}/>}
					/>
					<CircularProgressbar
						name="Wind Speed"
						progress={30}
						percentage={5}
						isTemperature={false}
						isWindSpeed={false}
                        progressIcon={<Wind size={32}/>}
					/>
				</div>
				<div className="">
					<MarketStatus isInMarket={false} />
				</div>
				<div>
					<Croplist isInMarket={false}/>
				</div>
				<div>
					<Map />
				</div>
			</div>
			<div className="right w-[40%] flex flex-col gap-4  ">
				<Setting/>
				<div className="">
					<Barchart />
				</div>
				<div>
					<HighDemandChart />
				</div>
				<div>
					<AlertOverview />
				</div>
				<div>
					<BlogCard />
				</div>
				<div>
					<VideoCard />
				</div>
			</div>
		</div>
	);
}

export default Overview;
