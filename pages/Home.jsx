
import CTA from "../src/components/homeSection/CTA" ;
import FeatureSection from "../src/components/homeSection/Features" ;
import HeroSection from "../src/components/homeSection/Hero";
import Stats from "../src/components/homeSection/Stats";
import OurClients from "../src/components/homeSection/OurClients";
import Timeline from "../src/components/homeSection/Timeline";
import CompanyVisionMission from "../src/components/homeSection/CompanyVisionMission";
import { useRef } from "react";
import { useScroll } from "framer-motion";
function Home() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeatureSection />
      <div ref={timelineRef} className="relative h-fit  ">
        <Timeline scrollYProgress={scrollYProgress} />
      </div>
      
      <CompanyVisionMission />
      <Stats />
      <OurClients />
      <CTA />
    </div>
  );
}

export default Home;