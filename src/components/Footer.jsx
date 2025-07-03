import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, color: '#915EFF' }}
    className="text-secondary hover:text-[#915EFF] transition-colors"
  >
    {children}
  </motion.a>
);

const FooterSection = ({ title, children }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-white font-bold text-[18px]">{title}</h3>
    {children}
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary"
    >
      <div className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-secondary/20"
        >
          <div className="text-center">
            <p className="text-secondary text-sm">
             Copyright © {currentYear} All rights reserved | Made with ❤️ By <strong><Link to="/">Piyush</Link></strong>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Animated Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-1 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-30"
        />
      </div>
    </motion.footer>
  );
};

export default Footer; 