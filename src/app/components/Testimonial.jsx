"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Testimonials() {
    const testimonials = [
        {
            id: "21/12/2024",
            name: "Valentine Kefas Kasuwa",
            feedback:
                "My experience at Blockfuse Labs, for the past months I learned a lot, because for someone like me who never coded before, it’s really a privilege to be at Blockfuse Labs to learn and interact with great minds. And we have great tutors who want to see us progressing.",
            imageUrl: "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732201896/testimony/y8e3ygxaccdbenvxzg4w.jpg",
        },
        {
            id: "22/12/2024",
            name: "Jane Doe",
            feedback:
                "Blockfuse Labs provided me with the skills and confidence to transition into a web development career. The hands-on projects and supportive community were invaluable.",
            imageUrl: "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732201896/testimony/y8e3ygxaccdbenvxzg4w.jpg",
        },
        {
            id: "23/12/2024",
            name: "John Smith",
            feedback:
                "The collaborative environment at Blockfuse Labs helped me grow both technically and professionally. I highly recommend it to anyone looking to upskill.",
            imageUrl: "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732201896/testimony/y8e3ygxaccdbenvxzg4w.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null); // Ref for the carousel container

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };


    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-16 px-6 text-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                    Testimonials
                </h2>

                {/* Testimonial Carousel */}
                <div className="relative">
                    <img style={{ left: '-20px' }}
                        className="absolute top-[-30px] w-1/6 h-64 object-cover  z-0 "
                        src="data:image/svg+xml,%3csvg%20width='438'%20height='578'%20viewBox='0%200%20438%20578'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20opacity='0.7'%20x='50'%20width='388'%20height='486'%20fill='%235532A1'/%3e%3crect%20opacity='0.7'%20y='92'%20width='342'%20height='486'%20fill='%232C1E6F'/%3e%3c/svg%3e"
                        alt="Decorative gradient rectangles for Blockfuse Labs"
                    />
                    <div
                        ref={carouselRef}
                        className="border border-purple-500 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-900 overflow-hidden z-10 relative"
                    >
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 flex flex-col md:flex-row items-start gap-6"
                                >
                                    {/* Image */}
                                    <img
                                        src={testimonial.imageUrl}
                                        alt={`${testimonial.name}'s profile`}
                                        className="w-52 h-auto object-cover l flex-shrink-0"
                                    />

                                    {/* Content */}
                                    <div className="flex-1 p-6">
                                        <p className="text-sm text-purple-500 mb-2">{testimonial.id}</p>
                                        <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                                        <p className="text-base text-gray-300 leading-relaxed">
                                            {testimonial.feedback}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-10">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${index === currentIndex ? "bg-purple-500" : "bg-gray-500"
                                    }`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>

                    <button
                        className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors duration-300 z-20"
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
                        className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
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