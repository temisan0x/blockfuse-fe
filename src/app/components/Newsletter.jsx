"use client";

import React, { useState } from "react";
import Link from "next/link"; // Optional, for any future links

export default function Newsletter() {

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Stay ahead in the world of blockchain! Get the latest updates, insights, and exclusive resources from Blockfuse Labs delivered straight to your inbox. Don’t miss out—subscribe today!
        </p>

        <form  className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your Email here"
              className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}