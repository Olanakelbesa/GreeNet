import Image from "next/image";
import React from "react";
import video from "@/public/images/movie.png"
import { Clock, ListCollapse } from "lucide-react";

const VideoCard  = () => {
	return (
		<div className="shadow-md shadow-[#c1ffcf] dark:bg-[#282828] dark:text-white dark:shadow-[#575757] dark:shadow-md  p-10 rounded-lg flex flex-col gap-2">
			<div className="">
				<Image src={video} alt="" className="w-full" width={324} height={120} />
			</div>
			<div className="flex gap-2">
				<Clock size={20} />
				<p className="text-sm">5 min read</p>
			</div>
			<div className="flex items-center gap-2">
				<ListCollapse size={20} />
				<p className="font-semibold ">Farming Tip of the Day</p>
			</div>
			<div>
				<p className="text-[#6F6C8F] text-sm">
					Learn new techniques and improve your farming skills with our tips.
				</p>
			</div>
            
		</div>
	);
}

export default VideoCard;
