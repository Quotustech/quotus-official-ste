import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from '../routes/AppRoutes';
import SmoothScroll from './components/layout/SmoothScroll';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <SmoothScroll/>
      <div className="min-h-screen w-screen bg-white ">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
