import React from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Chart } from "../overview/Chart";
import { cropData } from "../overview/cropData";

export const Watchlist = () => {
	return (
		<div className="bg-[#29bb49]  bg-opacity-5 p-2 rounded-xl ">
			<div className="bg-white dark:bg-[#282828]   rounded-lg  shadow-sm p-6">
				<h1 className="text-2xl font-semibold leading-none tracking-tight pb-4 ">
					Watchlist
				</h1>
				<div>
					{/* table header */}
					<div className="grid grid-cols-4 bg-[#29bb49] bg-opacity-5 py-2 px-4 rounded-lg font-semibold text-lg ">
						<div>Croplist</div>
						<div>Chart</div>
						<div>Price</div>
						<div>Gain</div>
					</div>

					<div className="py-3">
						{cropData.slice(0,4).map((data, index) => (
							<div
								key={index}
								className="grid grid-cols-4   bg-white dark:bg-[#282828]  py-2 px-4 rounded-lg items-center  "
							>
								<div className="text-sm">
									<div className="font-medium">{data.name}</div>
									<div className="text-gray-300">{data.company}</div>
								</div>
								<div>
									<Chart />
								</div>
								<div>{data.price}</div>
								<div className="">
									<div
										className={`flex justify-start gap-2 items-center ${
											data.gain < 10
												? "text-red-400 bg-red-50 w-14 dark:bg-[#29bb49] dark:bg-opacity-5 rounded-md px-2 "
												: "text-[#29bb49] bg-[#29bb49] bg-opacity-5 w-14 rounded-md px-2"
										} text-opacity-70`}
									>
										{data.gain < 10 ? <BiDownArrow /> : <BiUpArrow />}
										<div>{data.gain}</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="w-full py-3 bg-[#29bb49] bg-opacity-10 flex justify-center items-center rounded-lg">
						<a
							href="./"
							className="text-[#29bb49] underline font-semibold hover:no-underline "
						>
							View All
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Watchlist;
