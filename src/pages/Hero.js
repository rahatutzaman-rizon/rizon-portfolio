import React, { useState, useEffect } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { Link } from "react-scroll";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useViewportScroll();
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    scrollY.onChange((latest) => {
      controls.start({ y: latest / 2 });
    });
  }, [controls, scrollY]);

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/rahatutzaman-rizon" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/rahatutzamanrizon/" },
    
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Dynamic background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Animated shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl sm:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Rahatutzaman Rizon
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-300">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Problem Solver',
                2000,
                'Photographer',
                2000,
                'Software Developer',
                2000,

              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </h2>
          <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences that push the boundaries of innovation and design. Let's create something extraordinary together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(79, 70, 229, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
            <motion.button
              className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-500 font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-500 hover:text-white"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="contact" smooth={true} duration={500}>
                Let's Connect
              </Link>
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Link to="about" smooth={true} duration={500}>
            <FaArrowDown className="text-3xl text-purple-500 cursor-pointer" />
          </Link>
        </motion.div>
      </div>

      {/* Parallax effect on scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('../assets/rizon.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={controls}
      />
    </div>
  );
};

export default Hero;