import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaLaptopCode, FaPuzzlePiece, FaRocket } from 'react-icons/fa';

const AboutSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'journey',
      title: 'My Journey',
      icon: <FaRocket className="text-4xl text-blue-500" />,
      content: (
        <>
          <p className="mb-4">My journey into the world of coding began with a fascination for problem-solving. As a student at Mawlana Bhashani Science and Technology University, I dove into the realms of C++ and Python, laying a strong foundation.</p>
          <p>Soon, the allure of web development called. I embarked on a self-driven quest, mastering React, Node.js, and databases. Each project, from 'Pet Adoption Corner' to 'Boi-Bazar', has been a stepping stone, refining my skills and fueling my passion.</p>
        </>
      ),
    },
    {
      id: 'skills',
      title: 'Tech Arsenal',
      icon: <FaLaptopCode className="text-4xl text-green-500" />,
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <FaReact className="text-3xl text-blue-400" />
            <span>React & Redux</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaNode className="text-3xl text-green-600" />
            <span>Node.js & Express</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaDatabase className="text-3xl text-yellow-500" />
            <span>MongoDB & MySQL</span>
          </div>
          <div className="flex items-center space-x-2">
            <motion.img src="tailwind-icon.svg" alt="Tailwind" className="w-6 h-6" whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }} />
            <span>Tailwind CSS</span>
          </div>
        </div>
      ),
    },
    {
      id: 'problemSolving',
      title: 'Problem Solver',
      icon: <FaPuzzlePiece className="text-4xl text-purple-500" />,
      content: (
        <>
          <p className="mb-4">Coding isn't just my profession; it's my playground for problem-solving. With every challenge on platforms like LeetCode and CodeChef, I'm not just writing code—I'm crafting solutions, one algorithm at a time.</p>
          <div className="flex justify-around">
            {['CodeChef', 'LeetCode', 'Beecrowd'].map(platform => (
              <motion.div
                key={platform}
                className="text-center"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img src={`${platform.toLowerCase()}-icon.svg`} alt={platform} className="w-10 h-10 mx-auto mb-2" />
                <span className="text-sm">{platform}</span>
              </motion.div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: 'passion',
      title: 'Beyond Code',
      icon: <span className="text-4xl text-red-500">🌟</span>,
      content: (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="mb-4">While code is my medium, innovation is my message. I believe in technology's power to transform lives. My projects, like the 'Pet Adoption Corner' and 'Student Project Progress Management System', reflect this ethos—each one a step towards positive change.</p>
          <p>When not coding, you'll find me exploring new tech trends, contributing to open-source, or mentoring budding developers. I'm not just building software; I'm crafting a future where technology empowers and unites.</p>
        </motion.div>
      ),
    },
    {
      id: 'additionalInfo',
      title: 'Additional Information',
      icon: <FaDatabase className="text-4xl text-yellow-500" />,
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Rahatutzaman Rizon</h2>
          <p className="mb-2">Full Stack Developer || Software Developer</p>
          <p className="mb-2">Portfolio | Github | Linkedin</p>
          <p className="mb-2">Email: rizonrahat199@gmail.com</p>
          <p className="mb-2">Contact: +8801771276400 (Whatsapp)</p>
          <p className="mb-2">Tangail, Dhaka</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Career Objective</h3>
          <p className="mb-4">As a software developer seeking an entry-level role, with a focus on applying problem-solving skills to create efficient and innovative solutions. Dedicated to contributing technical expertise in a collaborative environment.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Skills</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Languages: C++, Javascript, Python</li>
            <li>Front-End: Html, Css, Javascript, React, Tailwind, Firebase, Next.js, Redux</li>
            <li>Back-End: Node.js, Express, JWT, GraphQL</li>
            <li>Database: MySQL, MongoDB</li>
            <li>Tools: Git, VSCode, Netlify, Figma, Vercel, Postman</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">Project Experience</h3>
          <h4 className="text-lg font-semibold mt-2 mb-1">1. Pet Adoption Corner</h4>
          <p className="mb-2">Designed and implemented a streamlined pet adoption platform with a pet food shop.</p>
          <p className="mb-2">Features:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Adoption Requests: Users can adopt a pet and remove it from the pet listing.</li>
            <li>Fundraising Campaigns: Implemented a campaign creation feature for use fund collection.</li>
            <li>Donation Management: Users can view, remove, donate, and request refunds for their contributions.</li>
          </ul>
          <p className="mb-4">Technology: React JS Library, Tailwind, Flowbite-React, Firebase, MongoDB, Node.js</p>
          <h4 className="text-lg font-semibold mt-2 mb-1">2. Boi-Bazar</h4>
          <p className="mb-2">Creating a secure library system for an efficient book management system.</p>
          <p className="mb-2">Features:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Categorized Book Selection: Allow students to browse books by categories or genres.</li>
            <li>Comprehensive Database: Maintain a well-organized database to store information about all books.</li>
            <li>Secure Routing: Implement private routes to ensure secure access, utilizing Firebase for enhanced security in the system.</li>
          </ul>
          <p className="mb-4">Technology: React JS Library, Tailwind, DaisyUI, Firebase, MongoDB, Node.js</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">University Project</h3>
          <h4 className="text-lg font-semibold mt-2 mb-1">Student Project Progress Management System</h4>
          <p className="mb-2">An integrated system for managing student projects, including task assignment, progress tracking, feedback loop, and communication features for teachers and students.</p>
          <p className="mb-2">Features:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Task Management: Teachers assign projects with deadlines. Students submit work, tracking progress and deadlines.</li>
            <li>Feedback Loop: Teachers grade submissions and provide feedback. Students receive notifications and can discuss projects.</li>
            <li>Communication Hub: Integrated discussion forum for collaboration. Notifications keep users informed about deadlines and updates.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">Working Experience</h3>
          <h4 className="text-lg font-semibold mt-2 mb-1">Business Automation Ltd - Intern as a Software Developer</h4>
          <p className="mb-4">(January 2024 - April 2024)</p>
          <p className="mb-2">Will complete a 3-month internship focused on streamlining operations and workflows through technology implementation.</p>
          <p className="mb-4">Develop software skills in project management, SQL, framework, testing, and SDLC methodologies. Contribute to team projects, aligning with company goals. Demonstrate commitment to professional growth and apply knowledge to real-world projects.</p>
          <h4 className="text-lg font-semibold mt-2 mb-1">Digital Menu</h4>
          <p className="mb-4">A restaurant website developed for a client, showcasing menu items and facilitating online ordering. View Site</p>
          <h4 className="text-lg font-semibold mt-2 mb-1">Farhana's BrainStation - Project Associate</h4>
          <p className="mb-4">(May 2024 - Present)</p>
          <p className="mb-2">Worked with teams across different functions, organized tasks, and enabled communication. Used project management tools, tracked progress, addressed risks, and followed best practices. Studied project needs, made plans, assigned resources, and gave updates to stakeholders.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Problem Solving</h3>
          <p className="mb-2">CodeChef | Beecrowd | LeetCode | Github</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Education</h3>
          <p className="mb-2">B.Sc. in Information and Communication Technology (2019-2024)</p>
          <p className="mb-4">Mawlana Bhashani Science and Technology University</p>
          <p className="mb-2">CGPA: 3.46</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Language</h3>
          <p className="mb-4">English - comfortable</p>
        </>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section 
      className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        About Rahatutzaman Rizon
      </motion.h1>
      <motion.p 
        className="text-center mb-12 text-lg max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Passionate Full Stack Developer skilled in building impactful web applications using React, Node.js, and MongoDB. Dedicated to crafting solutions that drive innovation and improve lives.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map(section => (
          <motion.div
            key={section.id}
            className={`bg-gray-800 rounded-lg p-6 shadow-lg cursor-pointer ${activeSection === section.id ? 'ring-4 ring-blue-500' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap="tap"
          >
            <div className="flex items-center justify-center mb-4">
              {section.icon}
            </div>
            <h2 className="text-xl font-semibold text-center">{section.title}</h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeSection && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-12 bg-gray-800 rounded-lg p-6 shadow-xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              {sections.find(s => s.id === activeSection).title}
            </h3>
            {sections.find(s => s.id === activeSection).content}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-lg mb-6">Intrigued by my journey? Let's write the next chapter together.</p>
        <motion.a
          href="mailto:rizonrahat199@gmail.com"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgb(105, 48, 195)" }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
