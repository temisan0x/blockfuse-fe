"use client";

import React from "react";
import Link from "next/link"; 

export default function CallToAction() {
    return (
        <section className="py-16 px-6 sm:px-10 lg:px-20  text-white">
            <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 mt-40 sm:mt-32 md:mt-40 text-center text-white">
                    Join the next cohort
                </h2>
                <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Step into the future of blockchain with Blockfuse Labs! Our upcoming cohort offers hands-on training, expert mentorship, and a vibrant community to help you build and thrive in Web3. Secure your spot and start your journey today!
                </p>
                <p className="text-sm sm:text-base text-gray-400 mb-6">
                    Start Your Journey Today
                </p>
                <Link
                    href="/apply"
                    className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all duration-300 ease-in-out hover:shadow-lg"
                >
                    Apply now <span className="ml-2">→</span>
                </Link>
            </div>
        </section>
    );
}