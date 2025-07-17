import { FiPenTool, FiCode, FiSmartphone, FiCpu, FiActivity } from "react-icons/fi";

export const servicesData = [
    {
      title: "UI/UX Design",
      icon: <FiPenTool className="text-[#21047c]" />,
      path: "/services/ui-ux-design",
      id:"subHeadings",
      items: [
        { title: "Wireframing & Prototyping" },
        { title: "User Interface Design" },
        { title: "User Experience Research" },
        { title: "Web & Mobile App Design" },
      ],
    },
    {
      title: "Web Development",
      icon: <FiCode className="text-[#21047c]" />,
      path: "/services/web-development",
      id:"subHeadings",
      items: [
        { title: "Frontend & Backend Development" },
        { title: "Custom Web Applications" },
        { title: "E-commerce & CMS Integration" },
        { title: "API Development & Integration" },
      ],
    },
    {
      title: "Mobile App Development",
      icon: <FiSmartphone className="text-[#21047c]" />,
      path: "/services/mobile-app-development",
      id:"subHeadings",
      items: [
        { title: "iOS & Android Development" },
        { title: "Flutter & React Native" },
        { title: "App Store Deployment" },
        { title: "UI/UX for Mobile" },
      ],
    },
    {
      title: "Blockchain Development",
      icon: <FiCpu className="text-[#21047c]" />,
      path: "/services/blockchain-development",
      id:"subHeadings",
      items: [
        { title: "Smart Contract Development" },
        { title: "Ethereum, Polygon, BSC" },
        { title: "Wallet & Token Integration" },
        { title: "DApp & NFT Solutions" },
      ],
    },
    {
      title: "AI Solutions",
      icon: <FiActivity className="text-[#21047c]" />,
      path: "/services/ai-solutions",
      id:"subHeadings",
      items: [
        { title: "AI Chatbots & Assistants" },
        { title: "Predictive Analytics" },
        { title: "Natural Language Processing" },
        { title: "Machine Learning Models" },
      ],
    },
  ];

  // data that sent to each component separately
  // blockchain development
  export const blockchainPageData = {
    section1: {
      image: "/service/blockchain/blockchainBg.jpg",
      title: "Innovative Blockchain Solutions",
      description: "From smart contracts to full-stack DApps, we bring decentralized ideas to life. We help startups and enterprises leverage blockchain for transparency, automation, and security.",
      cta: "Discover Blockchain Work"
    },
    section2: {
      title: "Our Blockchain Services",
      services: [
        { title: "Smart Contract Development", description: "Secure and gas-optimized contracts using Solidity and Vyper." },
        { title: "DApp Development", description: "Decentralized apps with seamless frontend integration." },
        { title: "Tokenization", description: "Launch custom ERC-20, ERC-721 or ERC-1155 tokens." },
        { title: "Wallet Integration", description: "Integrate MetaMask, WalletConnect, or custom wallets." },
        { title: "DeFi Platforms", description: "Yield farming, staking, and liquidity pool solutions." },
        { title: "Blockchain Consulting", description: "Architectural planning and ecosystem design." }
      ]
    },
    section3: {
      title: "Blockchain Stack",
      technologies: [
        { name: "Solidity", icon: "/service/blockchain/solidityLogo.svg", description: "Ethereum smart contract language" },
        { name: "Hardhat", icon: "/service/blockchain/hardhat.png", description: "Smart contract development environment" },
        { name: "Ethers.js", icon: "/service/blockchain/ether.png", description: "Lightweight Ethereum interaction library" },
        { name: "IPFS", icon: "/service/blockchain/ipfs.png", description: "Decentralized file storage" },
        { name: "Polygon", icon: "/service/blockchain/pol.jpeg", description: "Ethereum-compatible sidechain" },
        { name: "Cardano", icon: "/service/blockchain/cardanoimg.png", description: "Cardano blockchain" },
        { name: "Metamask", icon: "/service/blockchain/metamask.png", description: "Popular Ethereum wallet" }
      ]
    },
    section4:{
      otherServices:[
        { 
          name: "Ui Ux Design", 
          path:"/services/ui-ux-design",
          imageUrl:"/service/additionalServices/uiux.avif"
          
        },
        { 
          name: "Web Development", 
          path:"/services/web-development",
          imageUrl:"/service/additionalServices/webDev.jpeg"
          
        },
        {
          name:"Mobile App Development",
          path:"/services/mobile-app-development",
          imageUrl:"/service/additionalServices/mobile.webp"
        },
        {
          name:"AI Solutions",
          path:"/services/ai-solutions",
          imageUrl:"/service/additionalServices/ai.jpeg"
        }
      ]
    }
  };

  //mobile app development
  export const mobileAppPagedata = {
    section1: {
      image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169863.jpg?semt=ais_hybrid&w=740",
      title: "Intuitive Mobile Experiences",
      description: "We build high-performance mobile applications for iOS and Android using native and cross-platform technologies. Our apps are designed to be sleek, efficient, and user-friendly.",
      cta: "See Our Apps"
    },
    section2: {
      title: "Our Mobile App Services",
      services: [
        { title: "iOS & Android Apps", description: "Native apps built with Swift and Kotlin." },
        { title: "Cross-Platform Apps", description: "Flutter and React Native for faster delivery." },
        { title: "UI/UX for Mobile", description: "Mobile-optimized designs for better engagement." },
        { title: "App Store Deployment", description: "Submission and optimization for app stores." },
        { title: "Backend Integration", description: "Connect your app to custom APIs or third-party services." },
        { title: "Maintenance & Updates", description: "Post-launch support and performance tuning." }
      ]
    },
    section3: {
      title: "Mobile Tech Stack",
      technologies: [
        { name: "Flutter", icon: "/service/mobileApp/flutter.svg", description: "Fast UI toolkit from Google" },
        { name: "React Native", icon: "/service/mobileApp/react.svg", description: "Reusable React-based mobile development" },
        { name: "Kotlin", icon: "/service/mobileApp/kotlin.svg", description: "Modern language for Android" },
        { name: "Swift", icon: "/service/mobileApp/swift.svg", description: "Powerful iOS programming language" },
        { name: "Firebase", icon: "/service/mobileApp/firebase.svg", description: "Realtime database and hosting" }
      ]
    },
    section4:{
      otherServices:[
        { 
          name: "Ui Ux Design", 
          path:"/services/ui-ux-design",
          imageUrl:"/service/additionalServices/uiux.avif"
          
        },
        { 
          name: "Web Development", 
          path:"/services/web-development",
          imageUrl:"/service/additionalServices/webDev.jpeg"
          
        },
        {
          name:"Blockchain Development",
          path:"/services/blockchain-development",
          imageUrl:"/service/additionalServices/blockchainDev.webp"
        },
        {
          name:"AI Solutions",
          path:"/services/ai-solutions",
          imageUrl:"/service/additionalServices/ai.jpeg"
        }
      ]
    }
  };

  //web dev

  export const webDevPageData = {
    section1: {
      image: "/service/webDevelopment/webDev.jpeg",
      title: "Robust & Scalable Web Development",
      description: "We engineer fast, secure, and scalable web applications tailored to your business needs. Our full-stack expertise ensures seamless integration between frontend and backend with top-notch performance.",
      cta: "Explore Our Web Solutions"
    },
    section2: {
      title: "Our Web Development Services",
      services: [
        { title: "Frontend Development", description: "Modern UI with React, Vue, or Angular ensuring performance and interactivity." },
        { title: "Backend Development", description: "Robust server-side logic with Node.js, Express, or Django." },
        { title: "API Development", description: "RESTful and GraphQL APIs for seamless data flow between systems." },
        { title: "CMS Integration", description: "WordPress, Strapi, and headless CMS setups tailored to your needs." },
        { title: "E-commerce Solutions", description: "Custom and scalable online store development using Shopify, WooCommerce, or custom builds." },
        { title: "Progressive Web Apps", description: "Offline-capable, mobile-first apps that behave like native." }
      ]
    },
    section3: {
      title: "Our Tech Stack",
      technologies: [
        { name: "React", icon: "/service/webDevelopment/react.svg", description: "Dynamic frontend library" },
        { name: "Next.js", icon: "/service/webDevelopment/nextjs.svg", description: "SSR and SSG capabilities" },
        { name: "Node.js", icon: "/service/webDevelopment/nodejs.svg", description: "Scalable backend JavaScript runtime" },
        { name: "Express", icon: "/service/webDevelopment/express.svg", description: "Minimal and flexible backend framework" },
        { name: "MongoDB", icon: "/service/webDevelopment/mongodb.svg", description: "Flexible NoSQL database" },
        { name: "MySQL", icon: "/service/webDevelopment/mysql.svg", description: "Relational database support" },
        { name: "Tailwind CSS", icon: "/service/webDevelopment/Tailwind.png", description: "Utility-first CSS framework" }
      ]
    },
    section4:{
      otherServices:[
        { 
          name: "Ui Ux Design", 
          path:"/services/ui-ux-design",
          imageUrl:"/service/additionalServices/uiux.avif"
          
        },
        {
          name:"Mobile App Development",
          path:"/services/mobile-app-development",
          imageUrl:"/service/additionalServices/mobile.webp"
        },
        {
          name:"Blockchain Development",
          path:"/services/blockchain-development",
          imageUrl:"/service/additionalServices/blockchainDev.webp"
        },
        {
          name:"AI Solutions",
          path:"/services/ai-solutions",
          imageUrl:"/service/additionalServices/ai.jpeg"
        }
      ]
    }
  };

  //uiux

  export const uiuxPageData = {
    section1: {
      image: "/service/uiux/uiuxBg.avif",
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
          icon: "/service/uiux/figma.svg",
          description: "Our primary design and prototyping tool" 
        },
        { 
          name: "Adobe XD", 
          icon: "/service/uiux/xd.svg",
          description: "For advanced prototyping and micro-interactions" 
        },
        { 
          name: "Sketch", 
          icon: "/service/uiux/sketch.svg",
          description: "Vector design and collaboration" 
        },
        { 
          name: "Photoshop", 
          icon: "/service/uiux/photoshop.svg",
          description: "Advanced image editing and manipulation" 
        },
        { 
          name: "Illustrator", 
          icon: "/service/uiux/illustrator.svg",
          description: "Vector graphics and icon design" 
        },
        
      ]
    },
    section4:{
      otherServices:[
        { 
          name: "Web Development", 
          path:"/services/web-development",
          imageUrl:"/service/additionalServices/webDev.jpeg"
          
        },
        {
          name:"Mobile App Development",
          path:"/services/mobile-app-development",
          imageUrl:"/service/additionalServices/mobile.webp"
        },
        {
          name:"Blockchain Development",
          path:"/services/blockchain-development",
          imageUrl:"/service/additionalServices/blockchainDev.webp"
        },
        {
          name:"AI Solutions",
          path:"/services/ai-solutions",
          imageUrl:"/service/additionalServices/ai.jpeg"
        }
      ]
    }
  };

  //ai
 export const aiPageData = {
    section1: {
      image: "/service/ai/aiBg.jpg",
      title: "AI That Thinks For You",
      description: "Our AI solutions harness machine learning and natural language processing to automate workflows, predict outcomes, and generate insights. We bridge data and decisions using intelligent models.",
      cta: "Talk to Our AI Team"
    },
    section2: {
      title: "Our AI Capabilities",
      services: [
        { title: "Machine Learning Models", description: "Custom predictive models tailored to your data." },
        { title: "NLP Solutions", description: "Text classification, summarization, chatbots, and sentiment analysis." },
        { title: "Computer Vision", description: "Image recognition, object detection, and visual inspection tools." },
        { title: "AI Chatbots", description: "Conversational bots trained to handle real-world queries." },
        { title: "Recommendation Systems", description: "Collaborative filtering and deep learning for personalization." },
        { title: "AI Integration", description: "Embed AI into your existing products and infrastructure." }
      ]
    },
    section3: {
      title: "AI Tools & Platforms",
      technologies: [
        { name: "TensorFlow", icon: "/service/ai/tensflow.png", description: "End-to-end ML platform by Google" },
        { name: "PyTorch", icon: "/service/ai/pyt.png", description: "Flexible ML library by Facebook" },
        { name: "OpenAI", icon: "/service/ai/openai.webp", description: "Generative AI and NLP models" },
        
      ]
    },
    section4:{
      otherServices:[
        { 
          name: "Ui Ux Design", 
          path:"/services/ui-ux-design",
          imageUrl:"/service/additionalServices/uiux.avif"
          
        },
        { 
          name: "Web Development", 
          path:"/services/web-development",
          imageUrl:"/service/additionalServices/webDev.jpeg"
          
        },
        {
          name:"Mobile App Development",
          path:"/services/mobile-app-development",
          imageUrl:"/service/additionalServices/mobile.webp"
        },
        {
          name:"Blockchain Development",
          path:"/services/blockchain-development",
          imageUrl:"/service/additionalServices/blockchainDev.webp"
        },
      ]
    }
  }