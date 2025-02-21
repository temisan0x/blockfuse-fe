import React from "react";
import Link from "next/link";

export default function BootcampCard({ title, description, imageUrl, note, href }) {
    return (
        <div className="w-full h-full border border-purple-500 rounded-lg shadow-md overflow-hidden flex flex-col">

            <div
                className="w-full h-48 bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <h3 className="text-2xl font-bold text-white text-center absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    {title}
                </h3>
            </div>
            <div className="p-6 flex-1 flex flex-col ">
                <p className="text-base text-gray-300 mb-6 leading-relaxed flex-1">
                    {description}
                </p>


                <div className="mt-auto py-6">
                    <Link
                        href={href || "#"}
                        className="block items-center bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all duration-300 ease-in-out hover:shadow-lg mx-auto w-full max-w-xs text-center"
                    >
                        Join the Waitlist <span className="ml-2">→</span>
                    </Link>

                    {/* Note */}
                    <p className="text-sm text-cyan-400 mt-3 text-center">
                        {note}
                    </p>
                </div>
            </div>
        </div>
    );
}