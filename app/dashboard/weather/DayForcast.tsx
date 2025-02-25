import Image from "next/image";
import React from "react";
import { MdWaterDrop } from "react-icons/md";

interface ForcastProps {
	day: string;
	forcastImage: string;
	forcastMaxNumber: string;
	forcastMinNumber: string;
	forcastDescription: string;
	forcastPercent: string;
}

const DayForcast: React.FC<ForcastProps> = ({
	day,
	forcastImage,
	forcastMaxNumber,
	forcastMinNumber,
	forcastDescription,
	forcastPercent,
}) => {
	return (
		<div className="border border-[#29bb49] rounded-lg p-5 min-w-60 ">
			<p className="font-semibold">{day}</p>
			<div className="flex justify-between py-3 ">
				<div className="flex gap-2">
					<Image
						src={forcastImage}
						alt="forcastImage"
						width={30}
						height={30}
						className="py-2"
					/>
					<div className="font-medium">
						<p>{forcastMaxNumber}&apos;</p>
						<p>{forcastMinNumber}&apos;</p>
					</div>
				</div>
				<div className="">
					<p className="text-sm">{forcastDescription}</p>
					<div className="flex items-center gap-1 justify-center">
						<MdWaterDrop className="text-[#29bb49]" />
						<p>{forcastPercent}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DayForcast;
