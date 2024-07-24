import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <ProcessSection />
      <TeamSection />
    </>
  );
}
