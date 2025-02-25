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
		// console.log("apiii:",apikey);
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`,
		);

		if (!response.ok) {
			throw new Error(`Error: ${response.status} - ${response.statusText}`);
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error: any) {
		console.error(error?.message);
		return NextResponse.json( // ✅ Added return here
			{ error: "Failed to fetch current weather data" },
			{ status: 500 }
		);
	}
}
