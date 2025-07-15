import { motion } from "framer-motion";

const JourneyStep = ({ step, isLast, variants }) => (
  <motion.div 
    variants={variants}
    className="relative flex flex-col items-center"
  >
    {/* Progress line */}
    {!isLast && (
      <div className="absolute h-24 w-1 bg-gradient-to-b from-[#00ffc3] to-[#5138ee] top-16"></div>
    )}

    {/* Animated step circle */}
    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#00ffc3] to-[#5138ee] flex items-center justify-center text-2xl font-bold text-[#0f0f1e] mb-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {step.icon}
      </motion.div>
    </div>

    {/* Step content */}
    <div className="text-center max-w-xs">
      <motion.h3 
        className="text-2xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {step.title}
      </motion.h3>
      <motion.p 
        className="text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {step.description}
      </motion.p>
    </div>
  </motion.div>
);

export const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "The Beginning",
      description: "Connect your wallet to enter the Artha universe",
      icon: "1️⃣"
    },
    {
      id: 2,
      title: "The Challenge",
      description: "Place your bet and watch the multiplier rise",
      icon: "2️⃣"
    },
    {
      id: 3,
      title: "The Victory",
      description: "Cash out at the perfect moment to claim your rewards",
      icon: "3️⃣"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="bg-[#0f0f1e] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Story Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffc3] to-[#5138ee] mb-6">
            Your Crypto Gaming Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Embark on an adventure where every bet is a quest and every win is an epic victory
          </p>
        </motion.div>

        {/* Story Timeline */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Decorative elements */}
          <div className="hidden md:block absolute inset-0 flex items-center justify-center">
            <svg 
              viewBox="0 0 1000 200" 
              className="w-full h-auto opacity-20"
            >
              <path 
                d="M 50,100 Q 500,200 950,100" 
                stroke="#00ffc3" 
                strokeWidth="4" 
                fill="none"
                strokeDasharray="10 6"
              />
            </svg>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <JourneyStep 
              key={step.id}
              step={step}
              isLast={index === steps.length - 1}
              variants={item}
            />
          ))}
        </motion.div>

        {/* Story Climax (CTA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-24"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Adventure?
          </h3>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 255, 195, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#00ffc3] to-[#5138ee] text-[#0f0f1e] font-bold rounded-xl text-lg"
          >
            Start Your Journey Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};