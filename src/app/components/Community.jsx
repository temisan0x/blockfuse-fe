"use client";

import React from "react";
import Link from "next/link";

export default function Community() {
  const images = [

    {
      id: 1,
      src: "https://www.blockfuselabs.com/assets/Ellipse%2012-1-DkzUjALA.png",
    },
    {
      id: 2,
      src: "https://www.blockfuselabs.com/assets/img20-min-DNVXt-aG.jpeg",
    },
    {
      id: 3,
      src: "https://www.blockfuselabs.com/assets/image11-min-CuQOXHXU.jpeg",
    },
    {
      id: 4,
      src: "https://www.blockfuselabs.com/assets/Ellipse%209-DG-LHMxj.png",
    },
    {
      id: 5,
      src: "https://www.blockfuselabs.com/assets/Ellipse%2012-5-CZ1m4uKZ.png",
    },
    {
      id: 6,
      src: "https://www.blockfuselabs.com/assets/img22-min-CpYbt_vG.jpeg",
    },
    {
      id: 7,
      src: "https://www.blockfuselabs.com/assets/img21-min-BTxgZECi.jpeg",
    },
    {
      id: 8,
      src: "https://www.blockfuselabs.com/assets/Ellipse%2012-6-DUZ2anQt.png",
    },
    {
      id: 9,
      src: "https://www.blockfuselabs.com/assets/ima13-min--KNtijDo.jpeg",
    },
  ];

  return (
    <section className="py-16 sm:py-14 md:py-14  text-white max-w-7xl mx-auto">
      <div className="mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 mt-40 text-center text-white">
          Join our Community
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed text-center">
          Become part of a thriving network of blockchain enthusiasts and professionals.
        </p>

        <div className="w-20 h-20 rounded-full bg-purple-600/10 border border-purple-500 mx-auto mb-8 flex items-center justify-center">

          <div className="w-8 h-8 flex items-center justify-center">
            <img src="https://www.blockfuselabs.com/assets/blockfuse-logo-BgIWHfHT.png" alt="blockfuse labs" />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 relative">
          {images.map((image, index) => (
            <img
              key={image.id}
              className={`w-[90px] h-[90px] border-2 border-purple-600 rounded-full relative -ml-4`}
              src={image.src}
              alt={`Community member ${image.id}`}
            />
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center">
          <p>Connect with us on Telegram</p>
          <Link className="ml-5 bg-purple-500 text-white px-4 py-2 rounded hover:bg-[#7E22CE] transition-colors"
            href="https://t.me/BlockfuseLabs">
            Join Our Community  <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}