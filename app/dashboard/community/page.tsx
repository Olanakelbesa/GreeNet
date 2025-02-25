import React from "react";
import {
	IoFilterOutline,
	IoSearchOutline,
	IoSettingsOutline,
} from "react-icons/io5";
import blogIcon from "@/public/icons/message-text.png";
import videoIcon from "@/public/icons/video-square.png";
import messageIcon from "@/public/icons/message.png";
import Image from "next/image";
import BlogCard from "../overview/BlogCard";
import AlertOverview from "../overview/AlertOverview";
import VideoCard from "../overview/video";

function page() {
	return (
		<div className="px-6">
			<div className="flex justify-between items-center ">
				<div className="text-2xl font-semibold  py-3">Community</div>
				<div>
					<div className="flex gap-4  w-full ">
						<button className="flex items-center gap-2 border border-[#29bb49] border-opacity-20 rounded-lg p-2 px-3 ">
							<IoSettingsOutline />
							<p>Setting</p>
						</button>
						<button className="flex items-center gap-2 border border-[#29bb49] border-opacity-20 rounded-lg p-2 px-3 ">
							<IoFilterOutline />
							<p>Filter</p>
						</button>
					</div>
				</div>
			</div>
			<div className="flex gap-4">
				<div className="left-side w-[70%] ">
					<form className=" relative w-full flex gap-2 items-center py-4">
						<IoSearchOutline className="absolute left-3 text-gray-400" />
						<input
							type="text"
							// value={}
							placeholder="Find farming info"
							className=" border-2 w-[80%] border-[#29bb49] border-opacity-40 rounded-lg p-2 px-10"
							// onChange={(e) => setInputValue(e.target.value)}
						/>
						<button
							type="submit"
							className="w-[20%] text-center bg-[#29bb49] p-2 rounded-lg text-white font-semibold cursor-pointer"
						>
							Find
						</button>
					</form>
					<div className="flex gap-4">
						<div className="px-4 py-2 border shadow-md rounded-lg">
							<p>All</p>
						</div>
						<div className="flex items-center gap-2 border rounded-lg shadow-md px-4 py-2">
							<div className="bg-[#29bb49] bg-opacity-10 p-1 rounded-lg ">
								<Image src={blogIcon} alt="blog icon" width={20} height={20} />
							</div>
							<p>Blog</p>
						</div>
						<div className="flex items-center gap-2 border rounded-lg shadow-md px-4 py-2">
							<div className="bg-[#29bb49] bg-opacity-10 p-1 rounded-lg ">
								<Image src={videoIcon} alt="blog icon" width={20} height={20} />
							</div>
							<p>Video</p>
						</div>
						<div className="flex items-center gap-2 border rounded-lg shadow-md px-4 py-2">
							<div className="bg-[#29bb49] bg-opacity-10 p-1 rounded-lg ">
								<Image
									src={messageIcon}
									alt="blog icon"
									width={20}
									height={20}
								/>
							</div>
							<p>Discussions</p>
						</div>
					</div>
					<div className="py-4">
						<div className="grid grid-cols-2 gap-4 bg-gray-100 rounded-lg  p-4 ">
							<BlogCard />
							<BlogCard />
							<BlogCard />
							<BlogCard />
							<BlogCard />
							<BlogCard />
						</div>
					</div>
				</div>
				<div className="right-side w-[30%] mt-36 flex flex-col gap-2">
          <AlertOverview />
          <VideoCard/>
          <VideoCard/>
          
        </div>
			</div>
		</div>
	);
}

export default page;
