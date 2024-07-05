import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);

  const profileData = {
    "personalInfo": {
      "name": "Rahatutzaman Rizon",
      "title ": "Full Stack Developer || Software Developer",
      "email": "rizonrahat199@gmail.com",
      "phone": "+880 1771276400 (WhatsApp)",
      "location": { "city": "Tangail, Dhaka", "country": "Bangladesh" },
      "summary": "As a software developer seeking an entry-level role, with a focus on applying problem-solving skills to create efficient and innovative solutions. Dedicated to contributing technical expertise in a collaborative environment.",
      "links": {
        "linkedin": "https://www.linkedin.com/in/rahatutzamanrizon",
        "github": "https://github.com/rizon",
        "portfolio": "https://rizon-portfolio.com"
      }
    },
    "skills": {
      "languages": ["C++", "JavaScript", "Python"],
      "frontEnd": ["HTML", "CSS", "React", "Tailwind", "Next.js", "Redux"],
      "backEnd": ["Node.js", "Express", "JWT"],
      "databases": ["MySQL", "MongoDB"],
      "tools": ["GitHub", "VS Code", "Netlify", "Figma", "Vercel", "Postman"]
    },
    
    "workExperience": [
      {
        "title": "Project Associate",
        "company": "Farhana's BrainStation",
        "location": "Bangladesh",
        "startDate": "2024-05",
        "endDate": null,
        "current": true,
        "responsibilities": [
          "Handle projects from start to finish, delivering quality results on time.",
          "Work with cross-functional teams, organize tasks, and enable communication.",
          "Use project management tools, track progress, and follow best practices.",
          "Study project needs, make plans, and give updates to stakeholders."
        ]
      },
      {
        "title": "Intern Software Developer",
        "company": "Business Automation Ltd",
        "location": "Bangladesh",
        "startDate": "2024-02",
        "endDate": "2024-04",
        "current": false,
        "responsibilities": [
          "Complete a 3-month internship focused on streamlining operations.",
          "Develop skills in SQL, frameworks, testing, and SDLC methodologies.",
          "Contribute to team projects, aligning with company goals.",
          "Apply knowledge to real-world projects."
        ]
      }
    ],
    "education": {
      "degree": "B.Sc. in Information and Communication Technology",
      "institution": "Mawlana Bhashani Science and Technology University",
      "period": "2019-2023",
      "gpa": 3.46
    },
    "problemSolving": {
      "platforms": ["CodeChef", "Beecrowd", "LeetCode", "GitHub"]
    }
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
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-6 flex justify-center space-x-4"
        >
          <a href={profileData.personalInfo.links.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Portfolio</a> |
          <a href={profileData.personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub</a> |
          <a href={profileData.personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
        </motion.div>
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
          <div className="mt-6 space-y-2">
            <p>✉️ {profileData.personalInfo.email}</p>
            <p>📞 {profileData.personalInfo.phone}</p>
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
            {Object.entries(profileData.skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                className="bg-gray-100 rounded-lg p-4 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {skills.slice(0, 4).map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
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
          className="space-y-8"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-green-400 to-blue-500 shadow-xl rounded-lg p-6 sm:p-10 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <h3 className="text-xl font-semibold">{profileData.education.degree}</h3>
            <p>{profileData.education.institution}</p>
            <p>{profileData.education.period} | GPA: {profileData.education.gpa}</p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0,opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl rounded-lg p-6 sm:p-10 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Problem Solving</h2>
            <p className="text-lg mb-6">I love solving coding challenges to sharpen my skills. Find me on these platforms:</p>
            <div className="flex justify-center space-x-4">
              {profileData.problemSolving.platforms.map(platform => (
                <motion.a
                  key={platform}
                  href={`https://www.${platform.toLowerCase()}.com/rizon`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white text-purple-500 font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 shadow-xl rounded-lg p-6 sm:p-10 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
          <p className="text-lg mb-6">I'm always excited about new opportunities, collaborations, or just a good tech chat. Feel free to reach out!</p>
          <motion.a
            href={`mailto:${profileData.personalInfo.email}`}
            whileHover={{ scale: 1.05, rotate: [0, -10, 10, -10, 10, 0] }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white text-orange-500 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 text-lg"
          >
            Say Hello! 👋
          </motion.a>
        </motion.section>
      </main>

      <footer className="mt-16 text-center text-gray-600">
        <p>© 2024 {profileData.personalInfo.name}. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Blog;