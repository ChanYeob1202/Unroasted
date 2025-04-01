import React, { useState } from 'react';
import blogPosts from '../data/blogPosts';
import { FiSearch } from 'react-icons/fi';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');


  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Hero */}
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif mb-4">Coffee Thoughts</h1>
          <p className="text-gray-600 text-lg">
            Sharing perspectives on coffee culture, brewing experiences, and café life
          </p>
          <p className="text-gray-500 text-base mt-2 italic">
            Personal insights on what makes coffee special in our daily lives
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
