import React from 'react'
import CommonSection from './CommonSection';
import {webDevPageData} from "../../data/servicesData";


function WebDevelopment() {

  // const data = {
  //   section1: {
  //     image: "https://devexhub.com/blog_images/1721899805_Web%20development%20services.png",
  //     title: "Robust & Scalable Web Development",
  //     description: "We engineer fast, secure, and scalable web applications tailored to your business needs. Our full-stack expertise ensures seamless integration between frontend and backend with top-notch performance.",
  //     cta: "Explore Our Web Solutions"
  //   },
  //   section2: {
  //     title: "Our Web Development Services",
  //     services: [
  //       { title: "Frontend Development", description: "Modern UI with React, Vue, or Angular ensuring performance and interactivity." },
  //       { title: "Backend Development", description: "Robust server-side logic with Node.js, Express, or Django." },
  //       { title: "API Development", description: "RESTful and GraphQL APIs for seamless data flow between systems." },
  //       { title: "CMS Integration", description: "WordPress, Strapi, and headless CMS setups tailored to your needs." },
  //       { title: "E-commerce Solutions", description: "Custom and scalable online store development using Shopify, WooCommerce, or custom builds." },
  //       { title: "Progressive Web Apps", description: "Offline-capable, mobile-first apps that behave like native." }
  //     ]
  //   },
  //   section3: {
  //     title: "Our Tech Stack",
  //     technologies: [
  //       { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Dynamic frontend library" },
  //       { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "SSR and SSG capabilities" },
  //       { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "Scalable backend JavaScript runtime" },
  //       { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", description: "Minimal and flexible backend framework" },
  //       { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "Flexible NoSQL database" },
  //       { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Relational database support" },
  //       { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png", description: "Utility-first CSS framework" }
  //     ]
  //   },
  //   section4:{
  //     otherServices:[
  //       { 
  //         name: "Ui Ux Design", 
  //         path:"/services/ui-ux-design",
  //         imageUrl:"/service/additionalServices/uiux.avif"
          
  //       },
  //       {
  //         name:"Mobile App Development",
  //         path:"/services/mobile-app-development",
  //         imageUrl:"/service/additionalServices/mobile.webp"
  //       },
  //       {
  //         name:"Blockchain Development",
  //         path:"/services/blockchain-development",
  //         imageUrl:"/service/additionalServices/blockchainDev.webp"
  //       },
  //       {
  //         name:"AI Solutions",
  //         path:"/services/ai-solutions",
  //         imageUrl:"/service/additionalServices/ai.jpeg"
  //       }
  //     ]
  //   }
  // };
  
  return (
    <div>
    <CommonSection data={webDevPageData} />;
    </div>
  )
}

export default WebDevelopment