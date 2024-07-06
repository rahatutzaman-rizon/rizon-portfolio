import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaBlog, FaProjectDiagram, FaTachometerAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/', icon: <FaUser /> },
    { name: 'Blog', path: '/', icon: <FaBlog /> },
    { name: 'Projects', path: '/', icon: <FaProjectDiagram /> },
    { name: 'Dashboard', path: '/', icon: <FaTachometerAlt /> },
    { name: 'Contact', path: '/', icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <motion.span 
              className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Rahatutzaman Rizon
            </motion.span>
          </Link>
          
          {isMobile ? (
            <div className="-mr-2 flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  scrolled ? 'text-gray-800 hover:text-gray-500' : 'text-white hover:text-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </motion.button>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        location.pathname === item.path
                          ? 'bg-gray-900 text-white'
                          : `${scrolled ? 'text-gray-800 hover:bg-gray-700' : 'text-gray-300 hover:bg-gray-700'} hover:text-white`
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-800 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={toggleMenu}
                  >
                    <span className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;