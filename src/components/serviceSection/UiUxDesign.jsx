import React from 'react'
import CommonSection from './CommonSection';

function UiUxDesign() {


  //  data to pass to the component
  const data = {
    section1: {
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Crafting Exceptional Digital Experiences",
      description: "We blend aesthetics with functionality to create intuitive interfaces that delight users and drive engagement. Our design philosophy centers on human-centered approaches that solve real problems while delivering beautiful solutions.",
      cta: "View Our Work"
    },
    section2: {
      title: "Our UI/UX Design Services",
      services: [
        {
          title: "User Research",
          description: "Comprehensive user research to understand behaviors, needs, and pain points through interviews, surveys, and analytics."
        },
        {
          title: "Wireframing & Prototyping",
          description: "Low and high-fidelity prototypes to test concepts and refine interactions before development begins."
        },
        {
          title: "UI Design",
          description: "Pixel-perfect interface designs with attention to typography, color theory, and visual hierarchy."
        },
        {
          title: "UX Strategy",
          description: "Holistic UX planning that aligns business goals with user needs for optimal product outcomes."
        },
        {
          title: "Design Systems",
          description: "Scalable design systems and component libraries to maintain consistency across products."
        },
        {
          title: "Usability Testing",
          description: "Rigorous testing methodologies to validate designs and identify improvement opportunities."
        }
      ]
    },
    section3: {
      title: "Our Design Toolkit",
      technologies: [
        { 
          name: "Figma", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          description: "Our primary design and prototyping tool" 
        },
        { 
          name: "Adobe XD", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
          description: "For advanced prototyping and micro-interactions" 
        },
        { 
          name: "Sketch", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
          description: "Vector design and collaboration" 
        },
        { 
          name: "Photoshop", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
          description: "Advanced image editing and manipulation" 
        },
        { 
          name: "Illustrator", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
          description: "Vector graphics and icon design" 
        },
        
      ]
    },
    section4:{
      otherServices:[
        { 
          name: "Web Development", 
          path:"/services/web-development",
          imageUrl:"https://devexhub.com/blog_images/1721899805_Web%20development%20services.png"
          
        },
        {
          name:"Mobile App Development",
          path:"/services/mobile-app-development",
          imageUrl:"https://devexhub.com/blog_images/1721899805_Web%20development%20services.png"
        },
        {
          name:"Blockchain Development",
          path:"/services/blockchain-development",
          imageUrl:"https://devexhub.com/blog_images/1721899805_Web%20development%20services.png"
        },
        {
          name:"AI Solutions",
          path:"/services/ai-solutions",
          imageUrl:"https://devexhub.com/blog_images/1721899805_Web%20development%20services.png"
        }
      ]
    }
  };


  return (
    <div className=''>
      <CommonSection data={data} />;
    </div>

  )
}

export default UiUxDesign;