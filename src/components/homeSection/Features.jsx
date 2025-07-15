import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { features } from "../../data/FetureSectionData.jsx";

const FeatureCard = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold: 0.5,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: delay * 0.15,
        type: "spring",
        damping: 12,
        stiffness: 120,
      }}
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 h-full min-h-[120px] p-4 flex flex-col"
    >
      {/* Header with icon and title */}
      <motion.div
        className="flex items-center justify-center mb-3"
        initial={{ rotate: -15, scale: 0.9 }}
        animate={inView ? { rotate: 0, scale: 1 } : {}}
        whileHover={{
          rotate: [0, -3, 3, 0],
          transition: { duration: 0.4 }
        }}
        transition={{
          delay: delay * 0.15 + 0.1,
          type: "spring",
          stiffness: 300,
        }}
      >
        <div className="w-8 h-8 flex items-center justify-center text-[#1f0079]">
          {icon}
        </div>
        <motion.h3
          className="text-lg font-bold text-[#1f0079] flex-1 text-center"
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: delay * 0.15 + 0.2 }}
        >
          {title}
        </motion.h3>
      </motion.div>

      {/* Content area with scrollable description */}
      <div className="flex-1 overflow-y-auto">
        <motion.p
          className="text-sm text-gray-600 pr-2" 
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: delay * 0.15 + 0.3 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Animated underline - positioned at bottom */}
      <motion.div
        className="h-0.5 bg-[#513897] mt-2"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const FeaturesSection = () => {


  return (
    <div className="py-20  bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#1f0079] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Quotus Differentiators
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Highly proficient, propitious and cost-effective software solutions powered by innovative minds and cutting-edge technologies.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesSection;