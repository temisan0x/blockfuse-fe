"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-white border-gray-400 border-t py-8 px-6 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/">
                            <div className="w-12 h-12 rounded flex items-center justify-center">
                                <img
                                    src="https://www.blockfuselabs.com/assets/blockfuse-logo-BgIWHfHT.png"
                                    alt="Blockfuse Logo"
                                    className="w-10 object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-sm sm:text-base text-gray-300">
                            support@blockfuselabs.com
                        </p>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <nav className="flex flex-col md:flex-row items-center gap-6 text-sm sm:text-base mt-4">
                            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                                Home
                            </Link>
                            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                                About us
                            </Link>
                            <Link href="/team" className="text-gray-300 hover:text-white transition-colors duration-300">
                                Team
                            </Link>
                            <Link href="/bootcamps" className="text-gray-300 hover:text-white transition-colors duration-300">
                                Bootcamps
                            </Link>
                            <Link href="/events" className="text-gray-300 hover:text-white transition-colors duration-300">
                                Events
                            </Link>
                            <Link href="/alumni" className="text-gray-300 hover:text-white transition-colors duration-300">
                                Alumni
                            </Link>
                            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">
                                Blog
                            </Link>
                            <Link href="/open-source" className="text-gray-300 hover:text-white transition-colors duration-300">
                                Open source
                            </Link>
                            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                                Contact us
                            </Link>
                        </nav>
                        <Link
                            href="/donate"
                            className="bg-[#000000] border border-[#A855F7] text-white px-4 py-2 rounded hover:bg-[#A855F7] hover:text-white transition-colors"
                        >
                            Donate
                        </Link>
                    </div>
                </div>

            </div>

            <div className="mt-8 bg-[#2F2E34] p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
                {/* Social Media Icons */}
                <div className="flex items-center gap-4">
                    <Link href="https://facebook.com/blockfuselabs" className="hover:text-white transition-colors duration-300">
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
                            className="lucide lucide-facebook"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </Link>
                    <Link href="https://x.com/blockfuselabs" className="hover:text-white transition-colors duration-300">
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
                            className="lucide lucide-twitter-x"
                        >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </Link>
                    <Link href="https://instagram.com/blockfuselabs" className="hover:text-white transition-colors duration-300">
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
                            className="lucide lucide-instagram"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                    </Link>
                    <Link href="https://youtube.com/blockfuselabs" className="hover:text-white transition-colors duration-300">
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
                            className="lucide lucide-youtube"
                        >
                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                            <path d="m10 15 5-3-5-3z"></path>
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                        Privacy Policy
                    </Link>
                    <span className="hidden md:inline">|</span>
                    <Link href="/terms" className="hover:text-white transition-colors duration-300">
                        Terms & Conditions
                    </Link>
                    <span className="text-gray-500">All Copyright © 2024 Reserved</span>
                </div>

            </div>
        </footer>
    );
}