

import React, { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion, useAnimation, useInView } from "framer-motion";
import { data } from "../../../src/data/timelineData";

const Timeline = () => {

  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hidden: { opacity: 0, y: 30 }
  };

  const hoverVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };


  return (
    <div className=" py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-screen">
      {/*heading */}
      <motion.div
        className="text-center py-0 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1f0079] mb-3 md:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0079] to-[#513897]"
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{
              backgroundPosition: '100% 50%',
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }
            }}
          >
            Quotus
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Timeline
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-[#513897] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Our journey through innovation and milestones
        </motion.p>
      </motion.div>

      {/*timeline*/}


      <VerticalTimeline lineColor="#513897" >
        {data.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            icon={
              <div
                className="w-5 ml-5 h-5 object-cover rounded-full border-2 border-white shadow-md bg-[#513897]"
              />
            }
            iconStyle={{
              background: "transparent",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1f0079" }}
            contentStyle={{ padding: 0, background: "transparent", boxShadow: "none" }}
          >
            <motion.div
              ref={ref}
              animate={controls}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-2xl overflow-hidden"
                style={{
                  boxShadow: "0 8px 32px rgba(31, 0, 121, 0.25)"
                }}
              >
                {/* Glass morphism effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1f0079]/30 to-[#513897]/30 rounded-xl" /> */}

                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(122, 90, 245, 0.4), transparent)`,
                    opacity: 0
                  }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    x: [-100, 100, 100],
                    transition: {
                      duration: 2.5,
                      delay: 0.8 + index * 0.1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }
                  }}
                />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2 text-[#513897]">{event.title}</h3>
                  <p className="text-sm text-[#513897]">{event.description}</p>

                  {/* Year indicator */}
                  <motion.div
                    className="absolute -top-3 -right-3 bg-[#7a5af5] text-white text-xs font-bold px-3 py-1 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: {
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                  >
                    {event.year}
                  </motion.div>


                </div>
              </motion.div>
            </motion.div>

          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
