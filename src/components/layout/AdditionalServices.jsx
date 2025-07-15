
import {  motion, useSpring, useTransform } from "framer-motion";
import Balancer from "react-wrap-balancer";

import { cn } from "../../lib/utils";



function FeatureCard({ feature, className, zIndexOffset = 0, ...props }) {
  const { title, category, imageUrl } = feature;
  const springValue = useSpring(0, {
    bounce: 0,
  });
  const zIndex = useTransform(springValue, (value) => +Math.floor(value * 10) + 10 + zIndexOffset);
  const scale = useTransform(springValue, [0, 1], [1, 1.1]);

  const content = (
    <>
      <img src={imageUrl} alt="" className="-z-1 absolute inset-0 h-full w-full object-cover" />
      <div className="z-10 flex h-full w-full flex-col gap-2 bg-gradient-to-t from-zinc-800/40 from-15% to-transparent p-3">
        <small className="inline w-fit rounded-xl bg-orange-950 bg-opacity-50 px-2 py-1 text-xs font-medium leading-none text-white">
          {category}
        </small>

        <div className="flex-1" />
        <h3 className="rounded-xl bg-blue-950 bg-opacity-30 p-3 text-base font-bold leading-none text-white backdrop-blur-sm">
          {title}
        </h3>
      </div>
    </>
  );

  const containerClassName = cn(
    "relative flex h-64 w-48 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl",
    className,
  );

  return (
    <>
      <motion.div
        onMouseEnter={() => springValue.set(1)}
        onMouseLeave={() => springValue.set(0)}
        style={{
          zIndex,
          scale,
        }}
        className={cn(containerClassName, "hidden sm:flex")}
        {...props}
      >
        {content}
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0, transition: { duration: 0.5 } }}
        className={cn(containerClassName, "flex sm:hidden")}
      >
        {content}
      </motion.div>
    </>
  );
}

export default function ProductFeatures({otherServices}) {
  const cardWidth = 48 * 4; // w-48 x 4
  const angle = 6;
  const yOffset = 30;

  return (
    <section className="storybook-fix flex w-full flex-col items-center gap-4 bg-white py-10">
      <motion.header
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        className="flex flex-col items-center gap-2 text-center"
      >
         <h2 className="text-3xl md:text-4xl font-bold text-[#1f0079]">
              Our Additional Capabilities
            </h2>
       
      </motion.header>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
      >
        
      </motion.div>
      <div className="relative flex w-full flex-wrap justify-center gap-8 px-4 py-12 sm:flex-row sm:gap-0">
        {otherServices.slice(0, 3).map((service, index) => (
          <FeatureCard
            key={service.path}
            feature={{
              category: "Service",
              title: service.name,
              imageUrl: service.imageUrl,
            }}
            initial={{
              x: index === 0 ? cardWidth : index === 2 ? -cardWidth : 0,
              y: yOffset,
              opacity: 0,
              rotate: 0,
              scale: 0.9,
            }}
            animate={{
              x: index === 0 ? yOffset : index === 2 ? -yOffset : 0,
              y: 10,
              opacity: 1,
              scale: 0.95,
              rotate: index === 0 ? -angle : index === 2 ? angle : 0,
              transition: {
                type: "spring",
                delay: 0.4 + index * 0.2,
              },
            }}
            zIndexOffset={index}
          />
        ))}
      </div>
    </section>
  );
}
