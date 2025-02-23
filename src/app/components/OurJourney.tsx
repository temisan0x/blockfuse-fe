import React from "react";
import Link from "next/link";
import HelperGrid from "./HelperGrid"

export default function OurJourney() {
  const journeyItems = [
    {
      title: "The Leap",
      description:
        "Blockfuse Labs was established with a mission to empower developers through both remote and onsite training. Our primary agenda is to build a sustainable blockchain economy by fostering innovation, technical expertise, and community development across Africa and beyond.",
    },
    {
      title: "Our Today",
      description:
        "Today, Blockfuse Labs stands as a beacon of blockchain education, offering cutting-edge courses that cover everything from basic blockchain principles to advanced development, helping learners master the future of technology.",
    },
    {
      title: "Our Tomorrow",
      description:
        "As we look to the future, we aim to expand our reach and impact, continually adapting to the evolving needs of the blockchain ecosystem. Our commitment is to provide unmatched training and comprehensive support across to blockchain enthusiasts across Africa and beyond.",
    },
  ];

  return (
    <section className="py-16 sm:py-14 md:py-14 text-white max-w-7xl mx-auto">
      <div className="mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold my-14 sm:my-10 md:my-14 text-center text-white">
          Our Journey
        </h2>

        <HelperGrid
          items={journeyItems}
          columns="md: grid-cols-3"
        />

        <div className="text-center">
          <p className="py-4">Start Your Journey Today</p>
          <Link
            href="/join"
            className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            Join our Community <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
