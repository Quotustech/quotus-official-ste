import { motion } from "framer-motion";
import { useState } from "react";
import { industryGroups } from "../../data/domainExpertiseData";

const IndustryShowcase = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(31, 0, 121, 0.2)",
      borderColor: "#1f0079",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const addDefaultSrc = (e) => {
    e.target.src = `data:image/svg+xml;charset=UTF-8,<svg xmlns="" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f3f4f6"/><text x="50" y="50" font-family="Arial" font-size="10" text-anchor="middle" dominant-baseline="middle" fill="%23513897">${e.target.alt}</text></svg>`;
  };

  const renderIndustryGroup = (group, index) => {
    switch (group.layout) {
      case "left":
        return (
          <div key={index} className=" mt-25 mb-15 ">
            <div className="">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  variants={containerVariants}
                  viewport={{ once: true, }}
                  className="lg:w-1/2"
                >
                  <motion.h3 
                    variants={itemVariants}
                    className="text-3xl font-bold text-gray-900 mb-4" 
                    style={{ color: group.accentColor }}
                  >
                    {group.title}
                  </motion.h3>
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8"
                  >
                    {group.description}
                  </motion.p>
                  <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                  >
                    {group.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover="hover"
                        variants={cardHoverVariants}
                        onHoverStart={() => setHoveredTech(tech.name)}
                        onHoverEnd={() => setHoveredTech(null)}
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center transition-all duration-300"
                        style={{ borderWidth: "1.5px" }}
                      >
                        <div className="w-12 h-12 mb-2 flex items-center justify-center">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                            onError={addDefaultSrc}
                          />
                        </div>
                        <span className="font-medium text-gray-800 text-center">{tech.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 relative"
                >
                  <motion.div
                    whileHover="hover"
                    variants={imageHoverVariants}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                    style={{ boxShadow: "0 20px 25px -5px rgba(81, 56, 151, 0.1)" }}
                  >
                    <img 
                      src={group.image}
                      alt={group.title}
                      className="w-full h-auto"
                    />
                   
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      
      case "right":
        return (
          <div key={index} className="bg-white  mb-15 mt-30">
            <div className="">
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  variants={containerVariants}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
                >
                  <motion.h3 
                    variants={itemVariants}
                    className="text-3xl font-bold mb-4" 
                    style={{ color: group.accentColor }}
                  >
                    {group.title}
                  </motion.h3>
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8"
                  >
                    {group.description}
                  </motion.p>
                  <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-2 gap-4"
                  >
                    {group.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        
                        whileHover="hover"
                        variants={cardHoverVariants}
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center transition-all duration-300"
                        style={{ borderWidth: "1.5px", borderColor: hoveredTech === tech.name ? group.accentColor : '#e5e7eb' }}
                      >
                        <div className="w-12 h-12 mb-2 flex items-center justify-center">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                            onError={addDefaultSrc}
                          />
                        </div>
                        <span className="font-medium text-gray-800 text-center">{tech.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
                >
                  <motion.div
                    whileHover="hover"
                    variants={imageHoverVariants}
                    className="relative overflow-hidden rounded-xl shadow-lg group"
                    style={{ boxShadow: "0 20px 25px -5px rgba(81, 56, 151, 0.1)" }}
                  >
                    <img 
                      src={group.image} 
                      alt={group.title}
                      className="w-full h-auto"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(to top, ${group.accentColor}20, transparent)` }}
                    ></div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ">
      <div className=" ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20  "
        >

           <motion.h2
          className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1f0079] mb-3 md:mb-4"
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
            Empowering
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Industries with Innovation
          </motion.span>
        </motion.h2>
          <motion.p 
            className="text-lg md:text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
             From blockchain to traveltech, we build transformative digital solutions and integrations that drive growth, efficiency, and future-readiness across diverse industry verticals.
          </motion.p>
        </motion.div>

        {industryGroups.map((group, index) => renderIndustryGroup(group, index))}
      </div>
    </section>
  );
};

export default IndustryShowcase;