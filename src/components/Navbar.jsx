import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';

const NavLink = ({ href, label, isActive, onClick }) => (
  <motion.div
    className="relative"
    whileHover="hover"
  >
    <Link
      to={href}
      onClick={onClick}
      className={`${
        isActive ? 'text-white' : 'text-secondary'
      } hover:text-white text-[16px] font-medium cursor-pointer px-5 py-2 relative transition-colors duration-300`}
    >
      {label}
      <motion.div
        initial={{ scaleX: 0 }}
        variants={{
          hover: {
            scaleX: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 25
            }
          }
        }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#915EFF] via-[#915EFF] to-[#7000FF]"
        style={{ transformOrigin: "center" }}
      />
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#915EFF] via-[#915EFF] to-[#7000FF]"
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  </motion.div>
);

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${styles.paddingX} w-full fixed top-5 z-20`}
    >
      <motion.div 
        className={`mx-auto max-w-7xl bg-[#0a0a0a] rounded-full border border-[#333333]/50 backdrop-blur-md
          ${scrolled ? 'bg-opacity-95 shadow-xl shadow-[#915EFF]/10' : 'bg-opacity-70'}`}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo and Name */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7000FF] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#915EFF]/20"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#dddddd]">P</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#dddddd] font-bold text-[20px]"
                whileHover={{ scale: 1.05 }}
              >
                Piyush
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="hidden sm:block text-secondary font-medium text-[16px] ml-3 border-l border-[#333333]/50 pl-3"
              >
                Portfolio
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="sm:flex hidden">
            <motion.div 
              className="flex items-center gap-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  isActive={active === link.label}
                  onClick={() => {
                    setActive(link.label);
                    window.scrollTo(0, 0);
                  }}
                />
              ))}
              <a
                href="/PiyushMittalFullStackResume.pdf"
                download
                className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7000FF] text-white text-[16px] font-medium shadow-lg shadow-[#915EFF]/20"
              >
                Resume
              </a>
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden flex">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7000FF] flex items-center justify-center shadow-lg shadow-[#915EFF]/20"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-full h-[2px] bg-white block"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-[2px] bg-white block"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-full h-[2px] bg-white block"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden border-t border-[#333333]/50"
            >
              <div className="flex flex-col gap-2 p-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    isActive={active === link.label}
                    onClick={() => {
                      setActive(link.label);
                      setIsMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  />
                ))}
                <a
                  href="/PiyushMittalFullStackResume.pdf"
                  download
                  className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7000FF] text-white text-[16px] font-medium shadow-lg shadow-[#915EFF]/20"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 