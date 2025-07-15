import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiTarget, FiEye } from "react-icons/fi";
import { MdOutlineTouchApp } from "react-icons/md";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const popUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const cardHover = {
    y: -8,
    boxShadow: "0 20px 40px -10px rgba(101, 78, 255, 0.3)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <InView threshold={0.2} onChange={(inView) => inView && setIsVisible(true)}>
      {({ ref }) => (
        <section
          ref={ref}
          className="bg-white min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-screen"
        >
          <div className=" relative">
            {/* Header */}
            <motion.div
              className="text-center mb-12 lg:mb-20 relative z-10"
              variants={container}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.div
                className="inline-flex items-center justify-center mb-4"
                variants={item}
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#1f0079] mr-3"></div>
                <span className="text-xs font-medium tracking-widest text-[#1f0079]">
                  OUR CORE PRINCIPLES
                </span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#1f0079] ml-3"></div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4"
                variants={item}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f0079] to-[#513897]">
                  Mission & Vision
                </span>
              </motion.h2>

              <motion.p
                className="text-md text-[#513897] max-w-2xl mx-auto"
                variants={item}
              >
                The foundation of our company and compass for our future
              </motion.p>
            </motion.div>

           
            <div className="relative z-10">
              {/* Mission & Vision Section */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16"
                variants={container}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {/* Mission  */}
                <motion.div
                  className="lg:col-span-2 rounded-xl overflow-hidden shadow-md relative group min-h-[280px] "
                  variants={popUp}
                  whileHover={cardHover}
                >
                 
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1f0079]/90 to-[#513897]/80 z-10"></div>
                  <img
                    src="/home/mission&vision/mission.jpg"
                    alt="Mission"
                    className="w-full h-full object-cover absolute transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Text container  */}
                  <div className="relative z-20 p-5 h-full flex flex-col justify-center">
                     

                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-white mb-2 flex gap-2"
                      variants={fadeIn}
                    ><FiTarget className="text-white text-md" />
                      Our Mission
                    </motion.h3>

                    <motion.div
                      className="text-white/90 mb-4 text-sm space-y-2"
                      variants={fadeIn}
                    >
                      <p>
                        Quotus wants to provide every business a digital platform for growth
                        by using our innovation, ideas, creativity and technology.
                      </p>
                      <p>
                        We will create change for technically unprivileged businesses while
                        helping them achieve global presence.
                      </p>
                    </motion.div>

                    <motion.ul className="space-y-1" variants={container}>
                      {["Value creation", "Customer focus", "Global enablement"].map(
                        (item, i) => (
                          <motion.li
                            key={i}
                            className="text-white flex items-center text-xs md:text-sm"
                            whileHover={{ x: 5 }}
                            variants={item}
                          >
                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                            {item}
                          </motion.li>
                        )
                      )}
                    </motion.ul>
                  </div>
                </motion.div>


                {/* Vision */}
                <motion.div
                  className="flex flex-col gap-4"
                  variants={container}
                >
                  {/* Top Right Panel */}
                  <motion.div
                    className="rounded-xl bg-white p-5 shadow-md relative overflow-hidden min-h-[140px]"
                    variants={popUp}
                    whileHover={cardHover}
                  >
                    
                    <motion.h3
                      className="text-lg md:text-xl font-bold text-[#1f0079] mb-2 flex gap-2 items-center "
                      variants={fadeIn}
                    ><FiEye className="text-[#1f0079] text-lg mr-1" />
                      Our Vision
                    </motion.h3>
                    <motion.div
                      className="text-gray-700 text-xs md:text-sm space-y-2"
                      variants={fadeIn}
                    >
                      <p>
                        To add value to enterprises by providing innovative
                        software products that transform businesses.
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Bottom Right Panel */}
                  <motion.div
                    className="rounded-xl overflow-hidden shadow-md relative min-h-[140px]"
                    variants={popUp}
                    whileHover={cardHover}
                  >
                    <img
                      src="/home/mission&vision/vision.jpg"
                      alt="Vision"
                      className="w-full h-full object-cover absolute transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#1f0079]/70 z-10"></div>
                    <motion.div
                      className="relative z-20 p-4 flex flex-col justify-center h-full"
                      variants={fadeIn}
                    >
                      <div className="flex items-center mb-1">
                        
                        <MdOutlineTouchApp className="text-white text-lg mr-1"/>
                        <span className="text-white font-medium text-xs md:text-sm flex items-center">
                          Our Approach
                        </span>
                      </div>
                      <p className="text-white/90 text-xs">
                        Customer-centric solutions for global business
                        enablement
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Core Values Section */}
              <motion.div
                className="text-center mb-8"
                variants={fadeIn}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                <motion.h4
                  className="text-xl md:text-2xl font-bold mb-3 text-[#1f0079]"
                  variants={item}
                >
                  Core Values
                </motion.h4>
                <motion.p
                  className="text-[#513897] text-xs md:text-sm max-w-2xl mx-auto"
                  variants={item}
                >
                  The foundation of everything we do
                </motion.p>
              </motion.div>

              {/* Core Values Grid */}
              <motion.div
                className="grid md:grid-cols-3 gap-4"
                variants={container}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {[
                  {
                    title: "Integrity",
                    description:
                      "We uphold transparency, honesty, and accountability in all our interactions. Every relationship is built on trust, and every decision is guided by strong ethical principles that form the foundation of our work culture.",
                  },
                  {
                    title: "Innovation",
                    description:
                      "We embrace curiosity and forward-thinking to develop groundbreaking solutions. By staying ahead of technological trends and encouraging creative exploration, we transform challenges into opportunities for growth and advancement.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "We are committed to exceeding expectations through superior craftsmanship and relentless attention to detail. Our pursuit of excellence drives us to deliver impactful results that consistently raise the bar across every project.",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-5 rounded-lg border border-[#f0f0f0] shadow-sm"
                    variants={popUp}
                    whileHover={cardHover}
                    custom={index}
                  >
                    <motion.h5
                      className="text-lg font-bold mb-2 text-[#1f0079]"
                      variants={fadeIn}
                    >
                      {value.title}
                    </motion.h5>
                    <motion.p
                      className="text-gray-700 text-xs md:text-sm"
                      variants={fadeIn}
                    >
                      {value.description}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <AnimatePresence>
              {isVisible && (
                <>
                  <motion.div
                    className="absolute -left-20 top-1/4 w-40 h-40 bg-[#513897]/10 rounded-full blur-3xl"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                  <motion.div
                    className="absolute -right-20 bottom-1/4 w-60 h-60 bg-[#1f0079]/10 rounded-full blur-3xl"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  />
                </>
              )}
            </AnimatePresence>
          </div>
        </section>
      )}
    </InView>
  );
};

export default MissionVision;
