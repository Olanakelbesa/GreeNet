import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const city = req.nextUrl.searchParams.get("city");

	if (!city) {
		return NextResponse.json(
			{ error: "City parameter is required" },
			{ status: 400 }
		);
	}

	try {
		const apikey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
		const response = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=${7} `
		);
		
		if(!response.ok){
			throw new Error(`Error: ${response.status} -${response.statusText}`)
		}
		const data = await response.json();
		return NextResponse.json(data);
	} catch (error: any) {
		console.error(error?.message);
		return NextResponse.json(
			{ error: "Failed to fetch weather forecast data." },
			{ status: 500 }
		);
	}
}
