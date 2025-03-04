"use client";

import React, { useEffect, useState } from "react";
import CircularProgressbar from "../overview/CircularProgressbar";
import {
	IoFilterOutline,
	IoLocationOutline,
	IoSettingsOutline,
} from "react-icons/io5";
import Forecast from "./Forecast";
import axios from "axios";
import WeatherNews from "./WeatherNews";
import { Cloud, Sun, Wind } from "lucide-react";
import { MdOutlineWaterDrop } from "react-icons/md";
import Setting from "@/components/Dashboard/Setting";

function Weather() {
	const [currentWeather, setCurrentWeather] = useState("");
	const [city, setCity] = useState("Addis Ababa");
	const [precipitation, setPrecipitation] = useState(0);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		const fetchCurrentWeather = async () => {
			try {
				const response = await axios.get("/api/weather/current", {
					params: { city },
				});
				// console.log("current weather1111111111: ", currentWeather);
				setCurrentWeather(response.data);
				setPrecipitation(response.data.precip_mm ?? 0);
			} catch (error) {
				console.error("Error fetching current weather: ", error);
			}
		};

		fetchCurrentWeather();
	}, [city]);

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setCity(inputValue);
	}
	const maxPrecipitation = 10;
	const percentagePrecipitation = (precipitation / maxPrecipitation) * 10;
	console.log("precipitation:", precipitation);
	console.log("Current weather: ", currentWeather);
	if (!currentWeather) {
		return (
			<div className="text-[#29bb49] flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}
	return (
		<div className="px-6">
			<div className="flex justify-between items-center dark:text-white ">
				<div className="text-2xl font-semibold  py-3">Weather</div>
				<div>
					<Setting/>
				</div>
			</div>
			<form onSubmit={handleSearch} className="w-[60%] flex gap-2 items-center py-4">
				<input
					type="text"
					value={inputValue}
					placeholder="Search by city"
					className="border-2 w-[80%] border-[#3f3f3f] border-opacity-40 dark:bg-[#3f3f3f] focus:outline-none focus:border-[#29bb49] rounded-lg p-2 px-4"
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button type="submit"  className="w-[20%] text-center bg-[#29bb49] p-2 rounded-lg text-white font-semibold cursor-pointer">
					Search
				</button>
			</form>
			<div className="dark:text-white">
				<div className="fle flex-col gap-2">
					<h1 className="text-lg font-semibold ">Region</h1>
					<div className="flex gap-1 items-center py-2">
						<IoLocationOutline />
						<p>
							{city}, {currentWeather?.location?.country}
						</p>
					</div>
				</div>
				<div className="flex gap-4 flex-wrap justify-between  ">
					<CircularProgressbar
						name="Temperature"
						progress={currentWeather.current?.temp_c}
						percentage={15}
						isTemperature={true}
						isWindSpeed={false}
						progressIcon={<Sun size={24}/>}
					/>
					<CircularProgressbar
						name="Humidity"
						progress={currentWeather.current.humidity}
						percentage={10}
						isTemperature={false}
						isWindSpeed={false}
						progressIcon={<MdOutlineWaterDrop size={24}/>}
					/>
					<CircularProgressbar
						name="Precipitation"
						progress={percentagePrecipitation}
						percentage={5}
						isTemperature={false}
						isWindSpeed={false}
						progressIcon={<Cloud size={24}/>}
					/>
					<CircularProgressbar
						name="Wind Speed"
						progress={currentWeather.current.wind_kph}
						percentage={5}
						isTemperature={false}
						isWindSpeed={true}
						progressIcon={<Wind size={24}/>}
					/>
				</div>
			</div>
			<Forecast city={city} />
			<WeatherNews />
		</div>
	);
}

export default Weather;
