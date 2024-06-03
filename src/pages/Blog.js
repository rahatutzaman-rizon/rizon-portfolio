import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);

  const profileData = {
    "personalInfo": {
      "name": "Rahatutzaman Rizon",
      "title": "Software Developer",
      "email": "rizon@example.com",
      "phone": "+880 1XXX-XXXXXX",
      "location": { "city": "Dhaka", "country": "Bangladesh" },
      "summary": "Passionate software developer with a strong focus on web technologies. Skilled in React, Node.js, and database management. Committed to delivering high-quality, scalable solutions that drive business growth.",
      "links": {
        "linkedin": "https://www.linkedin.com/in/rahatutzamanrizon",
        "github": "https://github.com/rizon",
        "portfolio": "https://rizon-portfolio.com"
      }
    },
    "skills": {
      "programmingLanguages": ["JavaScript", "Python", "Java", "C++"],
      "webTechnologies": ["React", "Node.js", "Express", "Redux"],
      "databases": ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      "cloudPlatforms": ["AWS", "Google Cloud", "Heroku"],
      "tools": ["Git", "Docker", "Jira", "Figma"]
    },
    "projects": [
      {
        "name": "RealTime Collab",
        "description": "A real-time collaborative coding platform with syntax highlighting and video chat",
        "technologies": ["React", "Node.js", "Socket.IO", "WebRTC"],
        "link": "https://github.com/rizon/realtime-collab",
        "highlights": ["Supports multiple languages", "5,000+ users worldwide"]
      },
      {
        "name": "AI-Driven Task Manager",
        "description": "An intelligent task management app that uses machine learning to prioritize tasks",
        "technologies": ["Vue.js", "Python", "Flask", "TensorFlow"],
        "link": "https://ai-taskmanager.rizon.com",
        "highlights": ["ML model trained on 100,000+ tasks", "Google Calendar integration"]
      }
    ],
    "workExperience": [
      {
        "title": "Senior Software Developer",
        "company": "TechInnovate Solutions",
        "location": "Dhaka, Bangladesh",
        "startDate": "2022-01",
        "endDate": null,
        "current": true,
        "responsibilities": [
          "Lead a team of 5 developers in building a large-scale e-commerce platform",
          "Optimized database queries, resulting in 40% performance improvement"
        ]
      }
    ]
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold text-blue-600"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <header className="max-w-4xl mx-auto mb-12">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold text-gray-900 text-center sm:text-5xl"
        >
          {profileData.personalInfo.name}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-xl text-gray-600 text-center"
        >
          {profileData.personalInfo.title} | {profileData.personalInfo.location.city}, {profileData.personalInfo.location.country}
        </motion.p>
      </header>

      <main className="max-w-4xl mx-auto space-y-16">
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-xl rounded-lg p-6 sm:p-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-700">{profileData.personalInfo.summary}</p>
          <div className="mt-6 flex space-x-4">
            <a href={profileData.personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub</a>
            <a href={profileData.personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
          </div>
        </motion.section>

        <motion.section
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-white shadow-xl rounded-lg p-6 sm:p-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Object.entries(profileData.skills).slice(0, 6).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                className="bg-gray-100 rounded-lg p-4 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {skills.slice(0, 3).map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="bg-white shadow-xl rounded-lg p-6 sm:p-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Projects</h2>
          {profileData.projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * index }}
              className="mb-8 last:mb-0"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View Project →</a>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl rounded-lg p-6 sm:p-10 text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Professional Journey</h2>
          <div className="space-y-6">
            {profileData.workExperience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * index }}
                className="bg-white bg-opacity-10 rounded-lg p-4"
              >
                <h3 className="text-lg font-semibold">{job.title} at {job.company}</h3>
                <p className="text-sm opacity-90">{job.location} | {job.startDate} - {job.current ? 'Present' : job.endDate}</p>
                <ul className="list-disc list-inside mt-2 text-sm">
                  {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="bg-gradient-to-r from-green-400 to-blue-500 shadow-xl rounded-lg p-6 sm:p-10 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
          <p className="text-lg mb-6">I'm always excited about new opportunities, collaborations, or just a good tech chat. Feel free to reach out!</p>
          <div className="space-y-2">
            <p>✉️ {profileData.personalInfo.email}</p>
            <p>📱 {profileData.personalInfo.phone}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-blue-500 font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            Say Hello! 👋
          </motion.button>
        </motion.section>
      </main>

      <footer className="mt-16 text-center text-gray-600">
        <p>© 2024 {profileData.personalInfo.name}. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Blog;