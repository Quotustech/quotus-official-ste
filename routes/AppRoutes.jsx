import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Team from '../pages/Team';
import Gallery from '../pages/Gallery';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Product from '../pages/Product';
import Contact from '../pages/Contact';
import Vlog from '../pages/Vlog';
import PageNotFound from '../pages/PageNotFound';

//services 
import WebDevelopment from '../src/components/serviceSection/WebDevelopment';
import UiUxDesign from '../src/components/serviceSection/UiUxDesign';
import MobileAppDevelopment from '../src/components/serviceSection/MobileAppDevelopment'; 
import BlockchainDevelopment from '../src/components/serviceSection/BlockchainDevelopment';
import AiSolutions from '../src/components/serviceSection/AiSolutions';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/services" element={<Services />} /> */}
      {        /* Nested route for services */}
      <Route path="/services/ui-ux-design" element={<UiUxDesign/>} />
      <Route path="/services/web-development" element={<WebDevelopment/>} />
      <Route path="/services/mobile-app-development" element={<MobileAppDevelopment/>} />
      <Route path="/services/blockchain-development" element={<BlockchainDevelopment/>} />
      <Route path="/services/ai-solutions" element={<AiSolutions />} />

      <Route path="/team" element={<Team />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/product/*" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/vlogs" element={<Vlog />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

       {/* unmatched paths */}
       <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}
