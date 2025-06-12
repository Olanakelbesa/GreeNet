"use client";

import React, { useEffect, useState, useCallback } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { WeatherStatus } from "./WeatherStatus";
import Forecast from "./Forecast";
import { IoSearchOutline } from "react-icons/io5";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    precip_mm: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

export default function Weather() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCurrentWeather = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `/api/weather/current?city=${encodeURIComponent(city)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setCurrentWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    if (city) {
      fetchCurrentWeather();
    }
  }, [city, fetchCurrentWeather]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCurrentWeather();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Weather</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <Input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <IoSearchOutline className="h-5 w-5" />
            </Button>
          </form>

          {loading && <p>Loading weather data...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {currentWeather && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {currentWeather.location.name}
                  </h3>
                  <p className="text-gray-500">
                    {currentWeather.location.country}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={`https:${currentWeather.current.condition.icon}`}
                    alt={currentWeather.current.condition.text}
                    width={50}
                    height={50}
                  />
                  <span>{currentWeather.current.condition.text}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <CircularProgressbar
                    value={currentWeather.current.temp_c}
                    maxValue={50}
                    text={`${currentWeather.current.temp_c}°C`}
                    styles={buildStyles({
                      pathColor: "#29bb49",
                      textColor: "#29bb49",
                    })}
                  />
                  <p className="mt-2">Temperature</p>
                </div>

                <div className="flex flex-col items-center">
                  <CircularProgressbar
                    value={currentWeather.current.humidity}
                    maxValue={100}
                    text={`${currentWeather.current.humidity}%`}
                    styles={buildStyles({
                      pathColor: "#29bb49",
                      textColor: "#29bb49",
                    })}
                  />
                  <p className="mt-2">Humidity</p>
                </div>

                <div className="flex flex-col items-center">
                  <CircularProgressbar
                    value={currentWeather.current.wind_kph}
                    maxValue={100}
                    text={`${currentWeather.current.wind_kph} km/h`}
                    styles={buildStyles({
                      pathColor: "#29bb49",
                      textColor: "#29bb49",
                    })}
                  />
                  <p className="mt-2">Wind Speed</p>
                </div>

                <div className="flex flex-col items-center">
                  <CircularProgressbar
                    value={currentWeather.current.precip_mm}
                    maxValue={100}
                    text={`${currentWeather.current.precip_mm} mm`}
                    styles={buildStyles({
                      pathColor: "#29bb49",
                      textColor: "#29bb49",
                    })}
                  />
                  <p className="mt-2">Precipitation</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {currentWeather && (
        <>
          <Forecast city={city} />
          <WeatherStatus forecastDays={[]} />
        </>
      )}
    </div>
  );
}
