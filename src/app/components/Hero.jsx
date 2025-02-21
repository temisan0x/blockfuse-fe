import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="h-screen bg-cover bg-center flex items-center px-10 sm:px-20 bg-[url('/img/profileImg.jpg')]">
     <main className="w-full  mt-96 mx-auto flex flex-col sm:flex-row sm:items-end justify-between">
        <div className="flex flex-col">
          <div className="flex items-end font-helper">
            <h1 className="hero-title sm:text-[280px] font-black text-white leading-none">
              Fund
            </h1>
            <div className="flex flex-col ml-3 mb-3 sm:ml-5">
              <h2 className="text-white text-[50px]  font-bold">
                Help
              </h2>
              <h2 className="text-white text-[50px] font-bold">
                Others
              </h2>
            </div>
          </div>
        </div>

        <Link href="/fund">
          <button className="bg-[#CCED85] hover:bg-[#cced85c7] text-slate-950 font-bold py-5 px-8 rounded-3xl text-lg sm:text-xl">
            Start Fundraising
          </button>
        </Link>
      </main>
    </div>
  );
}