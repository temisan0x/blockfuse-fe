'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white w-full">
      <div className=" mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 bg-[#2F2E34]">

        <div className="text-xl font-bold">
          <a href="/" className="">
            <Image
              src="/img/blockfuse-logo.png"
              alt="blockfuse-logo"
              width={40}
              height={40}
            />
          </a>
        </div>

        {/* Hamburger Menu Button - Visible on Mobile */}
        <button
          className="lg:hidden text-[#d1d5db] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul
          className={`lg:flex lg:space-x-6 text-sm text-[#d1d5db] lg:static absolute top-16 left-0 w-full bg-[#2F2E34] lg:w-auto lg:bg-transparent lg:flex-row lg:items-center transition-all duration-300 ease-in-out ${
            isOpen ? "flex flex-col items-center py-4" : "hidden"
          }`}
        >
          <li><a href="/" className="hover:text-blue-400 py-2 lg:py-0">Home</a></li>
          <li><a href="/about" className="hover:text-blue-400 py-2 lg:py-0">About us</a></li>
          <li><a href="/team" className="hover:text-blue-400 py-2 lg:py-0">Team</a></li>
          <li><a href="/bootcamp" className="hover:text-blue-400 py-2 lg:py-0">Boot Camp</a></li>
          <li><a href="/events" className="hover:text-blue-400 py-2 lg:py-0">Events</a></li>
          <li><a href="/alumni" className="hover:text-blue-400 py-2 lg:py-0">Alumni</a></li>
          <li><a href="/blog" className="hover:text-blue-400 py-2 lg:py-0">Blog</a></li>
          <li><a href="/opensource" className="hover:text-blue-400 py-2 lg:py-0">Open source</a></li>
          <li><a href="/contact" className="hover:text-blue-400 py-2 lg:py-0">Contact us</a></li>
          <li><a href="/faucet" className="hover:text-blue-400 py-2 lg:py-0">Faucet</a></li>
        </ul>

        <div className="hidden lg:flex space-x-4">
          <a
            href="/donate"
            className="bg-[#000000] border border-[#A855F7] text-white px-4 py-2 rounded hover:bg-[#A855F7] hover:text-white transition-colors"
          >
            Donate
          </a>
          <a
            href="/apply"
            className="bg-[#A855F7] text-white px-4 py-2 rounded hover:bg-[#7E22CE] transition-colors"
          >
            Apply now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
