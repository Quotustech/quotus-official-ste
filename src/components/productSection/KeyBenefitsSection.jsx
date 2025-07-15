import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import CardSwap, { Card } from '../layout/CardSwap';


export const KeyBenefitsSection = ({ productData }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Animation variants for the section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for individual benefit items
  const benefitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Animation variants for the image container
  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Animation variants for the background
  const bgVariants = {
    hidden: { opacity: 0, scale: 1.05, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -3,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 80,
      },
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 120,
      },
    },
  };

  // Placeholder animation for loading state
  const placeholderVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.4,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  // Handle image load
  useEffect(() => {
    const img = new Image();
    img.src = productData.image;
    img.onload = () => setIsImageLoaded(true);
  }, [productData.image]);

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8f7fc] to-white">
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-xl md:text-5xl font-bold text-[#1f0079] ">
          User <span className="text-[#513897]">Benefits</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between h-fit bg-[#f8f7fc]">
        {/* Left Column */}
        <div className="flex-1 p-8 md:p-1 flex flex-col justify-center relative overflow-hidden bg-[#f8f7fc]">
          <div className="max-w-lg mx-auto w-full">

            <p className="text-lg text-gray-700 mb-8 leading-relaxed mt-5">
              Discover how our product can transform your daily routine with these powerful benefits.
              Each feature is carefully designed to enhance your experience.
            </p>

            <div className="mt-8 mb-12 rounded-xl overflow-hidden ">
              <img
                src="/product/system.gif"
                alt="Product benefits"
                className="w-full h-72 object-cover"
              />
            </div>


          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#1f0079]/10"></div>

        </div>

        {/* Right Column with CardSwap */}
        <div className="flex-1 flex items-center justify-start relative bg-[#f8f7fc]">

          <div className="relative z-10 w-full h-full flex items-center justify-center md:justify-start">
            <CardSwap
              cardDistance={40}
              verticalDistance={50}
              delay={5000}
              pauseOnHover={true}
            >
              {productData.keyBenefits.map((benefit) => (
                <Card
                  key={benefit.id}

                  customClass="backdrop-blur-sm bg-white/80"
                >
                  <h3 className="text-lg font-semibold text-[#1f0079] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="flex items-center mt-3">
                    <TiTick className="text-[#1f0079] mr-2" />
                    <span className="text-xs text-[#513897]">Verified Benefit</span>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};



