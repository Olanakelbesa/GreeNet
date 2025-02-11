import React from 'react'
import Image from 'next/image'
import dashboard from "@/public/images/dashboard.png";
import leftleaf from "@/public/images/left-leaf.png";
import rightleaf from "@/public/images/right-leaf.png";

function HeroSection() {
  return (
    <div className="main flex pt-80 justify-center bg-gradient-to-b from-green-100 to-white h-screen ">
				<div className="absolute top-10 left-0 z-[5]">
					<Image src={leftleaf} alt="leaf" width={120} height={120} />
				</div>
				<div className="absolute top-72 right-0">
					<Image src={rightleaf} alt="leaf" width={120} height={120} />
				</div>
				<div className="flex flex-col gap-2 items-center w-[65%] justify-center">
					<p className="text-5xl font-semibold">
						Empowering Farmers and Traders with Real-
					</p>
					<p className="text-center text-5xl font-semibold">
						Time Market <span className="text-green-600">Insights</span>
					</p>
					<p className="py-4 text-gray-500">
						“Connecting you to the best market opportunities, weather forecasts,
						and community support.”
					</p>
					<div className="py-2">
						<button className="bg-green-500 text-white rounded-full p-2 px-4">
							Get Started
						</button>
					</div>
					<div>
						<Image src={dashboard} alt="dash" width={800} height={600} />
					</div>
				</div>
			</div>
  )
}

export default HeroSection