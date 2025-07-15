import React from 'react'
import CommonSection from './CommonSection';

function BlockchainDevelopment() {
  const data = {
    section1: {
      image: "https://www.market-prospects.com/storage/images/465_1200x675.jpg",
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
        { name: "Solidity", icon: "https://docs.soliditylang.org/en/latest/_images/solidity_logo.svg", description: "Ethereum smart contract language" },
        { name: "Hardhat", icon: "https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png", description: "Smart contract development environment" },
        { name: "Ethers.js", icon: "https://avatars.githubusercontent.com/u/37784886", description: "Lightweight Ethereum interaction library" },
        { name: "IPFS", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png", description: "Decentralized file storage" },
        { name: "Polygon", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U4q_Ovn5n6kqGakRM8c-l_WLevMBvs4iAw&s", description: "Ethereum-compatible sidechain" },
        { name: "Cardano", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdd9WfS3QIH6smKyelNNojxodAJk9w03ZmA&s", description: "Cardano blockchain" },
        { name: "Metamask", icon: "https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png", description: "Popular Ethereum wallet" }
      ]
    },
    section4:{
      otherServices:[
        { 
          name: "Ui Ux Design", 
          path:"/services/ui-ux-design",
          imageUrl:"https://devexhub.com/blog_images/1721899805_Web%20development%20services.png"
          
        },
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
          name:"AI Solutions",
          path:"/services/ai-solutions",
          imageUrl:"https://devexhub.com/blog_images/1721899805_Web%20development%20services.png"
        }
      ]
    }
  };
  
  return (
    <div>BlockchainDevelopment
      <CommonSection data={data}/>
    </div>
  )
}

export default BlockchainDevelopment