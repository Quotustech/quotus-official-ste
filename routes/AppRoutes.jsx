import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Team = lazy(() => import("../pages/Team"));
const Gallery = lazy(() => import("../pages/Gallery"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const Product = lazy(() => import("../pages/Product"));
const Contact = lazy(() => import("../pages/Contact"));
const Blog = lazy(() => import("../pages/Blog"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const BlogPost = lazy(() => import("../src/components/blogsSection/BlogPost"));

// Lazy load services
const WebDevelopment = lazy(() =>
  import("../src/components/serviceSection/WebDevelopment")
);
const UiUxDesign = lazy(() =>
  import("../src/components/serviceSection/UiUxDesign")
);
const MobileAppDevelopment = lazy(() =>
  import("../src/components/serviceSection/MobileAppDevelopment")
);
const BlockchainDevelopment = lazy(() =>
  import("../src/components/serviceSection/BlockchainDevelopment")
);
const AiSolutions = lazy(() =>
  import("../src/components/serviceSection/AiSolutions")
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<div> </div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

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

        <Route path="/gallery" element={<Gallery />} />

        {/* Nested route for products */}
        <Route path="/product/naturopura" element={<Product />} />
        <Route path="/product/arthaProAi" element={<Product />} />
        <Route path="/product/feedora" element={<Product />} />
        <Route path="/product/swiftrooms" element={<Product />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />

        {/* unmatched paths */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
