import React from 'react'
import { FiSearch } from 'react-icons/fi';

export default function BlogSearch({ searchQuery, setSearchQuery }) {
  return (
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
  )
}
