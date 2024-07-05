import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className="contact bg-gray-100 min-h-screen flex flex-col md:flex-row p-8" 
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="footer-left md:w-1/2 mb-8 md:mb-0" variants={itemVariants}>
        <h1 className="text-5xl font-bold mb-4">
          Want a <br /> Project?
        </h1>
      </motion.div>
      <motion.div className="footer-right md:w-1/2" variants={itemVariants}>
        <h3 className="text-xl font-semibold mb-4">I'M ALWAYS INTERESTED ABOUT</h3>
        <motion.div className="interests grid grid-cols-2 gap-4 mb-6" variants={itemVariants}>
          {['Multimedia', 'Augmented Reality', 'TV Series', 'Cricket', 'Photography', 'React'].map((interest, index) => (
            <motion.p key={index} className="bg-blue-200 p-2 rounded" whileHover={{ scale: 1.05 }}>
              {interest}
            </motion.p>
          ))}
        </motion.div>
        <hr className="my-6" />
        <h3 className="text-xl font-semibold mb-4">MINDING A PROJECT?</h3>
        <motion.button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
        <hr className="my-6" />
        <motion.div className="social-icons flex space-x-4 mb-6" variants={itemVariants}>
          {[
            { icon: 'fa-github', link: 'https://github.com/rahatutzaman-rizon' },
            { icon: 'fa-linkedin-in', link: 'https://www.linkedin.com/in/rahatutzaman-rizon-373529172/' },
            { icon: 'fa-youtube', link: 'https://www.youtube.com/@criedfizcken6200' },
            { icon: 'fa-discord', link: 'https://discord.com/channels/1027879533266878485/1051541409972363364' },
          ].map((social, index) => (
            <motion.a 
              key={index}
              href={social.link} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <i className={`fa-brands ${social.icon} text-2xl text-blue-500`} />
            </motion.a>
          ))}
        </motion.div>
        <hr className="my-6" />
        <motion.p variants={itemVariants} className="text-gray-600">
          Contact: 01771276400
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;