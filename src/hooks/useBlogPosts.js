import { useState, useEffect } from 'react';
import blogPosts from '../data/blogPosts';

const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      setPosts(blogPosts);
      setLoading(false);
    }, 1000);
  }, []);

  return { posts, loading };
};

export default useBlogPosts;