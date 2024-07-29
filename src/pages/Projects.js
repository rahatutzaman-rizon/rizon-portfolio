// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import { useInView } from 'react-intersection-observer';
// import { Tilt } from 'react-tilt';
// import { Link } from 'react-router-dom';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('https://myportfolio-server.vercel.app/project');
//         if (!response.ok) {
//           throw new Error('Failed to fetch projects');
//         }
//         const data = await response.json();
//         setProjects(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
//   }

//   if (error) {
//     return <div className="min-h-screen flex items-center justify-center text-white">Error: {error}</div>;
//   }

//   return (
//     <section className="py-20 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
//       <div 
//         className="absolute inset-0 z-0" 
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`,
//         }}
//       />
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.h2 
//           className="text-5xl font-bold text-center mb-4 text-white"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Featured Projects
//         </motion.h2>
//         <motion.p 
//           className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           Explore my portfolio of deployed projects. These showcase my expertise in creating 
//           robust, user-centric applications. Feel free to reach out for any inquiries or potential collaborations.
//         </motion.p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard 
//               key={project.id} 
//               project={project} 
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ProjectCard = ({ project, index }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Tilt options={{ max: 25, scale: 1.05 }}>
//       <motion.div 
//         ref={ref}
//         className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
//         initial={{ opacity: 0, y: 50 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ delay: index * 0.1, duration: 0.5 }}
//       >
//         <img src={project.image_url} alt={project.name} className="w-full h-48 object-cover" />
//         <div className="p-6">
//           <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.name}</h3>
//           <p className="text-gray-600 mb-4 line-clamp-3">{project.short_description}</p>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {project.technologies.map((tech, i) => (
//               <span key={i} className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
//                 {tech}
//               </span>
//             ))}
//           </div>
//           <div className="flex justify-between items-center mt-4">
//             <Link 
//               to={`/project/${project.id}`}
//               className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center"
//             >
//               Learn More
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </Link>
//             <div className="flex space-x-2">
//               <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
//                 <FaGithub size={20} />
//               </a>
//               <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
//                 <FaExternalLinkAlt size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

// export default Projects;