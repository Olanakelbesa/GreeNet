import React from "react";
import BlogCard from "../overview/BlogCard";
import AlertOverview from "../overview/AlertOverview";
import VideoCard from "../overview/video";

function WeatherNews() {
	return (
		<div className="w-full ">
			<p className="p-4 text-lg font-semibold">Weather News</p>
			<div className="flex gap-4">
				<div className="left-side grid grid-cols-2 gap-4 w-[70%] ">
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
				<div className="right-side w-[30%] flex flex-col gap-4">
					<AlertOverview />
					<VideoCard />
				</div>
			</div>
		</div>
	);
}

export default WeatherNews;
