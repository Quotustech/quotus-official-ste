import React from 'react';
import CommonSection from './CommonSection';
import {aiPageData} from "../../data/servicesData";

function AiSolutions() {

  // const data = {
  //   section1: {
  //     image: "https://factcheckhub.com/wp-content/uploads/2023/07/AI-7.jpg",
  //     title: "AI That Thinks For You",
  //     description: "Our AI solutions harness machine learning and natural language processing to automate workflows, predict outcomes, and generate insights. We bridge data and decisions using intelligent models.",
  //     cta: "Talk to Our AI Team"
  //   },
  //   section2: {
  //     title: "Our AI Capabilities",
  //     services: [
  //       { title: "Machine Learning Models", description: "Custom predictive models tailored to your data." },
  //       { title: "NLP Solutions", description: "Text classification, summarization, chatbots, and sentiment analysis." },
  //       { title: "Computer Vision", description: "Image recognition, object detection, and visual inspection tools." },
  //       { title: "AI Chatbots", description: "Conversational bots trained to handle real-world queries." },
  //       { title: "Recommendation Systems", description: "Collaborative filtering and deep learning for personalization." },
  //       { title: "AI Integration", description: "Embed AI into your existing products and infrastructure." }
  //     ]
  //   },
  //   section3: {
  //     title: "AI Tools & Platforms",
  //     technologies: [
  //       { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", description: "End-to-end ML platform by Google" },
  //       { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", description: "Flexible ML library by Facebook" },
  //       { name: "OpenAI", icon: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png", description: "Generative AI and NLP models" },
  //       { name: "HuggingFace", icon: "https://avatars.githubusercontent.com/u/25720743", description: "NLP model hub and training APIs" },
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
  //         name:"Mobile App Development",
  //         path:"/services/mobile-app-development",
  //         imageUrl:"/service/additionalServices/mobile.webp"
  //       },
  //       {
  //         name:"Blockchain Development",
  //         path:"/services/blockchain-development",
  //         imageUrl:"/service/additionalServices/blockchainDev.webp"
  //       },
  //     ]
  //   }
  // };
  
  return (
    <div>AiSolutions
      <CommonSection data={aiPageData}/>
    </div>
  )
}

export default AiSolutions