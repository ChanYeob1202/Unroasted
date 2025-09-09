import React from 'react'

export default function ArticleCard({ data, onClick }) {
  const a = data.attributes ?? data;
  console.log(a.id);
  const coverUrl = a.cover?.url ?? a.cover?.data?.attributes?.url;

  return (
    <div className="bg-white overflow-hidden w-80 flex-shrink-0 flex flex-col gap-20">

      {/* Article Header */}
      <div className="p-4">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span>Article</span>
          <span className="mx-2">•</span>
          <span>{new Date(a.publishedAt ?? a.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
        </div>
        <h2 className="font-bold text-lg mb-3 leading-tight">{a.title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{a.description}</p>
      </div>

      {/* Article Footer */}
      <div className="p-4">
          <button
            className="flex items-center text-xs text-gray-500 mb-5"
            onClick = {onClick}
            >
              Read An Article →
          </button>
        
        {coverUrl ? <img src={`http://localhost:1337${coverUrl}`} alt={a.title} className="w-full h-48 object-cover rounded" /> : <div className="w-full h-48 bg-gray-200 rounded" />}
      </div>
    </div>
  )
}
