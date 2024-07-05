import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCalendar, FaComments, FaArrowRight } from 'react-icons/fa';

const PostCard = ({ post }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={post.image} alt={post.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">{post.category}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{post.title}</a>
          <p className="mt-2 text-gray-500">{post.description}</p>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-sm text-gray-500">
              <FaUser className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="ml-4 flex items-center text-sm text-gray-500">
              <FaCalendar className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="ml-4 flex items-center text-sm text-gray-500">
              <FaComments className="mr-2" />
              <span>{post.comments} comments</span>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <a href="#" className="text-indigo-500 hover:text-indigo-600 inline-flex items-center">
              Read More
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;