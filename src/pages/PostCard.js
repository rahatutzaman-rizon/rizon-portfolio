import React from 'react';
import { motion } from 'framer-motion';

const PostCard = ({ post }) => {
  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white m-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="font-bold text-xl mb-2">{post.title}</div>
      <p className="text-gray-700 text-base mb-4">{post.description}</p>
      <div className="text-gray-900 font-semibold">Author: {post.author}</div>
    </motion.div>
  );
};

export default PostCard;
