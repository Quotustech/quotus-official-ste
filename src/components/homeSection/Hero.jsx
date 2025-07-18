import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiJavascript, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiEthereum, SiDotnet, SiFlutter } from "react-icons/si";
import LetterPullUp from "../layout/LetterPullUp";

export default function HeroSection() {
  const containerRef = useRef(null);
  const orbitProgress = useMotionValue(0);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });

  const techLogos = [
    { name: "MERN", icon: <SiReact className="w-full h-full" />, color: "text-[#1f0079]" },
    { name: "MEAN", icon: <SiNodedotjs className="w-full h-full" />, color: "text-[#513897]" },
    { name: "Blockchain", icon: <SiEthereum className="w-full h-full" />, color: "text-[#1f0079]" },
    { name: "Word press", icon: <SiJavascript className="w-full h-full" />, color: "text-[#513897]" },
    { name: "Web App", icon: <SiDotnet className="w-full h-full" />, color: "text-[#1f0079]" },
    { name: "Android ", icon: <SiFlutter className="w-full h-full" />, color: "text-[#513897]" },
    { name: "Cloud", icon: <SiMongodb className="w-full h-full" />, color: "text-[#1f0079]" },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024
      });
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const animation = animate(orbitProgress, 1, {
      duration: screenSize.isMobile ? 60 : screenSize.isTablet ? 50 : 40, // Slower duration for smoother performance
      repeat: Infinity,
      ease: "linear",
    });

    return () => animation.stop();
  }, [screenSize, orbitProgress]);

  const getResponsiveValue = (mobile, tablet, desktop) => {
    return screenSize.isMobile ? mobile : screenSize.isTablet ? tablet : desktop;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen md:h-full lg:h-screen w-full overflow-hidden bg-white flex flex-col lg:flex-row items-center justify-center lg:justify-start pt-16 lg:pt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      {/* Left Side: Text Content */}
      <motion.div
        className="w-full lg:w-1/2 z-20 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0 mt-[20px] lg:mt-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4 md:mb-6 bg-[#1f0079]/10 backdrop-blur-md rounded-full border border-[#513897]/20 mx-auto lg:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#513897] animate-pulse" />
          <span className="text-xs xs:text-xs sm:text-[8px] md:text-xs lg:text-[8px] font-medium text-[#1f0079] tracking-wide">
            INNOVATION AT LIGHTSPEED
          </span>
        </motion.div>

        <motion.h1
          className="font-bold text-[#1f0079] mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="text-3xl xs:text-4xl sm:text-[2.5rem] md:text-[2.75rem] lg:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#1f0079] to-[#513897]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Reliable modern
          </motion.span>{" "}
          <span className="inline-block text-[#513897] text-3xl xs:text-4xl sm:text-[2.5rem] md:text-[2.75rem] lg:text-4xl xl:text-5xl">
            <LetterPullUp text="Technology" className="text-lg" />
          </span>
        </motion.h1>

        <motion.div
          className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 space-y-2 sm:space-y-3 md:space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="leading-relaxed sm:leading-normal"
          >
            We build reliable modern technology to empower digital transformation.
            Our engineering-first approach ensures high performance, scalability, and long-term impact.
            We focus on product excellence, seamless delivery, and technical precision.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center lg:justify-start gap-2 mt-4 sm:mt-6 md:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex -space-x-2">
            {techLogos.slice(0, getResponsiveValue(3, 4, 5)).map((tech, index) => (
              <motion.div
                key={index}
                className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white border border-[#513897]/20 flex items-center justify-center ${tech.color}`}
                initial={{ x: -15 * index, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5">
                  {tech.icon}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.span
            className="text-xs sm:text-sm text-[#513897] ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            +{techLogos.length - getResponsiveValue(3, 4, 5)} more in our stack
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Right Side: Tech Orbits */}
      <div className={`relative lg:absolute ${screenSize.isMobile ? 'w-full h-64 mt-6 mb-10' : screenSize.isTablet ? 'w-full h-60 mt-8 mb-12' : 'right-0 w-1/2 h-full'} flex items-center justify-center lg:pr-12 xl:pr-16`}>
        {/* Central Object */}
        <div className="relative z-10 will-change-transform">
          <motion.div
            className={`${getResponsiveValue('w-24 h-24', 'w-32 h-32', 'w-40 h-40 lg:w-40 lg:h-40')} rounded-full bg-gradient-to-br from-[#1f0079] to-[#513897] shadow-xl shadow-[#513897]/30 flex items-center justify-center`}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 180, 360],
              boxShadow: [
                "0 0 30px rgba(31, 0, 121, 0.3)",
                "0 0 50px rgba(81, 56, 151, 0.5)",
                "0 0 30px rgba(31, 0, 121, 0.3)",
              ],
            }}
            transition={{
              duration: 12, // Slower rotation for better performance
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`${getResponsiveValue('text-3xl', 'text-4xl', 'text-6xl')} text-white`}
            >
              ⚡
            </motion.div>
          </motion.div>
        </div>

        {/* Orbit Paths icons */}
        {[1, 0.75, 0.6].map((scale, orbitIndex) => (
          <motion.div
            key={orbitIndex}
            className="absolute rounded-full will-change-transform"
            style={{
              rotate: useTransform(orbitProgress, [0, 1], [0, orbitIndex % 2 === 0 ? 360 : -360]),
            }}
          >
            {techLogos
              .filter((_, i) => i % (3 - orbitIndex) === 0)
              .map((tech, logoIndex) => {
                const distance = getResponsiveValue(100, 125, 175) * scale;
                const angle = (logoIndex / (techLogos.length / (3 - orbitIndex))) * Math.PI * 2;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                return (
                  <motion.div
                    key={tech.name}
                    className={`absolute ${tech.color} bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-[#513897]/20 m-0 will-change-transform`}
                    style={{
                      x,
                      y,
                      width: `${getResponsiveValue(30, 40, 50) * (1 - orbitIndex * 0.15)}px`,
                      height: `${getResponsiveValue(30, 40, 50) * (1 - orbitIndex * 0.15)}px`,
                      padding: getResponsiveValue('0.4rem', '0.5rem', '0.75rem'),
                    }}
                    whileHover={{
                      scale: getResponsiveValue(1.2, 1.25, 1.3),
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      zIndex: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`${getResponsiveValue('w-3 h-3', 'w-4 h-4', 'w-6 h-6')}`}>
                      {tech.icon}
                    </div>
                    {screenSize.isDesktop && (
                      <motion.div
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-[#1f0079] whitespace-nowrap opacity-0"
                        whileHover={{ opacity: 1 }}
                      >
                        {tech.name}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
          </motion.div>
        ))}

        {/* Floating Tech Tags - Only on desktop */}
        {screenSize.isDesktop && techLogos.map((tech, index) => {
          const angle = (index / techLogos.length) * Math.PI * 2;
          const distance = 200 + 0.3 * 100;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;

          return (
            <motion.div
              key={`tag-${index}`}
              className={`absolute text-sm md:text-md font-medium px-2 py-2 md:px-3 md:py-3 rounded-full ${tech.color} bg-white/90 backdrop-blur-sm border border-[#513897]/20 will-change-transform`}
              style={{
                x,
                y,
              }}
              animate={{
                x: [x, x + (Math.random() * 20 - 10)], // Reduced movement range
                y: [y, y + (Math.random() * 20 - 10)],
              }}
              transition={{
                duration: 15 + Math.random() * 10, // Slower movement
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.2, // Reduced hover scale
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            >
              {tech.name}
            </motion.div>
          );
        })}

        {/* Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className={`absolute top-1/2 left-1/2 ${getResponsiveValue('w-48 h-48', 'w-64 h-64', 'w-96 h-96 lg:w-[500px] lg:h-[500px]')} rounded-full bg-[#513897] blur-3xl opacity-10 will-change-transform`}
            animate={{
              scale: [1, 1.3, 1], // Reduced scale animation
              opacity: [0.1, 0.12, 0.1], // Reduced opacity variation
            }}
            transition={{
              duration: 16, // Slower animation
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {screenSize.isDesktop && (
            <motion.div
              className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-[#1f0079] blur-2xl opacity-5 will-change-transform"
              animate={{
                scale: [1, 1.2, 1], // Reduced scale animation
                opacity: [0.05, 0.07, 0.05], // Reduced opacity variation
              }}
              transition={{
                duration: 12, // Slower animation
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4 // Longer delay
              }}
            />
          )}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Board Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60H0V0h60zM10 10v40h40V10H10zm5 5h30v30H15V15zm5 5v20h20V20H20z' stroke='%231f0079' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`
          }}
        />

        {/* Floating Particles - Reduced count */}
        {[...Array(getResponsiveValue(10, 20, 30))].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 4 === 0 ? "bg-[#1f0079]" : i % 4 === 1 ? "bg-[#513897]" : i % 4 === 2 ? "bg-[#1f0079]" : "bg-[#513897]"} will-change-transform`}
            style={{
              width: `${Math.random() * (screenSize.isMobile ? 2 : screenSize.isTablet ? 2 : 3) + 1}px`, // Smaller particles
              height: `${Math.random() * (screenSize.isMobile ? 2 : screenSize.isTablet ? 2 : 3) + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: screenSize.isMobile ? 0.1 : screenSize.isTablet ? 0.2 : 0.3, // Lower opacity
            }}
            animate={{
              x: [0, Math.random() * 30 - 15], // Reduced movement range
              y: [0, Math.random() * 30 - 15],
              transition: {
                duration: Math.random() * 20 + 15, // Slower movement
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}

        

        {/* Grid Lines - Only on tablet and desktop */}
        {!screenSize.isMobile && (
          <motion.div
            className="absolute inset-0 opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: 1 }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(31, 0, 121, 0.3)" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)" />
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(81, 56, 151, 0.5)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </motion.div>
        )}
      </div>
    </div>
  );
}