import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from '../routes/AppRoutes';
import SmoothScroll from './components/overlays/SmoothScroll';
import ScrollToTop from './components/overlays/ScrollToTop';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

function App() {
  return (
    <>
      <ScrollToTop />   {/* resets page on route change */}
      <SmoothScroll/>
      <div className="min-h-screen w-screen bg-white">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
      <ScrollToTopButton />  {/* floating arrow button */}
    </>
  );
}

export default App;
