
import CTA from "../src/components/homeSection/CTA" ;
import FeatureSection from "../src/components/homeSection/Features" ;
import HeroSection from "../src/components/homeSection/Hero";
import Stats from "../src/components/homeSection/Stats";
import OurClients from "../src/components/homeSection/OurClients";
import Timeline from "../src/components/homeSection/Timeline";
import CompanyVisionMission from "../src/components/homeSection/CompanyVisionMission";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import  SEO  from "../src/SEO";


function Home() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  return (
    <div className="overflow-x-hidden">
      <SEO
        title="Quotus Software Solutions - Innovative Product-Based Software Company "
        description="We build reliable modern technology to empower digital transformation. Our engineering-first approach ensures high performance, scalability, and long-term impact. We focus on product excellence, seamless delivery, and technical precision."
        keywords="Quotus, software company, product development, blockchain solutions, AI software, enterprise software, SaaS products, custom software development, Web3 solutions, decentralized applications, cloud software, fintech software, healthcare software, edtech solutions, enterprise IT, software consulting, mobile app development, web app development, digital transformation, machine learning solutions, AI-driven products, technology innovation, software outsourcing, software engineering, IT solutions provider, software for startups, scalable software solutions"
        image="http://localhost:5173/QuotusLOGO.png"
        url="https://quotus-official-ste.vercel.app/"
      />
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