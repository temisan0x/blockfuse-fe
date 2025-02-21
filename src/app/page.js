import Bootcamps from "./components/Bootcamps";
import Features from "./components/Features";
import Hero from "./components/Hero";
import MoreThanBasics from "./components/MoreThanBasic";
import OurJourney from "./components/OurJourney";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Bootcamps/>
      <MoreThanBasics/>
      <OurJourney/>
    </>
  );
}
