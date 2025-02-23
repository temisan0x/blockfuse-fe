import Bootcamps from "./components/Bootcamps";
import CallToAction from "./components/CallToAction";
import Community from "./components/Community";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MoreThanBasics from "./components/MoreThanBasic";
import Newsletter from "./components/Newsletter";
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
        <CallToAction/>
        <FAQ />
      </div>
      <div className="w-full bg-[#201F24]">
        <Newsletter/>
      </div>
      <div>
        <Community/>
      </div>
      <div className="w-full">
        <Footer/>
      </div>
    </>
  );
}
