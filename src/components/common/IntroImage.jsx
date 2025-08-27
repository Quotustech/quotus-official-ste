import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function IntroImage({  title , imageUrl ,}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
            initial={{ letterSpacing: "0.5em" }}
            animate={isInView ? { letterSpacing: "0.05em" } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {title}
          </motion.h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-24 bg-white"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </div>

      {/* Full-width Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0.7 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-screen h-[50vh]"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute inset-0 bg-[#1f0079]"
        />
      </motion.div>

    </section>
  );
}
