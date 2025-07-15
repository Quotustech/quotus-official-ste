import React from "react";
import { motion } from "framer-motion";
import FancyTestimonialsSlider from "../layout/testimonalslider";
import {testimonials,flags,clients} from "../../data/ourClientSectionData"
function OurClients() {
 
  // Calculate total width needed for seamless looping
  const flagWidth = 192; // w-48 = 192px
  const gap = 24; // mx-6 = 24px
  const totalWidth = (flagWidth + gap) * flags.length;

  const gapInClients = 24; // mx-6 = 24px
  const clientWidth = 192; // w-48 = 192px
  const totalWidthOfClients = (clientWidth + gapInClients) * flags.length;

  return (
    <section className="py-20  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Country Flags */}
      <div className="flex flex-col justify-center items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f0079] mb-4">
          Client Based{" "}
          <span className="bg-gradient-to-r from-[#513897] to-[#1f0079] bg-clip-text text-transparent">
            Countries
          </span>
        </h2>
        <div className="relative w-full h-48 overflow-hidden bg-white rounded-xl shadow-sm border border-[#1f0079]/10">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Seamless scrolling container */}
          <motion.div
            className="absolute flex items-center h-full"
            animate={{ x: [0, -totalWidthOfClients] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Render multiple copies to fill the viewport */}
            {[...flags, ...flags, ...flags].map((flag, index) => (
              <motion.div
                key={`flag-${index}`}
                className="flex flex-col items-center mx-6"
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="h-32 w-48 rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-white border border-[#1f0079]/10">
                  <img
                    src={flag.image}
                    alt={flag.country}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-[#1f0079]">
                  {flag.country}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Clients */}
      <div className="flex flex-col justify-center items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f0079] mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-[#513897] to-[#1f0079] bg-clip-text text-transparent">
            Clients
          </span>
        </h2>
        <div className="relative w-full h-48 overflow-hidden bg-white rounded-xl shadow-sm border border-[#1f0079]/10">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Seamless scrolling container */}
          <motion.div
            className="absolute flex items-center h-full"
            animate={{ x: [-totalWidth, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Render multiple copies to fill the viewport */}
            {[...clients, ...clients, ...clients].map((client, index) => (
              <motion.div
                key={`client-${index}`}
                className="flex flex-col items-center mx-6"
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="h-32 w-48 rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-white border border-[#1f0079]/10">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className=" ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-4xl font-bold text-[#1f0079] mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#513897] to-[#1f0079] bg-clip-text text-transparent">
              Clients
            </span>{" "}
            Say
          </h2>
        </motion.div>

       <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    </section>
  );
}

export default OurClients;
