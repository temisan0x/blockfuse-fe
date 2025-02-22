"use client";

import React, { useState, useEffect } from "react";

export default function Partners() {
  const partners = [
    {
      name: "HackMD",
      imageUrl: "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='HackMD_Logo'%20data-name='HackMD%20Logo'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20113.39%20113.39'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20url(%23HackMD-Screen_Primary_Gradient);%20fill-rule:%20evenodd;%20stroke-width:%200px;%20}%20%3c/style%3e%3clinearGradient%20id='HackMD-Screen_Primary_Gradient'%20x1='35.93'%20y1='665.36'%20x2='78'%20y2='597.33'%20gradientTransform='translate(0%20687.87)%20scale(1%20-1)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%239894f9'/%3e%3cstop%20offset='1'%20stop-color='%23453aff'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M98.97,60.13c.02-3.32-1.03-5.19-3.67-6.49l-16.16-7.93c-.64-.31-1.29-.59-1.95-.83l-.1-10.76c-.07-3.16-1.04-5.18-3.68-6.47l-16.16-7.93c-5.63-2.77-12.24-2.69-17.81.21l-20.76,10.81c-2.3,1.2-3.49,3.42-3.54,5.67l-.97,16.28c-.04,1.54.56,3.18,2.04,4.06l17.29,10.19c1.03.61,2.09,1.11,3.19,1.51l-.53,10.28c-.06,1.63.46,3.12,1.95,4l17.29,10.19c6.09,3.59,13.64,3.65,19.78.15l22.01-12.53c1.52-.86,2.02-2.37,2.02-4.02l-.25-16.42h0ZM36.18,46.48c-3.67-1.67-13.66-6.89-14.42-7.31-1.72-.95-1.8-1.96-1.71-3.17.04-.56.22-1.1.53-1.58.31-.48.76-.89,1.35-1.18.83-.41,19.77-9.89,19.77-9.89,3.72-1.85,8.03-2.09,11.9-.72.55.19,1.1.42,1.63.69,3.52,1.73,10.58,5.19,14.1,6.92,0,0,.02.01.03.02,1.46.73,2.07,2.24,1.82,3.61-.17.95-.67,1.78-1.75,2.36-.27.15-15.42,8.18-18.43,9.78-4.6,2.43-10.06,2.64-14.81.49h0ZM93,60.3c-.15,1.01-.72,1.98-1.74,2.57l-18.82,11.01c-4.7,2.75-10.48,2.85-15.27.26l-13.81-7.45c-2.51-1.35-2.52-4.94-.02-6.32l18.69-10.28c4.34-2.39,9.56-2.57,14.06-.49l14.88,6.89c1.27.59,1.97,1.75,2.07,2.96.02.28.02.56-.03.84h0Z'/%3e%3c/svg%3e", 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000); // 3-second delay for autoplay, matching your design

    return () => clearInterval(interval); // Cleanup on unmount
  }, [partners.length]);

  // Handle navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partners.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  // Handle pagination click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Our Partners
        </h2>

        {/* Partner Carousel */}
        <div className="relative">
          <div
            className="flex items-center justify-center overflow-hidden"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
              width: `${partners.length * 100}%`,
            }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center p-6"
              >
                <img
                  src={partner.imageUrl}
                  alt={`${partner.name} logo`}
                  className="w-32 h-auto object-contain" // Adjusted size to match screenshot
                />
                <p className="text-xl font-semibold text-center mt-4 text-white">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          {/* Custom Pagination Bullets (Outside the Card, Alongside Navigation) */}
          <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-10">
            {partners.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                  index === currentIndex ? "bg-purple-500" : "bg-gray-500"
                }`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>

          {/* Custom Navigation Buttons (Outside the Card) */}
          <button
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors duration-300 z-20"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left dark:text-white"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors duration-300 z-20"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right dark:text-white"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}