import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import IntroImage from "../src/components/common/IntroImage";
import Workflow from "../src/components/aboutSection/Workflow";
import WhyChooseUs from "../src/components/aboutSection/WhyUs";
import DomainExpertise from "../src/components/aboutSection/DomainExpertise";
import SEO from "../src/SEO";


const AboutUs3D = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <div ref={containerRef} className="relative ">
      <SEO
        title="About Us | Quotus Software Solutions"
        description="Learn about Quotus – a software Solutions building innovative blockchain, AI, and SaaS products. Discover our mission, team, and journey in enterprise software development."
        keywords="Quotus, about Quotus, Quotus team, software Solutions, blockchain experts, AI software developers, enterprise IT, company mission, software consulting, technology innovation"
        image="http://quotus.io/QuotusLOGO.png"
        url="https://quotus.io/about"
      />

      {/* intro image*/}
      <IntroImage title="About Us" imageUrl="/commonEntroImage.jpg" />

      <div className="relative ">
        <DomainExpertise />
        <WhyChooseUs />
        <Workflow />
      </div>
    </div>
  );
};

export default AboutUs3D;