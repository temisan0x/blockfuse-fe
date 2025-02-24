"use client";

import React, { useState } from "react";
import Link from "next/link"; // For the Telegram link

export default function FAQ() {
  const faqs = [
    {
      question: "What is Blockfuse Labs?",
      answer:
        "Blockfuse Labs is a tech hub dedicated to empowering individuals with skills in blockchain development. We offer FREE hands-on training, mentorship, and resources to help aspiring developers transition from Web2 to Web3, while also fostering innovation through product development.",
    },
    {
      question: "Who can join Blockfuse Labs Cohort?",
      answer:
        "Anyone passionate about blockchain and Web3 development can join, regardless of experience level. Our programs are designed for beginners as well as experienced developers looking to upskill in blockchain technologies.",
    },
    {
      question: "What programs does Blockfuse Labs offer?",
      answer:
        "We offer hands-on bootcamps, Web2 to Web3 preparatory courses, and advanced blockchain development programs, all focused on practical skills, expert mentorship, and real-world projects to prepare you for the blockchain industry.",
    },
    {
      question: "How do I enroll in a Blockfuse Labs cohort?",
      answer:
        "You can enroll by visiting our website, filling out the application form for the upcoming cohort, and following the instructions provided. Spots are limited, so apply early to secure your place!",
    },
    {
      question: "How can Blockfuse Labs help with my career?",
      answer:
        "Blockfuse Labs provides career support through mentorship, networking opportunities, portfolio-building projects, and job placement assistance, helping you launch or advance your career in blockchain and Web3.",
    },
    {
      question: "Is there a community I can join?",
      answer:
        "Yes! Join our vibrant community on Telegram to connect with fellow learners, mentors, and industry experts. Click the link below to join us.",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20  text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 mt-40 sm:mt-32 md:mt-40 text-center text-white">
          FAQ's
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
          Everything you need to know about Blockfuse Labs! Can't find the
          answer you're looking for? Please chat with our friendly team, or{" "}
          <Link
            href="https://t.me/BlockfuseLabs"
            className=" hover:text-purple-400 underline text-purple-500"
          >
            reach out to us on our Telegram channel here
          </Link>
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" border border-purple-500 border-r-transparent border-l-transparent border-t-transparent"
            >
              <button className="w-full py-6 text-left flex justify-between items-center  transition-colors duration-300">
                <span className="text-xl font-semibold">{faq.question}</span>
                <span className="text-purple-500">
                  {faqs[index]?.open ? "−" : "+"}
                </span>
              </button>
              {faqs[index]?.open && (
                <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
