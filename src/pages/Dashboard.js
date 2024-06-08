import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="text-4xl font-bold mb-8 text-center"
      >
        <Link to="/" className="text-white hover:text-blue-300 transition-colors duration-300">
          Home
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">About Me</h3>
          <p className="mb-4">
            As a software developer seeking an entry-level role, I am passionate about applying problem-solving skills to create efficient and innovative solutions. I am dedicated to contributing my technical expertise in a collaborative environment.
          </p>
          <p>
            With a B.Sc. in Information and Communication Technology from Mawlana Bhashani Science and Technology University (CGPA: 3.46), I have gained a solid foundation in programming languages like C++, JavaScript, and Python.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-green-400">Front-End</h4>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Firebase</li>
                <li>Next.js</li>
                <li>Redux</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-green-400">Back-End</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>JWT</li>
              </ul>
              <h4 className="text-lg font-semibold mb-2 text-green-400 mt-4">Database</h4>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">Projects</h3>
          <ul>
            <li>
              <h4 className="text-lg font-semibold mb-2 text-yellow-300">Pet Adoption Corner</h4>
              <p className="mb-2">Designed and implemented a streamlined pet adoption platform.</p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Technologies:</span> React, Tailwind CSS, Flowbite-React, Firebase, MongoDB, Node.js
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Deployment:</span> <a href="#" className="text-blue-400 hover:text-blue-300">View Site</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Client</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Server</a>
              </p>
            </li>
            <li className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-yellow-300">Boi-Bazar</h4>
              <p className="mb-2">A secure library system for efficient book management.</p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Technologies:</span> React, Tailwind CSS, DaisyUI, Firebase, MongoDB, Node.js
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Deployment:</span> <a href="#" className="text-blue-400 hover:text-blue-300">View Site</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Client</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Server</a>
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;