import Footer from "@/components/Footer";
import Feature from "@/components/Landing/Feature";
import HeroSection from "@/components/Landing/HeroSection";
import HowItWork from "@/components/Landing/HowItWork";
import PricingPlan from "@/components/Landing/PricingPlan";
import Testimoney from "@/components/Landing/Testimoney";
import React from "react";

function page() {
  return (
    <div>
      <HeroSection />
      <Feature />
      <HowItWork />
      <Testimoney />
      <PricingPlan />
      <Footer />
    </div>
  );
}

export default page;
