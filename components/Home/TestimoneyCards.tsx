import Image from "next/image";
import React from "react";
import person3 from "@/public/images/person3.jpg";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { testimoneyProps } from "./testimonials";

interface TestimoneyProps {
    testimonial: testimoneyProps;
    isMiddle: boolean;
}


const TestimoneyCards: React.FC<TestimoneyProps> = ({ testimonial, isMiddle}) => {
	return (
		<div className={`w-[33%] bg-white px-10 py-8 rounded-xl shadow-lg  ${isMiddle? "h-[60vh]" : "h-76"} `}>
			<div className={`flex ${isMiddle? "justify-center" : "justify-between"}`}>
				<div className={`flex items-center gap-2 ${isMiddle? "flex-col jus" : ""}`}>
					<div className={`bg-[#29BB49] ${isMiddle? "w-40 h-40" : "w-24 h-24"} rounded-full flex justify-center items-center`}>
						<Image
							src={person3}
							alt=""
							className={` rounded-full  ${isMiddle? "w-36" : "w-[90%]"} `}
							
						/>
					</div>
					<p className=" font-semibold text-lg ">{testimonial.name}</p>
				</div>
			</div>
            <div className="flex items-end justify-end -mt-6 ">
					<FaQuoteRight className= {` ${isMiddle? "text-gray-400" : "text-[#29BB49]"} text-6xl text-opacity-20 `}/>
				</div>
			<div>
				<p className="text-lg ">
                {testimonial.review}
				</p>
				<p className="font-semibold">{testimonial.role}</p>
			</div>
			<div className="flex items-center gap-16 py-4">
				<p className="font-semibold">Reviews</p>
				<div className="flex gap-2">
					<FaStar className="text-[#efca13]" />
					<FaStar className="text-[#efca13]" />
					<FaStar className="text-[#efca13]" />
					<FaStar className="text-[#efca13]" />
				</div>
			</div>
		</div>
	);
}

export default TestimoneyCards;
