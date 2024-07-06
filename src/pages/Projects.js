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
      image_url: 'https://i.ibb.co/VTYJCyL/petadoption.png',
      project_name: "Pet Adoption Corner System",
      description: "A streamlined pet adoption platform with an integrated pet food shop.",
      long_description: "A comprehensive pet adoption platform featuring adoption requests, fundraising campaigns, and donation management. Users can adopt pets, create fundraising campaigns, and manage donations with options to view, remove, donate, and request refunds for their contributions.",
      features: [
        'Adoption Requests: Users can adopt a pet and remove it from the pet listing',
        'Fundraising Campaigns: Implemented a campaign creation feature for user fund collection',
        'Donation Management: Users can view, remove, donate and request refunds for their contributions',
        'Integrated pet food shop'
      ],
      tech_stack: ['React JS', 'Tailwind', 'Flowbite-React', 'Firebase', 'MongoDB', 'Node.js'],
      frontend_details: 'Built with React JS Library and styled using Tailwind and Flowbite-React for a responsive and modern UI.',
      backend_details: 'Node.js powers the server-side logic, with Firebase handling authentication and real-time updates.',
      database_details: 'MongoDB stores user profiles, pet information, and donation records, ensuring scalability and quick data retrieval.',
      source_link: 'https://pet-adoption-five.vercel.app',
      github_link_client: 'https://github.com/rahatutzaman-rizon/pet-adoption-corner',
      github_link_server: 'https://github.com/rahatutzaman-rizon/Pet-Adoption-Corner-Server',
    },
    {
      image_url: 'https://i.ibb.co/KrN9LcP/book.png',
      project_name: "Boi Bazar - Modern Library System",
      description: "A secure library management system for efficient book management.",
      long_description: "Boi Bazar is a secure library management system with categorized book selection, a comprehensive database, and secure routing for efficient book management. It allows students to browse books by categories or genres and maintains a well-organized database to store information about all books.",
      features: [
        'Categorized Book Selection: Allow students to browse books by categories or genres',
        'Comprehensive Database: Maintain a well-organized database to store information about all books',
        'Secure Routing: Implement private routes to ensure secure access, utilizing Firebase for enhanced security'
      ],
      tech_stack: ['React JS', 'Tailwind', 'DaisyUI', 'Firebase', 'MongoDB', 'Node.js'],
      frontend_details: 'React-based frontend with Tailwind and DaisyUI for a responsive and modern design.',
      backend_details: 'Node.js powers the backend, handling user authentication and book management.',
      database_details: 'MongoDB stores book information and user data, allowing for efficient querying and updates.',
      source_link: 'https://dainty-choux-b6b746.netlify.app/',
      github_link_client: 'https://github.com/rahatutzaman-rizon/Boi-Bazar-library',
      github_link_server: 'https://github.com/rahatutzaman-rizon/Boi-Bazar-Server',
    },
    {
      image_url: 'https://i.ibb.co/Lrd5BYq/student.png',
      project_name: "Student Project Progress Management System",
      description: "An integrated system for managing student projects, including task assignment, progress tracking, and communication features.",
      long_description: "A comprehensive system for managing student projects, including task assignment, progress tracking, feedback loop, and communication features for teachers and students. It allows teachers to assign projects with deadlines, students to submit work and track progress, and provides a platform for grading, feedback, and collaboration.",
      features: [
        'Task Management: Teachers assign projects with deadlines, students submit work and track progress',
        'Feedback Loop: Teachers grade submissions and provide feedback, students receive notifications',
        'Communication Hub: Integrated discussion forum for collaboration',
        'Notifications system to keep users informed about deadlines and updates'
      ],
      tech_stack: ['React JS', 'Tailwind', 'DaisyUI', 'Firebase', 'MongoDB', 'Node.js'],
      frontend_details: 'React-based frontend with Tailwind and  React library Famer Motion for a responsive and modern design.',
      backend_details: 'Node.js powers the backend, handling user authentication and Nodemailer for Email System.',
      database_details: 'MongoDB stores book information and user data, allowing for efficient querying and updates.',
      source_link: 'https://student-project-management-client.vercel.app/',
      github_link_client: 'https://github.com/rahatutzaman-rizon/student-project-management-client',
      github_link_server: 'https://github.com/rahatutzaman-rizon/Student-project-management-server',
    },
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
              href={project. github_link_client} 
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