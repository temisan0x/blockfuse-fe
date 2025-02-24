'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; 
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white w-full">
      <div className=" mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 bg-[#2F2E34]">

        <div className="text-xl font-bold">
          <Link href="/" className="">
            <Image
              src="/img/blockfuse-logo.png"
              alt="blockfuse-logo"
              width={40}
              height={40}
            />
          </Link>
        </div>

        <button
          className="lg:hidden text-[#d1d5db] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul
          className={`lg:flex lg:space-x-6 text-sm text-[#d1d5db] lg:static absolute top-16 left-0 w-full bg-[#2F2E34] lg:w-auto lg:bg-transparent lg:flex-row lg:items-center transition-all duration-300 ease-in-out ${isOpen ? "flex flex-col items-center py-4" : "hidden"
            }`}
        >
          <li><Link href="/" className="hover:text-purple-500 py-2 lg:py-0">Home</Link></li>
          <li><Link href="/about" className="hover:text-purple-500 py-2 lg:py-0">About us</Link></li>
          <li><Link href="/team" className="hover:text-purple-500 py-2 lg:py-0">Team</Link></li>
          <li><Link href="/bootcamp" className="hover:text-purple-500 py-2 lg:py-0">Boot Camp</Link></li>
          <li><Link href="/events" className="hover:text-purple-500 py-2 lg:py-0">Events</Link></li>
          <li><Link href="/alumni" className="hover:text-purple-500 py-2 lg:py-0">Alumni</Link></li>
          <li><Link href="/blog" className="hover:text-purple-500 py-2 lg:py-0">Blog</Link></li>
          <li><Link href="/opensource" className="hover:text-purple-500 py-2 lg:py-0">Open source</Link></li>
          <li><Link href="/contact" className="hover:text-purple-500 py-2 lg:py-0">Contact us</Link></li>
          <li><Link href="/faucet" className="hover:text-purple-500 py-2 lg:py-0">Faucet</Link></li>
        </ul>

        <div className="hidden lg:flex space-x-4">
          <Link
            href="/donate"
            className="bg-[#000000] border border-purple-500 text-white px-4 py-2 rounded h hover:text-slate-100 transition-colors"
          >
            Donate
          </Link>
          <Link
            href="/apply"
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-[#7E22CE] transition-colors"
          >
            Apply now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
