// src/App.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaTimes, FaCalendar, FaUser, FaClock, FaSearch, FaTags } from 'react-icons/fa';
import NavBar from '../components/NavBar';

const blogPosts = [
  {
    title: "Mastering JavaScript Asynchronous Programming",
    description: "Dive deep into the world of JavaScript asynchronous programming and learn how to write efficient, non-blocking code.",
    fullContent: "JavaScript asynchronous programming is a cornerstone of modern web development, enabling responsive and efficient applications. This comprehensive guide covers everything from basic concepts to advanced techniques, ensuring you have a solid grasp of asynchronous JavaScript.",
    date: "July 26, 2024",
    author: "Rizon",
    readTime: "15 min read",
    additionalContent: "Asynchronous programming in JavaScript has evolved significantly over the years. We'll start by examining callbacks, the traditional approach to handling asynchronous operations. Then, we'll explore Promises, which provide a more structured way to deal with asynchronous code. Finally, we'll delve into the async/await syntax, which offers a synchronous-looking way to write asynchronous code.\n\nTopics covered:\n1. Understanding synchronous vs. asynchronous code\n2. Callback functions and callback hell\n3. Promises and the Promise chain\n4. Async/await syntax and error handling\n5. Best practices for writing clean, maintainable asynchronous code\n6. Real-world examples and common pitfalls to avoid",
    tags: ["JavaScript", "Async", "Promises", "Web Development", "ES6+"],
    category: "Programming"
  },
  {
    title: "Docker Demystified: From Novice to DevOps Pro",
    description: "Embark on a journey to master Docker, the tool that's revolutionizing software deployment and development workflows.",
    fullContent: "Docker has transformed the landscape of software development and deployment. This guide will take you from Docker novice to proficient user, covering everything from basic concepts to advanced deployment strategies.",
    date: "July 25, 2024",
    author: "Rizon",
    readTime: "20 min read",
    additionalContent: "Docker's containerization technology offers a solution to one of the most persistent problems in software development: 'It works on my machine.' By packaging applications with their dependencies, Docker ensures consistency across different environments, from development to production.\n\nIn this comprehensive guide, we'll cover:\n1. Docker basics: containers, images, and Dockerfiles\n2. Building and managing Docker images\n3. Docker Compose for multi-container applications\n4. Docker networking and storage\n5. Docker security best practices\n6. Orchestration with Docker Swarm and introduction to Kubernetes\n7. CI/CD pipelines with Docker\n8. Docker in production: monitoring, logging, and scaling",
    tags: ["Docker", "Containerization", "DevOps", "Deployment", "Microservices"],
    category: "DevOps"
  },
  {
    title: "MongoDB Mastery: Building Scalable NoSQL Databases",
    description: "Unlock the full potential of MongoDB and learn how to design, optimize, and manage high-performance NoSQL databases.",
    fullContent: "MongoDB has emerged as a leading NoSQL database, offering flexibility and scalability for modern applications. This in-depth guide will take you through the essentials of MongoDB, from basic CRUD operations to advanced data modeling and performance tuning.",
    date: "July 24, 2024",
    author: "Rizon",
    readTime: "18 min read",
    additionalContent: "MongoDB's document-based model provides a flexible alternative to traditional relational databases, making it an excellent choice for applications with evolving data requirements. In this comprehensive exploration of MongoDB, we'll cover:\n\n1. MongoDB architecture and core concepts\n2. CRUD operations and query optimization\n3. Indexing strategies for improved performance\n4. Data modeling best practices in MongoDB\n5. Aggregation framework for complex data analysis\n6. Replication and sharding for high availability and horizontal scaling\n7. Transactions in MongoDB\n8. Security and access control\n9. MongoDB Atlas: Cloud-hosted MongoDB\n10. Performance monitoring and optimization techniques",
    tags: ["MongoDB", "Database", "NoSQL", "Backend", "Data Modeling"],
    category: "Databases"
  },
  {
    title: "The Complete Guide to HTTP Status Codes",
    description: "Master the language of web communication with this comprehensive exploration of HTTP status codes and their implications for web development.",
    fullContent: "HTTP status codes are the silent communicators of the web, providing crucial information about the outcome of HTTP requests. This guide offers a deep dive into the world of status codes, their meanings, and how to handle them effectively in your web applications.",
    date: "July 23, 2024",
    author: "Rizon",
    readTime: "12 min read",
    additionalContent: "HTTP status codes are grouped into five classes, each serving a specific purpose in web communication. Understanding these codes is crucial for both frontend and backend developers to create robust, user-friendly web applications.\n\nIn this guide, we'll explore:\n1. The five classes of HTTP status codes\n2. Detailed explanations of common status codes (200, 301, 404, 500, etc.)\n3. Less common but important status codes\n4. How to handle different status codes in frontend applications\n5. Server-side status code management\n6. Custom status codes and when to use them\n7. Status codes in RESTful API design\n8. Debugging techniques using status codes\n9. Best practices for status code usage in modern web development",
    tags: ["HTTP", "Networking", "Web Development", "API", "Debugging"],
    category: "Web Technologies"
  }
];

const BlogCard = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenModal = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">

      <header className="bg-black bg-opacity-50 py-8 px-4 shadow-lg">

        <div className="container mx-auto">
       
        
          <h1 className="text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-24">Rizon's Tech Universe</h1>
          <p className="text-xl text-center text-gray-300">Exploring the Frontiers of Web Development, DevOps, and Data Management</p>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                className="w-full py-3 px-4 pr-10 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleOpenModal(post)}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-300">{post.title}</h2>
              <p className="text-lg mb-4 text-gray-300">{post.description}</p>
              <div className="flex justify-between items-center text-gray-400 mb-4">
                <div className="flex items-center">
                  <FaCalendar className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400 mb-4">
                <FaUser className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center">
                <FaTags className="text-blue-400 mr-2" />
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-600 bg-opacity-50 text-xs px-2 py-1 rounded-full mr-2 mb-2">{tag}</span>
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-purple-400">{post.category}</span>
                <FaArrowRight className="text-blue-400 text-2xl" />
              </div>
            </motion.article>
          ))}
        </motion.section>
      </main>

      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-blue-900 p-8 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 transition-colors">
              <FaTimes />
            </button>
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{selectedPost.title}</h2>
            <div className="flex flex-wrap justify-between items-center text-gray-400 mb-4">
              <div className="flex items-center mr-4 mb-2">
                <FaCalendar className="mr-2" />
                <span>{selectedPost.date}</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <FaClock className="mr-2" />
                <span>{selectedPost.readTime}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaUser className="mr-2" />
                <span>{selectedPost.author}</span>
              </div>
            </div>
            <p className="text-lg mb-6 text-gray-300">{selectedPost.description}</p>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">Article Content:</h3>
              <p className="text-base text-gray-300">{selectedPost.fullContent}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">In-Depth Analysis:</h3>
              <p className="text-base text-gray-300 whitespace-pre-line">{selectedPost.additionalContent}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Related Topics:</h3>
              <div className="flex flex-wrap">
                {selectedPost.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-600 bg-opacity-50 text-sm px-3 py-1 rounded-full mr-2 mb-2">{tag}</span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <span className="text-purple-400 font-semibold">Category: {selectedPost.category}</span>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;