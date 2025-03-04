"use client";

import React, { useState } from "react";
import GoogleMapComponent from "./GoogleMap";

function Map() {
	const [center, setCenter] = useState({ lat: 9.0, lng: 38.75 });
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = async () => {
		try {
			const response = await fetch(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
					searchQuery
				)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
			);
			const data = await response.json();
			if (data.results && data.results.length > 0) {
				const location = data.results[0].geometry.location;
				setCenter({ lat: location.lat, lng: location.lng });
			} else {
				alert("Location not found");
			}
		} catch (error) {
			console.error("Error fetching location data:", error);
		}
	};

	return (
		<div className="bg-[#29bb49] dark:text-white bg-opacity-10 rounded-lg p-2 mt-4">
			<div className="bg-white dark:bg-[#282828] dark:border-[#282828] border rounded-lg p-6">
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl font-semibold leading-none tracking-tight">
						Interactive Map
					</h1>
					<p className="text-sm text-muted-foreground dark:text-gray-200">
						Explore the Interactive Map: Navigate, Discover, and Engage with Key
						Locations and Insights
					</p>
				</div>
				<div className="w-full flex gap-2 items-center py-4">
					<input
						type="text"
						placeholder="Find High Demand Area"
						className="border-2 w-[80%] border-[#3f3f3f] border-opacity-40 dark:bg-[#3f3f3f] focus:outline-none focus:border-[#29bb49] rounded-lg p-2"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<div
						className="w-[20%] text-center bg-[#29bb49] p-2 rounded-lg text-white font-semibold cursor-pointer"
						onClick={handleSearch}
					>
						Find
					</div>
				</div>
				<div className="rounded-lg">
					<GoogleMapComponent center={center} />
				</div>
			</div>
		</div>
	);
}

export default Map;
