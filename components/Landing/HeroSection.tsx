import React from "react";
import Image from "next/image";
import dashboard from "@/public/images/dashboard.png";
import leftleaf from "@/public/images/left-leaf.png";
import rightleaf from "@/public/images/right-leaf.png";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-green-100 to-white pt-32 md:pt-40 pb-16">
      {/* Decorative Leaves */}
      <Image
        src={leftleaf}
        alt="Left leaf"
        width={120}
        height={120}
        className="absolute top-10 left-2 w-20 md:w-28"
      />
      <Image
        src={rightleaf}
        alt="Right leaf"
        width={120}
        height={120}
        className="absolute bottom-1/2  right-2 w-20 md:w-28"
      />

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center gap-4 px-4 md:px-0  mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Empowering Farmers and Traders with Real-
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Time Market <span className="text-green-600">Insights</span>
        </h2>

        <p className="text-gray-500 max-w-xl text-sm sm:text-base">
          “Connecting you to the best market opportunities, weather forecasts,
          and community support.”
        </p>

        <Link
          href="/login"
          className="bg-green-500 text-white rounded-full py-2 px-6 text-sm sm:text-base hover:bg-green-600 transition"
        >
          Get Started
        </Link>

        <div className="mt-6">
          <Image
            src={"/dashboard.png"}
            alt="Dashboard Preview"
            width={800}
            height={600}
            className="w-[1000px]  h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
