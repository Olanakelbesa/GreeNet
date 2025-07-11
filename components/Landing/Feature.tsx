import React from "react";
import Image from "next/image";
import market from "@/public/images/market.png";
import weather from "@/public/images/cloud-plus.png";
import map from "@/public/images/map.png";
import people from "@/public/images/people.png";
import ai from "@/public/icons/icons8-ai.svg"; // You can replace this with any AI-related icon

const features = [
  {
    icon: market,
    title: "Real-Time Market Data",
    description:
      "Stay updated with the latest market prices and trends for your crops.",
    borderColor: "border-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: weather,
    title: "Weather Forecasts",
    description:
      "Plan your activities with accurate weather predictions and alerts.",
    borderColor: "border-[#45DAE5]",
    bgColor: "bg-[#effdff]",
  },
  {
    icon: map,
    title: "Interactive Maps",
    description: "Explore markets and resources with detailed maps.",
    borderColor: "border-[#E545AA]",
    bgColor: "bg-[#fef4fa]",
  },
  {
    icon: map,
    title: "SMS based Market Data",
    description: "Receive instant SMS alerts on market prices and trends.",
    borderColor: "border-[#A545E5]",
    bgColor: "bg-[#faf3ff]",
  },
  {
    icon: people,
    title: "Community Support",
    description:
      "Join a network of users and experts for advice and collaboration.",
    borderColor: "border-[#454DE5]",
    bgColor: "bg-[#f4f4ff]",
  },
  {
    icon: ai,
    title: "AI-Powered Recommendations",
    description:
      "Get personalized suggestions based on your farming needs and market trends.",
    borderColor: "border-[#28bb49]",
    bgColor: "bg-green-100",
  },
];

function Feature() {
  return (
    <section id="feature" className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-2">Why Choose GreenNet?</h2>
      <div className="border-b-4 w-40 mx-auto rounded-full border-green-500 mb-10" />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <div
              className={`border-2 ${feature.borderColor} ${feature.bgColor} rounded-full p-4 w-16 h-16 flex items-center justify-center z-20`}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={30}
                height={30}
              />
            </div>
            <div className="border-2 border-gray-300 border-opacity-25 -mt-4 z-10 w-full rounded-lg p-4 h-36 bg-white shadow-sm">
              <p className="font-semibold mb-2">{feature.title}</p>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature;
