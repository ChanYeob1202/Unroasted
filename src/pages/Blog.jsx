import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      link: "/blog_page/coffee-bean-encyclopedia",
      src: "images/blog/coffee_bean.jpg",
      title: "Coffee Bean Encyclopedia",
      description: "Your essential guide to coffee beans: origins, varieties, and what makes each one special.",
      readTime: "5 min read",
      date: "April 15, 2024",
      type: "Culture"
    },
    // ... existing blog posts
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Hero */}
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif mb-4">Coffee Stories</h1>
          <p className="text-gray-600 text-lg">
            Exploring home brewing, local cafes, and coffee culture
          </p>
        </div>
      </div>

      {/* Minimal Search */}
      <div className="max-w-2xl mx-auto px-4 mb-16">
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search stories..."
            className="w-full pl-12 pr-4 py-3 border-b border-gray-200 focus:border-gray-900 focus:outline-none bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredPosts.map((post) => (
            <a 
              key={post.id} 
              href={post.link}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img 
                  src={post.src} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{post.type}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-serif group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
