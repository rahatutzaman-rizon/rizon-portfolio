import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaArrowLeft } from 'react-icons/fa';

const SingleProject = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`https://myportfolio-server.vercel.app/project/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch project details');
        }
        const data = await response.json();
        setProject(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"
        ></motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Error: {error}
        </motion.div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Project not found
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/projects" className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-8 transition duration-300">
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm"
        >
          <div className="relative h-96 overflow-hidden">
            <motion.img 
              src={project.image_url} 
              alt={project.project_name} 
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <motion.h1 
              className="absolute bottom-4 left-8 text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {project.project_name}
            </motion.h1>
          </div>
          
          <div className="p-8">
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {project.long_description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech_stack.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="px-4 py-2 bg-sky-800 bg-opacity-20 text-white text-sm font-medium rounded-full"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div 
                className="bg-sky-900 bg-opacity-5 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-3">
                  <FaCode className="text-blue-400 mr-3 text-2xl" />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <p className="text-gray-300">{project.frontend_details}</p>
              </motion.div>
              <motion.div 
                className="bg-sky-900 bg-opacity-5 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-3">
                  <FaServer className="text-green-400 mr-3 text-2xl" />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <p className="text-gray-300">{project.backend_details}</p>
              </motion.div>
              <motion.div 
                className="bg-sky-900 bg-opacity-5 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-3">
                  <FaDatabase className="text-purple-400 mr-3 text-2xl" />
                  <h3 className="text-xl font-semibold">Database</h3>
                </div>
                <p className="text-gray-300">{project.database_details}</p>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <motion.a 
                href={project.source_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white bg-blue-00 hover:bg-blue-700 px-8 py-3 rounded-full transition duration-300 mb-4 sm:mb-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo <FaExternalLinkAlt className="ml-2" />
              </motion.a>
              <div className="flex space-x-4">
                <motion.a 
                  href={project.github_link_client} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-white transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Client <FaGithub className="ml-2" />
                </motion.a>
                <motion.a 
                  href={project.github_link_server} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-white transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Server <FaGithub className="ml-2" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleProject;