import React from 'react';
import CommonSection from './CommonSection';
import {mobileAppPagedata} from "../../data/servicesData";

function MobileAppDevelopment() {
  
  // const data = {
  //   section1: {
  //     image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169863.jpg?semt=ais_hybrid&w=740",
  //     title: "Intuitive Mobile Experiences",
  //     description: "We build high-performance mobile applications for iOS and Android using native and cross-platform technologies. Our apps are designed to be sleek, efficient, and user-friendly.",
  //     cta: "See Our Apps"
  //   },
  //   section2: {
  //     title: "Our Mobile App Services",
  //     services: [
  //       { title: "iOS & Android Apps", description: "Native apps built with Swift and Kotlin." },
  //       { title: "Cross-Platform Apps", description: "Flutter and React Native for faster delivery." },
  //       { title: "UI/UX for Mobile", description: "Mobile-optimized designs for better engagement." },
  //       { title: "App Store Deployment", description: "Submission and optimization for app stores." },
  //       { title: "Backend Integration", description: "Connect your app to custom APIs or third-party services." },
  //       { title: "Maintenance & Updates", description: "Post-launch support and performance tuning." }
  //     ]
  //   },
  //   section3: {
  //     title: "Mobile Tech Stack",
  //     technologies: [
  //       { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", description: "Fast UI toolkit from Google" },
  //       { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Reusable React-based mobile development" },
  //       { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", description: "Modern language for Android" },
  //       { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", description: "Powerful iOS programming language" },
  //       { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", description: "Realtime database and hosting" }
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
  //         name: "Web Development", 
  //         path:"/services/web-development",
  //         imageUrl:"/service/additionalServices/webDev.jpeg"
          
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
    <div>MobileAppDelopment
      <CommonSection data={mobileAppPagedata}/>
    </div>
  )
}

export default MobileAppDevelopment