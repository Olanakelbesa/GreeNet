import Image from "next/image";
import React from "react";
import clock from "@/public/icons/clock.svg";
import documenttext from "@/public/icons/document-text.png";
import video from "@/public/images/movie.png"

const VideoCard  = () => {
	return (
		<div className="shadow-md shadow-[#c1ffcf]  p-10 rounded-lg flex flex-col gap-2">
			<div className="">
				<Image src={video} alt="" className="w-full" width={324} height={120} />
			</div>
			<div className="flex gap-2">
				<Image src={clock} alt="" />
				<p className="text-sm">5 min read</p>
			</div>
			<div className="flex gap-2">
				<Image src={documenttext} alt="" />
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
