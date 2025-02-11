"use client"

import React, { useState } from "react";
import TestimoneyCards from "./TestimoneyCards";
import {  testimonials } from "./testimonials";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function Testimoney() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPage = Math.ceil(testimonials.length / cardsPerPage);

  const startIndex = currentPage * cardsPerPage;
  const displayTestimonials = testimonials.slice(startIndex, startIndex + cardsPerPage);

  const nextPage = () => {
    if(currentPage + 1 < totalPage){
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if(currentPage > 0){
      setCurrentPage((prev) => prev - 1);
    }
  };

	return (
		<div className=" bg-[#29BB49] bg-opacity-5">
			<div className="flex justify-center">
				<p className="font-semibold text-3xl py-4">Testimoney</p>
			</div>
			<div className="border-b-4 w-32 rounded-full border-solid border-green-400 mx-auto "></div>
			<div className="w-full py-10 px-16 flex gap-10 items-center">
				{displayTestimonials.map((testimonial, index) => (
          <TestimoneyCards key={testimonial.id} testimonial={testimonial} isMiddle={index == 1} />
        ))}
			</div>
      <div className="pb-8 flex justify-between px-32">
        <button onClick={prevPage} className="bg-[#29BB49] bg-opacity-20 w-14  py-4 rounded-md flex justify-center items-center ">
          <FaLessThan className="text-xl"/>
        </button>
        <div className="flex gap-2">
          {
            Array.from({length: totalPage}).map((_, index) => (
              <div key={index} className={`w-3 h-3 rounded-full ${
                index == currentPage? "bg-[#29bb49]" : "bg-gray-300"
              } transition-all duration-300`}></div>
            ))
          }
        </div>

        <button onClick={nextPage} className="bg-[#29BB49] bg-opacity-20 w-14 py-4 rounded-md flex justify-center items-center ">
          <FaGreaterThan className="text-xl" />
        </button>
      </div>
		</div>
	);
}

export default Testimoney;
