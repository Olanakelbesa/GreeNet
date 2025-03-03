"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
	{ day: "Mon", market: 86 },
	{ day: "Tue", market: 100 },
	{ day: "Wed", market: 95},
	{ day: "Thu", market: 80 },
	{ day: "Fri", market: 102 },
	{ day: "Sat", market: 99 },
];

const chartConfig = {
	desktop: {
		label: "market",
		color: "hsl(var(--chart-1))",
	},
	
} satisfies ChartConfig;

interface MarketStatusProps {
	isInMarket: boolean,
}

export const MarketStatus: React.FC<MarketStatusProps> = ({isInMarket}) => {
	return (
		<div className="p-2 mt-3 rounded-tl-lg rounded-tr-lg bg-[#29bb49] bg-opacity-10 ">
			<Card className="dark:bg-[#282828] dark:text-white dark:border-[#282828]">
				<CardHeader>
					<div className="flex justify-between ">
						<div className="flex flex-col gap-4">
							<CardTitle>Market Status</CardTitle>
							<CardDescription className="dark:text-gray-200">
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
				<CardContent>
					<ChartContainer config={chartConfig}>
						<AreaChart
							accessibilityLayer
							data={chartData}
							margin={{
								left: -20,
								right: 12,
							}}
						>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey="day"
								tickLine={false}
								axisLine={false}
								tickMargin={8}
								tickFormatter={(value) => value.slice(0, 3)}
							/>
							<YAxis
								tickLine={false}
								axisLine={false}
								tickMargin={8}
								tickCount={6}
							/>
							<ChartTooltip cursor={false} content={<ChartTooltipContent />}  />
							<defs>
								<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#29bb49" stopOpacity={0.8} />
									<stop offset="95%" stopColor="#29bb49" stopOpacity={0.0} />
								</linearGradient>
							</defs>

							<Area
								dataKey="market"
								type="natural"
								fill="url(#fillDesktop)" // Correctly reference the gradient
								stroke="#29bb49"
								strokeWidth={5}
								stackId="a"
							/>
						</AreaChart>
					</ChartContainer>
				</CardContent>
				{!isInMarket && (<CardFooter>
					<div className="w-full py-3 bg-[#29bb49] bg-opacity-10 flex justify-center items-center rounded-lg">
                        <a href="./" className="text-[#29bb49] underline font-semibold hover:no-underline ">View Details</a>
                    </div>
				</CardFooter>)}
			</Card>
		</div>
	);
}
