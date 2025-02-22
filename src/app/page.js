import Bootcamps from "./components/Bootcamps";
import Features from "./components/Features";
import Hero from "./components/Hero";
import MoreThanBasics from "./components/MoreThanBasic";
import OurJourney from "./components/OurJourney";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <div className=" max-w-7xl">
        <Hero />
        <Features />
        <Bootcamps />
        <MoreThanBasics />
      </div>
      <div className="w-full bg-[#201F24]">
        <OurJourney />
      </div>
      <div className="w-full bg-[#131215]">
        <Testimonials />
        <Partners />
      </div>
    </>
  );
}
