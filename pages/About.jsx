import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import IntroImage from "../src/components/common/IntroImage";
import Workflow from "../src/components/aboutSection/Workflow";
import WhyChooseUs from "../src/components/aboutSection/WhyUs";
import DomainExpertise from "../src/components/aboutSection/DomainExpertise";


const AboutUs3D = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <div
      ref={containerRef}
      className="relative "
    >
       {/* intro image*/}
      <IntroImage
        title="About Us"
        imageUrl="/commonEntroImage.jpg"
      />
 
      <div className="relative ">
        <DomainExpertise />
        <WhyChooseUs />
        <Workflow />   
      </div>
    </div>
  );
};

export default AboutUs3D;