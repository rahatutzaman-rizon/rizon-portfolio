import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';


const BlogCard= () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://portfolio-server-mu-nine.vercel.app/blog')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">DevInsights Blog Posts</h1>
      <div className="flex flex-wrap justify-center">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
