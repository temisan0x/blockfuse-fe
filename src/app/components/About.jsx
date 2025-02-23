"use client";

import React from "react";
import Link from "next/link";
import HelperGrid from "./HelperGrid";

export default function About() {

    const AboutItems = [
        {
            title: "Vision",
            description: "To be the leading global hub for blockchain innovation, where creativity, knowledge, and technology intersect to create solutions that change the world.",
        },
        {
            title: "Mission",
            description: " To cultivate a thriving community of skilled blockchain developers and pioneers in Nigeria, equipped to drive the future of technology in our region and beyond.           "
        }
    ]

    return (
        <section className="py-16  text-white">
            <div className="mx-auto max-w-7xl">
                <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                    About <span className="text-purple-500">Blockfuse Labs</span>
                </h1>

                {/* Main Description */}
                <p className="text-lg sm:text-xl text-gray-300 mb-12  leading-relaxed mx-auto max-w-7xl text-center">
                    At Blockfuse Labs, we provide expert training and resources to advance blockchain education. Since our founding, Blockfuse Labs has grown into a leading educational platform, trusted by developers and enthusiasts alike. Today, we're proud to be driving blockchain education and innovation across Africa, helping learners at all levels build their skills and confidence.
                </p>

                <div className="space-y-16 max-w-5xl mx-auto">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-500">
                            In the Beginning
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            Blockfuse Labs is a rapidly-growing Web3 community founded in 2024 on a selfless code of conduct: to equip developers with trendsetting Web3 knowledge that transforms them into daredevil changemakers who will drive a sustainable Web3 Economy in Africa.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-500">
                            Our Current State of Mind
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            In just 5 months, Blockfuse Labs has trained 65 students directly and indirectly through our Web3 and Web2 to Web3 Preparatory Bootcamps. At Blockfuse Labs, our mission is clear: to bridge the gap between learning and real-world application, creating a pipeline for job-ready talent. Our state-of-the-art facility, equipped with high-speed internet, provides a supportive environment for onsite learners. Every program, every resource, and every connection we build is geared towards fostering skills that translate into job opportunities and career growth in the blockchain space.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-500">
                            Where We Are Going
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            By 2028, our goal is to empower over 1000 developers annually through expanded programs and strategic partnerships. We aim to be the cornerstone of blockchain growth in Africa, turning aspiring learners into world-class innovators and fostering job creation across the continent. We won't stop until Africa becomes the pulse of the global blockchain landscape, showcasing its unparalleled talent and creativity.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-500">
                            What Makes Us Different? It's Our DNA
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            Our team is an army of cross-functional innovators. We are a blend of technical and non-technical experts who share comprehensive, challenge-tested insights that simplify blockchain's complexities, be it development, strategy, or design. We are laser-focused on equipping you with practical, real-world skills for seamless adaptation and transitioning to achieve your goals.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-500">
                            Why Join Us?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            We don't just sit through training, we dive into action. Blockfuse Labs is where hands-on learning is the livewire. We are the place where skills don't stay on paper—they are transformed into careers. Networking? We've got those too—the kind that opens doors and pushes you forward. Your success is our pleasure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-500">
                            Ready For Transformation?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            Join Blockfuse Labs to transform your skills into real-world impact. Learn, innovate, and disrupt alongside a community pushing the boundaries of tech.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl mt-32">  <HelperGrid
                    items={AboutItems}
                    columns="md: grid-cols-2"
                /></div>
            </div>
        </section>
    );
}