"use client";

import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { BiDownArrow } from "react-icons/bi";
const chartData = [
	{ browser: "Maize", visitors: 187, fill: "#29bb49" },
	{ browser: "Wheat", visitors: 200, fill: "#29bb49" },
	{ browser: "Rice", visitors: 275, fill: "#29bb49" },
	{ browser: "Barley", visitors: 173, fill: "#29bb49" },
	{ browser: "Soybean", visitors: 90, fill: "#29bb49" },
	{ browser: "Barley", visitors: 173, fill: "#29bb49" },
];

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	Maize: {
		label: "Maize",
	},
	Wheat: {
		label: "Wheat",
	},
	Rice: {
		label: "Rice",
	},
	Barley: {
		label: "Barley",
	},
	Soybean: {
		label: "Soybean",
	},
} satisfies ChartConfig;

export function Barchart() {
	return (
		<Card className="border-none shadow-md shadow-[#c1ffcf]   ">
			<CardHeader>
				<div className="flex justify-between ">
					<div className="flex flex-col gap-4">
						<CardTitle>Weekly Overview</CardTitle>
						<CardDescription>
							Your sales performance is 30% better compare to last month
						</CardDescription>
					</div>
					<div className="h-8 flex justify-center items-center gap-2 border border-opacity-30 p-1 px-2 rounded-lg border-[#29bb49]">
						<div className="border-2 border-[#29bb49] rounded-md p-0.5 opacity-40">
							<BiDownArrow className="text-xs text-[#29bb49]" />
						</div>
						<p className="text-[#29bb49]">weekly</p>
					</div>
				</div>
			</CardHeader>
			<CardContent className=" ">
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="browser"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) =>
								chartConfig[value as keyof typeof chartConfig]?.label
							}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar
							dataKey="visitors"
							strokeWidth={2}
							radius={8}
							barSize={40}
							height={20}
							activeIndex={2}
							activeBar={({ ...props }) => {
								return (
									<Rectangle
										{...props}
										fillOpacity={0.8}
										stroke={props.payload.fill}
										strokeDasharray={4}
										strokeDashoffset={4}
									/>
								);
							}}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className="w-full py-3 bg-[#29bb49] bg-opacity-10 flex justify-center items-center rounded-lg">
					<a
						href="./"
						className="text-[#29bb49] underline font-semibold hover:no-underline "
					>
						View Details
					</a>
				</div>
			</CardFooter>
		</Card>
	);
}
