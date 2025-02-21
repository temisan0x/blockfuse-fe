import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="https://www.blockfuselabs.com/assets/zigzag-q2OLhjMn.svg"
        alt="Blockfuse Background"
        className="absolute inset-0 object-cover opacity-10 z-0 m-auto"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Unlock the Future with Blockchain
        </h1>

        {/* Subheading */}
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          Transform your skills and career with comprehensive training designed to lead the digital revolution.
        </h3>

        {/* Call-to-Action Button */}
        <Link
          href="/apply"
          className="inline-flex items-center bg-[#A855F7] text-white px-6 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-[#7E22CE] transition-all duration-300 ease-in-out hover:shadow-lg"
        >
          Explore Our Bootcamps
          <FaArrowRight className="ml-3" />
        </Link>
      </div>
    </div>
  );
}