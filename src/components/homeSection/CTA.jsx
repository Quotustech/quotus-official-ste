import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import RippleButton from "../layout/RippleButton";
import { Link } from "react-router-dom";

function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold: 0.5,
    once: true,
  });

  return (
    <section className="relative py-10 bg-white px-4 sm:px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Heading  */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#1f0079]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Ready to{" "}
            <motion.span
              className="bg-gradient-to-r from-[#513897] to-[#1f0079] bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={
                inView
                  ? {
                    backgroundPosition: "100% 50%",
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear",
                    },
                  }
                  : {}
              }
            >
              Transform
            </motion.span>{" "}
            Your Business?
          </motion.h2>

          {/* sub heading */}
          <motion.p
            className="text-lg md:text-xl text-[#1f0079]/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Let's discuss how we can help achieve your digital goals.
          </motion.p>

          {/*  button */}

          <Link
            to="/contact"
            className="inline-block px-10 py-3 md:px-10 md:py-4"
          >
            <RippleButton >
              Contact Now
            </RippleButton>
          </Link>

          {/* Contact  */}
          <motion.div
            className="flex justify-center item-center space-x-8 md:space-x-12 pt-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: <FiMail size={24} />, text: "info@quotus.co.in" },
              { icon: <FiPhone size={24} />, text: "+91 9777403555" },
              { icon: <FiMessageSquare size={24} />, text: "Live Chat" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center group"

              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#1f0079]/10 rounded-full text-[#1f0079] group-hover:bg-[#513897]/20 group-hover:text-[#513897] transition-colors duration-300 mb-2">
                  {item.icon}
                </div>
                <span className="hidden text-xs md:block  md:text-base text-[#1f0079]/80 group-hover:text-[#513897] transition-colors duration-300 w-[10vw]">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#513897]/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default CTA;
