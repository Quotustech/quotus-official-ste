import { motion } from "framer-motion";
import { useState } from "react";


const FeatureSection = ({ productData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {productData.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {productData.description}
          </motion.p>
        </motion.div>

        {/* Enhanced Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
                whileHover: { duration: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="relative h-full p-2 bg-white transition-all duration-300 flex gap-5 items-center" >
                {/* Animated Borders */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-[1px] bg-transparent"
                  animate={{
                    backgroundColor: hoveredIndex === index ? "#1f0079" : "transparent",
                    height: hoveredIndex === index ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                <motion.div
                  className="absolute right-0 top-0 h-full w-[1px] bg-transparent"
                  animate={{
                    backgroundColor: hoveredIndex === index ? "#1f0079" : "transparent",
                    height: hoveredIndex === index ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                />

                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent"
                  animate={{
                    backgroundColor: hoveredIndex === index ? "#1f0079" : "transparent",
                    width: hoveredIndex === index ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                />

                {/* Icon with subtle animation */}
                <motion.div
                  className="w-50  h-12 rounded-xl flex items-center justify-center "
                  style={{
                    // backgroundColor: `rgba(${parseInt(feature.color.slice(1, 3), 16)}, ${parseInt(feature.color.slice(3, 5), 16)}, ${parseInt(feature.color.slice(5, 7), 16)}, 0.05)`,
                    color: "#1f0079"
                  }}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={feature.icon} />
                </motion.div>

                {/* Content */}
                <div className="flex flex-col h-fit ">
                  <motion.h3
                    className="text-xl font-bold text-[#1f0079] mb-1"
                    whileHover={{ color: feature.color }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <p className="text-gray-600 mb-1 flex-1">
                    {feature.description}
                  </p>


                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center relative"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#1f0079]/10 rounded-full blur-3xl -z-10"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by innovative teams at{" "}
            <span className="font-medium text-[#1f0079]">Google</span>,{" "}
            <span className="font-medium text-[#513897]">Microsoft</span>, and{" "}
            <span className="font-medium text-[#3a1c6e]">20,000+</span> businesses worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;