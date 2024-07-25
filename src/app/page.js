import AboutUs from "@/components/AboutUs";
import BlogSection from "@/components/BlogSection";
import { CommunitySection } from "@/components/CommunitySection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
      <div id="About-us">
        <AboutUs />
      </div>
      <div id="Services">
        <Services />
      </div>
      <ProcessSection />
      <TeamSection />
      <div id="Contact-us">
        <Contact />
      </div>
      <div id="Blog">
        <BlogSection />
      </div>
      <div id="Join-our-team">
        <CommunitySection />
      </div>
      <Footer />
    </>
  );
}
