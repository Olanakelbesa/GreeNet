"use client"

import { Area, AreaChart } from "recharts"


const chartData = [
  {  desktop: 86 },
  {  desktop: 105 },
  {  desktop: 137 },
  {  desktop: 73 },
  {  desktop: 109 },
  {  desktop: 94 },
]

export function Chart() {
	return (
	  <div className="w-[80px] h-[40px] flex items-center justify-center">
		<AreaChart width={80} height={40} data={chartData}>
		  <defs>
			<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
			  <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
			  <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
			</linearGradient>
		  </defs>
		  <Area
			dataKey="desktop"
			type="natural"
			fill="url(#fillDesktop)"
			fillOpacity={0.4}
			stroke="var(--color-desktop)"
		  />
		</AreaChart>
	  </div>
	);
  }
  