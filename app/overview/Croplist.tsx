import React  from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Chart } from "./Chart";
import { cropData } from "./cropData";



function Croplist() {

	return (
		<div className="bg-[#29bb49] bg-opacity-10 p-2 rounded-bl-xl rounded-br-lg ">
			<div className="bg-white rounded-lg border shadow-sm p-6">
				<h1 className="text-2xl font-semibold leading-none tracking-tight py-6 ">
					Croplist
				</h1>
				<div>
					{/* table header */}
					<div className="grid grid-cols-6 bg-[#29bb49] bg-opacity-5 py-2 px-4 rounded-lg font-semibold text-lg ">
						<div>Croplist</div>
						<div>chart</div>
						<div>price</div>
						<div>volume</div>
						<div>rank</div>
						<div>gain</div>
					</div>

					<div  className="py-3">
					{cropData.map((data, index) => (

						<div key={index} className="grid grid-cols-6  bg-white py-2 px-4 rounded-lg items-center  ">
							<div className="text-sm">
								<div className="font-medium">{data.name}</div>
								<div className="text-gray-300">{data.company}</div>
							</div>
							<div >
								<Chart/>
							</div>
							<div>{data.price}</div>
							<div>{data.volume}</div>
							<div>{data.rank}</div>
							<div className="">
								<div className={`flex justify-start gap-2 items-center ${ data.gain < 10 ? "text-red-400 bg-red-50 w-14 rounded-md px-2 " : "text-[#29bb49] bg-[#29bb49] bg-opacity-5 w-14 rounded-md px-2"} text-opacity-70`}>

								{data.gain < 10 ? <BiDownArrow/> : <BiUpArrow />}
								<div>{data.gain}</div>
								</div>
							</div>
						</div>
					))}
					</div>
					<div className="w-full py-3 bg-[#29bb49] bg-opacity-10 flex justify-center items-center rounded-lg">
                        <a href="./" className="text-[#29bb49] underline font-semibold hover:no-underline ">View Details</a>
                    </div>
				</div>
			</div>
		</div>
	);
}

export default Croplist;
