"use client";

import React from "react";
import Link from "next/link";

export default function Community() {


  const images = [{
    id: 1,
    src: "https://www.blockfuselabs.com/assets/blockfuse-logo-BgIWHfHT.png"
  }, {
    id: 2,
    src: "https://www.blockfuselabs.com/assets/blockfuse-logo-BgIWHfHT.png"
  }]

  return (
    <section className="py-16 sm:py-14 md:py-14text-white max-w-7xl mx-auto">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold my-16 sm:my-10 md:my-14 text-center text-white">
          Join our Community
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Become part of a thriving network of blockchain enthusiasts and professionals.
        </p>
        <Link
          href="https://t.me/BlockfuseLabs"
          className="inline-flex items-center justify-center w-20 h-20 bg-[#9233ea4b] rounded-full text-white hover:bg-purple-700 transition-colors duration-300 mx-auto border border-purple-500"
        >
          <div className="flex items-center justify-center w-full h-full">
            <img
              src="https://www.blockfuselabs.com/assets/blockfuse-logo-BgIWHfHT.png"
              alt="Blockfuse Logo"
              className="w-10 object-contain"
            />
          </div>
        </Link>
        {/* <div>
        {images.map((image)=> (
          <div key={image.id} className="flex flex-col">
            <img src={image.src} alt={image.id} className="w-28 object-cover"/>
          </div>
        ))}
      </div> */}
        <div className="flex mx-auto w-full justify-center mt-10 space-x-3 ">
          <div className="relative left-4 w-16">
            <img src="https://www.blockfuselabs.com/assets/blockfuse-logo-BgIWHfHT.png" alt="" className="w-16 object-contain" />
          </div>
          <img src="https://www.blockfuselabs.com/assets/blockfuse-logo-BgIWHfHT.png" alt="" className="w-16 object-contain" />
          <img src="https://www.blockfuselabs.com/assets/blockfuse-logo-BgIWHfHT.png" alt="" className="w-16 object-contain" />
          <img src="https://www.blockfuselabs.com/assets/blockfuse-logo-BgIWHfHT.png" alt="" className="w-16 object-contain" />
        </div>
      </div>
    </section>
  );
}