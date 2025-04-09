import React from 'react';
import BlogCard from './BlogCard';

export default function BlogGrid({ posts, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-coffee-dark">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
