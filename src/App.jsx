import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, About, Projects } from './pages';
import { styles } from './styles';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Blog from './pages/Blog';
import TailwindCSSTricks from './pages/blogs/TailwindCSSTricks';
import CleanArchitectureDotnet from './pages/blogs/CleanArchitectureDotnet';
import EfVsDapper from './pages/blogs/EfVsDapper';
import PortfolioCreation from './pages/blogs/PortfolioCreation';
import Error404 from './pages/Error404';
import { useEffect, useState } from 'react';

const App = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setShowCursor(window.innerWidth > 1024 && !/Mobi|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Router>
      <div className={`relative z-0 bg-primary${showCursor ? ' cursor-none' : ''}`}>
        {showCursor && <CustomCursor />}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className={`${styles.paddingX} relative z-0`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/tailwind-css-tricks" element={<TailwindCSSTricks />} />
              <Route path="/blog/clean-architecture-dotnet" element={<CleanArchitectureDotnet />} />
              <Route path="/blog/ef-vs-dapper" element={<EfVsDapper />} />
              <Route path="/blog/portfolio-creation" element={<PortfolioCreation />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
