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