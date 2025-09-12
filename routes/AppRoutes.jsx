import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Gallery from "../pages/Gallery";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import PageNotFound from "../pages/PageNotFound";
import BlogPost from "../src/components/blogsSection/BlogPost"
//services
import WebDevelopment from "../src/components/serviceSection/WebDevelopment";
import UiUxDesign from "../src/components/serviceSection/UiUxDesign";
import MobileAppDevelopment from "../src/components/serviceSection/MobileAppDevelopment";
import BlockchainDevelopment from "../src/components/serviceSection/BlockchainDevelopment";
import AiSolutions from "../src/components/serviceSection/AiSolutions";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/services" element={<Services />} /> */}

      {/* Nested route for services */}
      <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route
        path="/services/mobile-app-development"
        element={<MobileAppDevelopment />}
      />
      <Route
        path="/services/blockchain-development"
        element={<BlockchainDevelopment />}
      />
      <Route path="/services/ai-solutions" element={<AiSolutions />} />

      {/* <Route path="/team" element={<Team />} /> */}
      <Route path="/gallery" element={<Gallery />} />

      {/* Nested route for products */}
      <Route path="/product/naturopura" element={<Product />} />
      <Route path="/product/arthaProAi" element={<Product />} />
      <Route path="/product/feedora" element={<Product />} />
      <Route path="/product/swiftrooms" element={<Product />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogPost />} />
      {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}

      {/* unmatched paths */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
