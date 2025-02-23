import AboutSection from "../components/About";
import Community from "../components/Community";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="mx-auto  w-full px-4 py-10 flex flex-col items-center">
      <AboutSection />
      <Features />
      <Community />
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
