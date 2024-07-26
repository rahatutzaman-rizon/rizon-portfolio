import React from 'react';
import { motion } from 'framer-motion';

const tagColors = {
  JavaScript: 'bg-yellow-500',
  MongoDB: 'bg-green-500',
  React: 'bg-blue-500',
  Docker: 'bg-purple-500',
  'Node.js': 'bg-red-500',
};

const TagBadge = ({ tag }) => (
  <motion.span
    whileHover={{ scale: 1.1 }}
    className={`${tagColors[tag]} text-white text-xs px-2 py-1 rounded-full mr-2`}
  >
    {tag}
  </motion.span>
);

export default TagBadge;