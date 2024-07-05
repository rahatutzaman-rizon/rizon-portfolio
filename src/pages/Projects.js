import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import { IoClose } from 'react-icons/io5';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  
  const projectData = [
    {
      image_url: 'https://i.ibb.co/s1GGsqZ/Screenshot-46.png',
      project_name: "Pet Adoption Corner",
      description: 'A user-friendly pet adoption platform allows anyone to easily adopt pets, promoting inclusivity in providing homes for animals in need.',
      long_description: 'The Pet Adoption Corner is a comprehensive platform designed to connect animals in need with loving homes. It features an intuitive user interface that allows potential adopters to browse through available pets, filtering by species, breed, age, and location. The donation system enables users to contribute financially or offer their pets for adoption, ensuring a constant flow of support for animal welfare.',
      features: [
        'User-friendly pet browsing and adoption process',
        'Secure donation system for financial contributions',
        'Admin panel for managing listings and users',
        'Notification system for adoption updates',
        'Integration with local animal shelters'
      ],
      tech_stack: ['React', 'Tanstack', 'Express', 'NodeJs', 'Firebase', 'MongoDB'],
      frontend_details: 'Built with React for a responsive and interactive UI. Utilizes Tanstack Query for efficient data fetching and state management.',
      backend_details: 'Express and Node.js power the server-side logic, with Firebase handling authentication and real-time updates.',
      database_details: 'MongoDB stores user profiles, pet information, and donation records, ensuring scalability and quick data retrieval.',
      source_link: 'https://pet-adoption-30ae0.web.app/',
      github_link: 'https://github.com/yourusername/pet-adoption-corner',
    },
    {
      image_url: 'https://i.ibb.co/5vz3p7T/Screenshot-48.png',
      project_name: "Boi Bazar - Modern Library System",
      description: "A comprehensive digital library management system that streamlines book browsing, borrowing, and administration.",
      long_description: "Boi Bazar revolutionizes the traditional library experience with a modern, user-friendly interface. It offers an extensive digital catalog, efficient search and filter options, and a seamless checkout process. The platform includes features for both users and administrators, ensuring smooth library operations and an enhanced reading experience.",
      features: [
        'Advanced search and categorization system',
        'User profiles with reading history and recommendations',
        'Real-time availability updates',
        'Automated reminders for due dates',
        'Analytics dashboard for librarians'
      ],
      tech_stack: ['React', 'MongoDB', 'Node.js', 'Express', 'Redux', 'Tailwind CSS'],
      frontend_details: 'React-based frontend with Redux for state management. Tailwind CSS ensures a responsive and modern design.',
      backend_details: 'Node.js and Express power the backend, handling user authentication, book management, and API requests.',
      database_details: 'MongoDB stores book information, user data, and borrowing records, allowing for efficient querying and updates.',
      source_link: 'https://boi-bazar-library.netlify.app/',
      github_link: 'https://github.com/yourusername/boi-bazar',
    },
    {
      image_url: 'https://i.ibb.co/Qk9Gnjg/Screenshot-49.png',
      project_name: "Gadget Finder",
      description: "An intuitive e-commerce platform for discovering and purchasing the latest electronics and gadgets.",
      long_description: "Gadget Finder is a cutting-edge e-commerce solution tailored for tech enthusiasts. It offers a vast array of electronics from top brands, complete with detailed product information, user reviews, and comparison tools. The platform features a smart recommendation system and a seamless checkout process, enhancing the overall shopping experience.",
      features: [
        'Advanced product search and filtering',
        'User reviews and ratings system',
        'Product comparison tool',
        'Secure payment gateway integration',
        'Personalized product recommendations'
      ],
      tech_stack: ['React', 'Tanstack', 'Express', 'Node.js', 'Firebase', 'MongoDB', 'Stripe'],
      frontend_details: 'React-based frontend with Tanstack Query for efficient data management. Implements lazy loading for improved performance.',
      backend_details: 'Express and Node.js handle server-side logic, with Firebase for real-time updates and authentication.',
      database_details: 'MongoDB stores product catalogs, user data, and order information. Implements indexing for fast search results.',
      source_link: 'https://gadget-finder-store.web.app/',
      github_link: 'https://github.com/yourusername/gadget-finder',
    },
    {
      image_url: 'https://i.ibb.co/XJvGYhX/project-image-4.png',
      project_name: "EcoTrack",
      description: "A sustainability-focused application that helps users monitor and reduce their carbon footprint.",
      long_description: "EcoTrack is an innovative platform designed to empower individuals and businesses to make environmentally conscious decisions. It provides real-time tracking of carbon emissions, personalized suggestions for reducing environmental impact, and community features to encourage sustainable practices.",
      features: [
        'Personal carbon footprint calculator',
        'Daily eco-challenges and tips',
        'Integration with smart home devices for energy monitoring',
        'Community leaderboard and achievements',
        'Educational resources on sustainability'
      ],
      tech_stack: ['React Native', 'GraphQL', 'Apollo', 'Node.js', 'PostgreSQL', 'AWS'],
      frontend_details: 'Built with React Native for cross-platform mobile support. Apollo Client manages GraphQL queries and local state.',
      backend_details: 'Node.js backend with GraphQL API for flexible data querying. Utilizes AWS Lambda for serverless architecture.',
      database_details: 'PostgreSQL database for structured data storage, with PostGIS extension for location-based queries.',
      source_link: 'https://ecotrack-app.com',
      github_link: 'https://github.com/yourusername/ecotrack',
    }
  ];
 
  return (
    <section id="projects" className="py-20 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Explore my portfolio of deployed prototypes and websites. With collaborations spanning over 10 clients, 
          these projects showcase my expertise in creating robust, user-centric applications. 
          Feel free to reach out for any inquiries or potential collaborations.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Tilt options={{ max: 25, scale: 1.05 }}>
      <motion.div 
        ref={ref}
        className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        onClick={onClick}
      >
        <img src={project.image_url} alt={project.project_name} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.project_name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech_stack.map((tech, i) => (
              <span key={i} className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <button className="mt-4 text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Projects;

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={project.image_url} alt={project.project_name} className="w-full h-64 object-cover rounded-t-lg" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
            aria-label="Close modal"
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className="p-8">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">{project.project_name}</h3>
          <p className="text-gray-600 mb-6">{project.long_description}</p>
          
          <h4 className="text-xl font-semibold mb-3 text-gray-800">Key Features</h4>
          <ul className="list-disc pl-5 mb-6 text-gray-600 grid grid-cols-2 gap-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <h4 className="text-xl font-semibold mb-3 text-gray-800">Tech Stack</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech_stack.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-1 gap-4 mb-6 text-sm">
            <div className="flex items-start bg-gray-100 p-4 rounded-lg">
              <FaCode className="mt-1 mr-3 text-blue-500 text-xl" />
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Frontend</h5>
                <p className="text-gray-600">{project.frontend_details}</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-4 rounded-lg">
              <FaServer className="mt-1 mr-3 text-green-500 text-xl" />
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Backend</h5>
                <p className="text-gray-600">{project.backend_details}</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-100 p-4 rounded-lg">
              <FaDatabase className="mt-1 mr-3 text-purple-500 text-xl" />
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Database</h5>
                <p className="text-gray-600">{project.database_details}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <a 
              href={project.source_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition duration-300"
            >
              Live Demo <FaExternalLinkAlt className="ml-2" />
            </a>
            <a 
              href={project.github_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition duration-300"
            >
              View on GitHub <FaGithub className="ml-2" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};