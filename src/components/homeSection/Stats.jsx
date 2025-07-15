import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

function Stats() {
  const stats = [
    { value: 250, label: "Happy Clients" },
    { value: 500, label: "Projects Completed" },
    { value: 99, label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <InView threshold={0.5} triggerOnce>
      {({ inView, ref }) => (
        <section ref={ref} className="py-20 bg-[#1f0079] text-white mt-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#b8b2ff] to-white bg-clip-text text-transparent">
                    {typeof stat.value === 'number' ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.label === "Client Satisfaction" ? "%" : "+"}
                        start={inView ? 0 : undefined}
                        separator=","
                        decimals={stat.label === "Client Satisfaction" ? 0 : 0}
                      />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15 + 0.3,
                      ease: "easeOut"
                    }}
                    className="text-[#b8b2ff]"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}

export default Stats;