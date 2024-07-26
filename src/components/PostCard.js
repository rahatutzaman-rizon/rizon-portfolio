import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import TagBadge from './TagBadge';

const PostCard = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.03 }}
    className="bg-navy-700 rounded-lg overflow-hidden shadow-lg m-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-navy-600"
  >
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex flex-wrap mb-4">
        {post.tags.map((tag, index) => (
          <TagBadge key={index} tag={tag} />
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 text-white">{post.title}</h2>
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <div className="flex items-center text-gray-400 text-sm mb-4">
        <FiCalendar className="mr-2" />
        <span>{post.date}</span>
        <FiUser className="ml-4 mr-2" />
        <span>{post.author}</span>
        <FiClock className="ml-4 mr-2" />
        <span>{post.readTime} min read</span>
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Read More
      </motion.button>
    </div>
  </motion.div>
);

export default PostCard;