import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaPalette, FaComments, FaPython, FaGithub, FaFire } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiExpress, SiGit, SiNextdotjs, SiRedux, SiTailwindcss, SiCplusplus, SiMysql, SiGraphql, SiNetlify, SiVercel, SiPostman, SiTrello } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { Flipper, Flipped } from 'react-flip-toolkit';

const SkillCategory = ({ title, skills, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flipper flipKey={isOpen}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <motion.div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-2xl font-bold text-purple-300 flex items-center">
            <Icon className="mr-2" />
            {title}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaCode />
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <Flipped flipId={`category-${title}`}>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              >
                {skills.map((skill, index) => (
                  <Flipped flipId={`skill-${title}-${index}`} key={index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-700 p-4 rounded-lg flex flex-col items-center justify-center"
                    >
                      <skill.icon className="text-4xl mb-2 text-purple-400" />
                      <p className="text-sm text-center text-gray-300">{skill.name}</p>
                    </motion.div>
                  </Flipped>
                ))}
              </motion.div>
            </Flipped>
          )}
        </AnimatePresence>
      </motion.div>
    </Flipper>
  );
};

const About = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: FaCode,
      skills: [
        { name: "JavaScript (ES6+)", icon: SiJavascript },
        { name: "Python", icon: FaPython },
        { name: "C++", icon: SiCplusplus },
      ]
    },
    {
      title: "Front-End",
      icon: FaReact,
      skills: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Redux", icon: SiRedux },
      ]
    },
    {
      title: "Back-End",
      icon: FaNodeJs,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "GraphQL", icon: SiGraphql },
        { name: "RESTful APIs", icon: FaDatabase },
      ]
    },
    {
      title: "Databases",
      icon: FaDatabase,
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: FaGithub,
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: FaGithub },
        { name: "Firebase", icon: FaFire },
        { name: "Netlify", icon: SiNetlify },
        { name: "Vercel", icon: SiVercel },
        { name: "Postman", icon: SiPostman },
        { name: "Trello", icon: SiTrello },
      ]
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          My Journey in Tech
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-purple-300">About Me</h3>
            <TypeAnimation
              sequence={[
                'Hello, I am Rahatutzaman Rizon',
                1000,
                'I am a Full Stack Developer',
                1000,
                'I am passionate about problem-solving',
                1000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-xl text-gray-300 mb-6"
            />
            <p className="text-gray-300 mb-6">
              Currently pursuing my undergraduate degree in ICT at Mawlana Bhasani Science and Technology University. 
              I'm dedicated to crafting efficient and innovative solutions using cutting-edge technologies.
            </p>
            <motion.a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode className="mr-2" /> View Projects
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Tech Enthusiasm</h3>
            <div className="flex justify-center space-x-4">
              {[FaReact, FaNodeJs, SiMongodb, SiNextdotjs, SiTailwindcss].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="text-5xl text-purple-400"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2,
                  }}
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-purple-300">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Critical Thinking", "Communication", "Teamwork", "Problem Solving", "Adaptability"].map((skill, index) => (
              <motion.span
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-300"
                whileHover={{ scale: 1.1, backgroundColor: "#4C1D95" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
