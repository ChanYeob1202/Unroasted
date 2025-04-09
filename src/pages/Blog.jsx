import React, { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import BlogHero from '../components/blog/BlogHero';
import BlogSearch from '../components/blog/BlogSearch';
import BlogGrid from '../components/blog/BlogGrid';
import BlogFilter from '../components/blog/BlogFilter';

export default function Blog() {
  const { data: posts, loading, error } = useFetchData('posts');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* Blog Categories filter */}
      <BlogFilter posts={posts} />
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <BlogGrid posts={filteredPosts} loading={loading} />
      </div>
    </div>
  );
}
