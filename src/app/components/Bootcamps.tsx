import React from "react";
import BootcampCard from "./BootcampCard";

export default function Bootcamps() {
  return (
    <section className="py-16 text-white">
      <div className=" mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Our Bootcamps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BootcampCard
            title="Web2 for Web3 Preparatory Bootcamp"
            description="Learn the essentials of modern web development in HTML, CSS, Tailwind CSS, JavaScript, and Node.js/React. This program guides you through creating interactive, responsive websites, providing the skills and confidence to start building real-world projects. Perfect for beginners ready to launch their web journey!"
            imageUrl="https://www.blockfuselabs.com/assets/web2-bg-DXeHHdR8.jpeg"
            note="NOTE: Registration for Cohort III will start on March 1st."
            href="/waitlist/web2"
          />

          <BootcampCard
            title="Web3 Bootcamp"
            description="Unlock the future of the internet with our Web3 Bootcamp! Learn blockchain fundamentals, smart contracts, and dApps to build decentralized applications. Ideal for beginners eager to explore Web3 technology and launch into the world of blockchain development!"
            imageUrl="https://www.blockfuselabs.com/assets/web3-bg-DsK_wXrN.jpeg"
            note="NOTE: Registration for Cohort III will start on March 1st."
            href="/waitlist/web3"
          />
        </div>
      </div>
    </section>
  );
}
