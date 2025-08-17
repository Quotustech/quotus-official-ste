import React, { useEffect } from "react";
import { motion } from "framer-motion";
import RippleButton from "../overlays/RippleButton";
import { useNavigate, useLocation } from "react-router-dom";
import ProductFeatures from "../ui/AdditionalServices";

const CommonSection = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  //scroll to what we serve section
  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  if (!data || !data.section1 || !data.section2 || !data.section3) {
    return <div className="text-center text-red-500">Data not available</div>;
  }

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  //section 4
  const steps = [
    {
      title: "Understand Objective",
      icon: "/service/edit.gif",
    },
    {
      title: "Choose Right Technology",
      icon: "/service/choices.gif",
    },
    {
      title: "Development",
      icon: "/service/creative-thinking.gif",
    },
    {
      title: "Careful Testing",
      icon: "/service/optometrist.gif",
    },
    {
      title: "Support",
      icon: "/service/helpdesk.gif",
    },
  ];

  // Enhanced gradient text animation
  const gradientTextVariants = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="min-h-screen mt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-screen">
      {/* Section 1: Image with Title and Description */}
      <section className="py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 items-center"
        >
          <motion.div 
            variants={imageVariants}
            className="lg:w-1/2"
          >
            <img
              src={data.section1.image}
              alt={data.section1.title}
              className="rounded-lg shadow-xl w-full h-[40vh] sm:h-[80vh] object-cover"
            />
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1f0079] mb-3 md:mb-4"
              variants={headingVariants}
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0079] to-[#513897]"
                variants={gradientTextVariants}
              >
                {data.section1.title}
              </motion.span>
            </motion.h2>

            <motion.p 
              className="text-lg text-gray-700 mb-6"
              variants={contentVariants}
            >
              {data.section1.description}
            </motion.p>
            {data.section1.cta && (
              <motion.div
                className="w-full lg:w-[20vw]"
                onClick={() => navigate("/product/naturopura")}
                variants={contentVariants}
              >
                <RippleButton>{data.section1.cta}</RippleButton>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: What We Serve - Text Oriented */}
      <section className="py-16 bg-white" id="subHeadings">
        <div className="">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1f0079] mb-3 md:mb-4 text-center"
              variants={headingVariants}
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0079] to-[#513897]"
                variants={gradientTextVariants}
              >
                {data.section2.title}
              </motion.span>
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {data.section2.services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#513897]">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Tech We Use */}
      <section className="py-16 px-4 text-[#1f0079] bg-white">
        <div className="">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1f0079] mb-3 md:mb-4 text-center"
              variants={headingVariants}
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0079] to-[#513897]"
                variants={gradientTextVariants}
              >
                {data.section3.title}
              </motion.span>
            </motion.h2>

            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              variants={containerVariants}
            >
              {data.section3.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm w-32"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 object-contain mb-2"
                  />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: how we do it*/}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Subheading */}
            <motion.div 
              className="text-center mb-16"
              variants={headingVariants}
            >
              <motion.h3 
                className="text-sm font-semibold text-[#513897] uppercase tracking-wider mb-2"
                variants={contentVariants}
              >
                Our Process
              </motion.h3>
              <motion.h2
                className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1f0079] mb-3 md:mb-4"
              >
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0079] to-[#513897]"
                  variants={gradientTextVariants}
                >
                  How We
                </motion.span>{" "}
                <motion.span variants={contentVariants}>Do It</motion.span>
              </motion.h2>
            </motion.div>

            {/* Steps Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
              variants={containerVariants}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div 
                    className="w-20 h-30 overflow-hidden rounded-lg bg-white flex items-center justify-center"
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: { 
                        scale: 1, 
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: index * 0.1
                        }
                      }
                    }}
                  >
                    <img src={step.icon} alt={step.title} className="" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-[#1f0079] mb-6"
                    variants={{
                      hidden: { y: 10, opacity: 0 },
                      visible: { 
                        y: 0, 
                        opacity: 1,
                        transition: {
                          delay: index * 0.1 + 0.2
                        }
                      }
                    }}
                  >
                    {step.title}
                  </motion.h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ProductFeatures otherServices={data.section4.otherServices} />
    </div>
  );
};

export default CommonSection;