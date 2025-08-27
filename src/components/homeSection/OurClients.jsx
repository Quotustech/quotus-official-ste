import React from "react";
import { motion } from "framer-motion";
import FancyTestimonialsSlider from "../ui/testimonalslider";
import { testimonials, flags, clients } from "../../data/ourClientSectionData";
function OurClients() {
  // Calculate total width needed for seamless looping
  const flagWidth = 192; // w-48 = 192px
  const gap = 24; // mx-6 = 24px
  const totalWidth = (flagWidth + gap) * flags.length;

  const gapInClients = 24; // mx-6 = 24px
  const clientWidth = 192; // w-48 = 192px
  const totalWidthOfClients = (clientWidth + gapInClients) * flags.length;

  // Ensure exactly 9 items, fill with placeholders if needed
  const paddedClients = [
    ...clients.slice(0, 9),
    ...Array(9 - Math.min(clients.length, 9)).fill({
      image: "https://via.placeholder.com/100?text=Client",
      name: "Placeholder Client",
    }),
  ].slice(0, 9);

  return (
    <section className="py-20  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Country Flags */}
      <div className="flex flex-col justify-center items-center mb-16">
        <motion.h2
          className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1f0079] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0079] to-[#513897]"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{
              backgroundPosition: "100% 50%",
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              },
            }}
          >
            Client Based
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Countries
          </motion.span>
        </motion.h2>

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
      <div className="flex flex-col justify-center items-center mb-16 ">
        <motion.h2
          className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1f0079] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0079] to-[#513897]"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{
              backgroundPosition: "100% 50%",
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              },
            }}
          >
            Our
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Clients
          </motion.span>
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 mt-5  w-full">
          {/* Left side - Text content (30% width) */}
          <div className="w-full md:w-4/10 space-y-4 ">
            <h2 className="text-xl md:text-2xl font-bold text-[#1f0079]">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-[#513897] to-[#1f0079] bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              We partner with innovative companies to deliver exceptional
              solutions.
            </p>
          </div>

          {/* Right side - Client logos (70% width) */}
          <div className="w-full md:w-6/10 group mt-10 md:mt-0">
            <div className="grid grid-cols-3 rounded-lg overflow-hidden">
              {clients.slice(0, 12).map((client, index) => {
                const isLeftCol = index % 3 === 0;
                const rowIndex = Math.floor(index / 3);
                const isMiddleRow = rowIndex === 1 || rowIndex === 2;
                const isFirstMiddleRow = rowIndex === 1;
                const isSecondMiddleRow = rowIndex === 2;

                return (
                  <div
                    key={`client-${index}`}
                    className={`
            aspect-square flex items-center justify-center bg-white w-full h-30 p-0 m-0
            relative overflow-hidden
            ${
              isLeftCol
                ? "border-l-1 border-[#1f0079]/30 group-hover:border-transparent"
                : ""
            }
            ${
              isFirstMiddleRow
                ? "border-t-1 border-b-1 border-[#1f0079]/30 group-hover:border-transparent"
                : ""
            }
            ${
              isSecondMiddleRow
                ? "border-b-1 border-[#1f0079]/30 group-hover:border-transparent"
                : ""
            }
          `}
                  >
                    {/* Animated border for left column */}
                    {isLeftCol && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#513897]/60 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out" />
                    )}
                    {/* Animated borders for first middle row */}
                    {isFirstMiddleRow && (
                      <>
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#513897]/60 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#513897]/60 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-out" />
                      </>
                    )}
                    {/* Animated border for second middle row - only bottom border */}
                    {isSecondMiddleRow && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#513897]/60 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-out" />
                    )}
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-4/5 h-4/5 object-contain"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
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
          <motion.h2
            className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1f0079] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0079] to-[#513897]"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{
                backgroundPosition: "100% 50%",
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                },
              }}
            >
              What Our Clients
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Clients Say
            </motion.span>
          </motion.h2>
        </motion.div>

        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    </section>
  );
}

export default OurClients;
