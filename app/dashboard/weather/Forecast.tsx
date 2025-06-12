"use client";
import React, { useEffect, useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { IoCalendarClearOutline } from "react-icons/io5";
import DayForcast from "./DayForcast";
import axios from "axios";
import { WeatherStatus } from "./WeatherStatus";

// Define types for the API response
interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    daily_chance_of_rain: number;
    condition: {
      icon: string;
      text: string;
    };
  };
}

interface ForecastResponse {
  forecast: {
    forecastday: ForecastDay[];
  };
}

interface ForecastProps {
  city: string;
}

interface TransformedForecastDay {
  day: string;
  forecastImage: string;
  forecastDescription: string;
  forecastMaxNumber: string;
  forecastMinNumber: string;
  forecastPercent: string;
}

const Forecast: React.FC<ForecastProps> = ({ city }) => {
  const [forecastData, setForecastData] = useState<ForecastResponse | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForecastWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ForecastResponse>(
          "/api/weather/forecast",
          {
            params: { city },
          }
        );
        setForecastData(response.data);
        setError(null);
      } catch (error) {
        console.error(
          "Error fetching forecast data:",
          error instanceof Error ? error.message : "Unknown error"
        );
        setError("Failed to load forecast data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchForecastWeather();
  }, [city]);

  if (loading) {
    return <div className="text-center text-[#29bb49]">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!forecastData || !forecastData.forecast?.forecastday) {
    return (
      <div className="text-center text-[#29bb49]">
        No forecast data available.
      </div>
    );
  }

  // Transform forecast data for rendering
  const forecastDays: TransformedForecastDay[] =
    forecastData.forecast.forecastday.map((day: ForecastDay) => {
      const absoluteImageUrl = day.day.condition.icon.startsWith("//")
        ? `https:${day.day.condition.icon}`
        : day.day.condition.icon;

      return {
        day: new Date(day.date).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        forecastImage: absoluteImageUrl,
        forecastDescription: day.day.condition.text,
        forecastMaxNumber: `${Math.round(day.day.maxtemp_c)}°C`,
        forecastMinNumber: `${Math.round(day.day.mintemp_c)}°C`,
        forecastPercent: `${day.day.daily_chance_of_rain}%`,
      };
    });

  return (
    <div className="bg-[#29bb49]  bg-opacity-10 p-2 rounded-lg mt-4">
      <div className="bg-white dark:bg-[#282828] dark:text-white w-full shadow p-4 rounded-lg">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Forecast</p>
          <div className="flex items-center gap-4">
            <IoCalendarClearOutline className="text-[#29bb49] text-xl" />
            <div className="flex items-center gap-2 text-[#29bb49] border border-[#29bb49] px-2 py-1 rounded-lg">
              <BiDownArrow />
              <p>7-days</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto scroll-smooth p-2 scrollbar-hide">
          {forecastDays.map((item, index) => (
            <DayForcast
              key={index}
              day={item.day}
              forcastImage={item.forecastImage}
              forcastDescription={item.forecastDescription}
              forcastMaxNumber={item.forecastMaxNumber}
              forcastMinNumber={item.forecastMinNumber}
              forcastPercent={item.forecastPercent}
            />
          ))}
        </div>
        <WeatherStatus forecastDays={forecastDays} />
      </div>
    </div>
  );
};

export default Forecast;
