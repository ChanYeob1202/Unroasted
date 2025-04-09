import React from 'react';

export default function BlogCard({ post }) {
  return (
    <a 
      href={`/blog/${post.id}`}
      className="group"
    >
      <div className="aspect-[4/3] overflow-hidden mb-4">
        <img 
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
            {post.type}
          </span>
          <span>{new Date(post.date.toDate()).toLocaleDateString()}</span>
          <span>• {post.readTime}</span>
        </div>
        <h2 className="text-xl font-serif group-hover:text-gray-600 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 line-clamp-2">
          {post.description}
        </p>
      </div>
    </a>
  );
}
