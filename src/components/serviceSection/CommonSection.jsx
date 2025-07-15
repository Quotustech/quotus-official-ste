import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import RippleButton from '../layout/RippleButton';
import {  useNavigate ,useLocation} from 'react-router-dom';
import ProductFeatures from '../layout/AdditionalServices';

const CommonSection = ({ data }) => {
  const navigate = useNavigate();
  const location=useLocation();

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
  


  // Ensure data is available
  if (!data || !data.section1 || !data.section2 || !data.section3 ) {
    return <div className="text-center text-red-500">Data not available</div>
  }
 // Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 }
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
  }
];

// Animation variants


const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(81, 56, 151, 0.2)"
  }
};

//section 5 animation variants
// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    color: "#513897",
    transition: { duration: 0.2 }
  }
};

  return (
    <div className="min-h-screen  mt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16  w-screen">
      {/* Section 1: Image with Title and Description */}
      <section className="py-12   ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true,  }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 items-center  "
        >
          <motion.div variants={itemVariants} className="lg:w-1/2 ">
            <img
              src={data.section1.image}
              alt={data.section1.title}
              className="rounded-lg shadow-xl w-full h-[80vh] object-cover"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="lg:w-1/2 ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f0079]">
              {data.section1.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6">{data.section1.description}</p>
            {data.section1.cta && (
             <div className='w-full lg:w-[20vw]' onClick={()=>{navigate("/product")}}>
                <RippleButton >
                {data.section1.cta}
             </RippleButton >
             </div>
              
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: What We Serve - Text Oriented */}
      <section className=" bg-white" id="subHeadings">
        <div className="">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1f0079]"
            >
              {data.section2.title}
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.section2.services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#513897]">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Tech We Use */}
      <section className="py-16 px-4  text-[#1f0079] bg-white">
        <div className="">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              {data.section3.title}
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-6 ">
              {data.section3.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: how we do it*/}
      <section className="py-16  bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Subheading */}
          <motion.div 
            variants={cardVariants}
            className="text-center mb-16"
          >
            <h3 className="text-sm font-semibold text-[#513897] uppercase tracking-wider mb-2">
              Our Process
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f0079]">
              How We Do It
            </h2>
          </motion.div>

          {/* Steps Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                // variants={cardVariants}
                whileHover="hover"
                className="flex flex-col items-center text-center"
              >
                
                <div className="w-20 h-30 overflow-hidden rounded-lg bg-white flex items-center justify-center">
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1f0079] mb-6">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>

          
        </motion.div>
      </div>
    </section>

      {/* Section 5: Explore more */}
      {/* <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="text-center"
        >
          <motion.h2 
            variants={item}
            className="text-3xl md:text-4xl font-bold mb-12 text-[#1f0079]"
          >
            Our Additional Capabilities
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-y-2"
            variants={container}
          >
            {data.section4.otherServices.map((service, index) => (
              <React.Fragment key={index}>
                <motion.div
                  variants={item}
                  whileHover="hover"
                  onClick={() => navigate(service.path)}
                  className="px-4 cursor-pointer font-medium text-lg text-gray-800 hover:text-[#513897] transition-colors"
                >
                  {service.name}
                </motion.div>
                {index < data.section4.otherServices.length - 1 && (
                  <motion.span 
                    className="text-gray-300 hidden sm:block"
                    variants={item}
                  >
                    |
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section> */}

    <ProductFeatures otherServices={data.section4.otherServices}/>
    </div>
  );
};


export default CommonSection;