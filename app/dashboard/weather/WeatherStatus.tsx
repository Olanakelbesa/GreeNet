"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	
} from "@/components/ui/chart";
import Image from "next/image";
import { MdWaterDrop } from "react-icons/md";

interface WeatherStatusProps {
	forecastDays: {
		day: string;
		forecastMaxNumber: string;
		forecastMinNumber: string;
		forecastPercent: string;
		forecastImage: string;
		forecastDescription: string;
	}[];
}

const CustomToolTip = ({ active, payload, label }: any) => {
	if (active && payload && payload.length) {
		const {
			day,
			forecastImage,
			forecastDescription,
			forecastMaxNumber,
			forecastMinNumber,
			forecastPercent,
		} = payload[0].payload;
		return (
			<div className="border bg-white dark:bg-[#121212] rounded-lg min-w-44 px-4 py-2 ">
				<p className="font-semibold">{day}</p>
				<div className="flex items-center justify-between ">
					<div className="flex items-center gap-2">
						<Image
							src={forecastImage}
							alt="forecastImage"
							width={30}
							height={30}
							className="py-2"
						/>
						<div className="font-medium">
							<p>{forecastMaxNumber}&apos;</p>
							<p>{forecastMinNumber}&apos;</p>
						</div>
					</div>
					<div>
						<p className="text-sm ">{forecastDescription}</p>
						<div className="flex items-center gap-1 justify-center">
							<MdWaterDrop className="text-[#29bb49]" />
							<p>{forecastPercent}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export function WeatherStatus({ forecastDays }: WeatherStatusProps) {
	// Prepare data for the chart
	const chartData = forecastDays.map((day) => ({
		day: day.day.slice(0, 3), // Shorten weekday to 3 letters (e.g., Mon)
		maxTemp: parseInt(day.forecastMaxNumber.replace("°C", ""), 10), // Extract max temp as number
		minTemp: parseInt(day.forecastMinNumber.replace("°C", ""), 10), // Extract min temp as number
		avgTemp:
			(parseInt(day.forecastMaxNumber.replace("°C", ""), 10) +
				parseInt(day.forecastMinNumber.replace("°C", ""), 10)) /
			2, // Average temperature
		forecastImage: day.forecastImage, // Add forecast image
		forecastDescription: day.forecastDescription, // Add forecast description
		forecastMaxNumber: day.forecastMaxNumber, // Add max temp as string
		forecastMinNumber: day.forecastMinNumber, // Add min temp as string
		forecastPercent: day.forecastPercent, // Add chance of rain
	}));

	// Debug: Log chartData
	console.log("Chart Data:", chartData);

	if (chartData.length === 0) {
		return (
			<Card className="border-none w-[80%]">
				<CardHeader>
					<CardTitle className="text-lg">7-days forecast</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-center text-gray-500">
						No forecast data available.
					</p>
				</CardContent>
			</Card>
		);
	}
	const chartConfig = {
		desktop: {
			label: "day",
		},
	} satisfies ChartConfig;

	return (
		<Card className="border-none w-[80%] dark:bg-[#282828] text-white">
			<CardHeader>
				<CardTitle className="text-lg">7-days forecast</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
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
							tickFormatter={(value) => value.toUpperCase()} // Format weekday (e.g., MON)
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickCount={6}
						/>
						<ChartTooltip content={<CustomToolTip />} />
						<defs>
							<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#29bb49" stopOpacity={0.5} />
								<stop offset="50%" stopColor="#29bb49" stopOpacity={0.0} />
							</linearGradient>
						</defs>
						<Area
							dataKey="avgTemp"
							type="natural"
							fill="url(#fillDesktop)" // Reference the gradient
							stroke="#29bb49"
							strokeWidth={5}
							stackId="a"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
