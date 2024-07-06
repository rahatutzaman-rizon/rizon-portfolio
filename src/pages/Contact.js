
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaCode, FaLaptopCode, FaUserTie, FaClock } from 'react-icons/fa';
import { SiReact, SiJavascript, SiTailwindcss, SiFramer, SiExpress, SiMongodb } from 'react-icons/si';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const skills = [
    { name: 'React', icon: <SiReact />, color: 'text-blue-400' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-white' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400' },
    { name: 'Framer Motion', icon: <SiFramer />, color: 'text-purple-400' },
  ];

  const benefits = [
    { icon: <FaCode />, title: 'Full-Stack Developer', description: 'Proficient in both frontend and backend technologies' },
    { icon: <FaLaptopCode />, title: 'Modern Tech Stack', description: 'MERN stack expertise for robust web applications' },
    { icon: <FaUserTie />, title: 'Professional', description: 'Reliable with excellent communication skills' },
    { icon: <FaClock />, title: 'Timely Delivery', description: 'I respect deadlines and deliver on time' },
  ];

  return (
    <motion.div 
      className="contact bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen flex flex-col justify-center items-center p-8 text-white"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-6xl font-bold mb-12 text-center"
        variants={itemVariants}
      >
        Full-Stack Solutions for Your <span className="text-cyan-400">Next Big Idea</span>
      </motion.h1>

      <motion.div className="w-full max-w-6xl bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-2xl" variants={itemVariants}>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Why Choose Me?</h3>
            <motion.div className="grid grid-cols-2 gap-6" variants={itemVariants}>
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/20 p-4 rounded-lg text-center flex flex-col items-center"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                >
                  <span className="text-3xl mb-2 text-cyan-400">{benefit.icon}</span>
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-6">My Tech Stack</h3>
            <motion.div className="grid grid-cols-2 gap-4 mb-8" variants={itemVariants}>
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/20 p-4 rounded-lg flex items-center space-x-3"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                >
                  <span className={`text-3xl ${skill.color}`}>{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <motion.button 
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-bold py-3 px-6 rounded-lg mb-6 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
            
            <motion.div className="social-icons flex justify-center space-x-6" variants={itemVariants}>
              {[
                { icon: <FaGithub />, link: 'https://github.com/rahatutzaman-rizon' },
                { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/rahatutzaman-rizon-373529172/' },
                { icon: <FaEnvelope />, link: 'mailto:rizonrahat199@gmail.com' },
                { icon: <FaPhone />, link: 'tel:+8801771276400' },
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-3xl hover:text-cyan-400 transition duration-300"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>




    </motion.div>
  );
};

export default Contact;