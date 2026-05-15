import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import NebulaDynamic from "@/components/NebulaDynamic";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      {/* Background layers */}
      <div className="grid-overlay" />
      <div className="noise-overlay" />
      <NebulaDynamic />
      <Spotlight />

      {/* UI */}
      <CustomCursor />
      <ScrollProgressBar />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Services />
        <ProjectsCarousel />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
