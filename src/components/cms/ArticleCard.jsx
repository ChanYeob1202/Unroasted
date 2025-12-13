import React from 'react'

export default function ArticleCard({ data, onClick }) {
  // Get article slug (we're using slug instead of ID now)
  const articleSlug = data.slug || data.attributes?.slug;
  
  // Get article data - handle both flat and nested structures
  const a = data.attributes ?? data;
  
  // Get cover URL - handle different possible structures
  const coverUrl = a.cover?.url 
    ?? a.cover?.data?.attributes?.url 
    ?? a.cover?.data?.url;

  // Get date - fix the syntax error by grouping properly
  const articleDate = a.publishedAt || data.publishedAt || (a.createdAt ?? data.createdAt);

  return (
    <div className="bg-white overflow-hidden w-80 flex-shrink-0 flex flex-col gap-20">
      {/* Article Header */}
      <div className="p-4">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span>Article</span>
          <span className="mx-2">•</span>
          <span>{new Date(articleDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
        </div>
        <h2 className="font-bold text-lg mb-3 leading-tight">{a.title || data.title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{a.description || data.description}</p>
      </div>

      {/* Article Footer */}
      <div className="p-4">
        <button
          className="flex items-center text-xs text-gray-500 mb-5"
          onClick={() => {
            console.log('Button clicked - Passing slug:', articleSlug);
            onClick(articleSlug);
          }}
        >
          Read An Article →
        </button>
        
        {coverUrl ? 
          <img 
            src={`${process.env.REACT_APP_STRAPI_URL}${coverUrl}`} 
            alt={a.title || data.title || 'Article cover'} 
            className="w-full h-48 object-cover rounded" 
          /> 
          : 
          <div className="w-full h-48 bg-gray-200 rounded" />
        }
      </div>
    </div>
  )
}