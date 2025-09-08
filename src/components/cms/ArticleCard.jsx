import React from 'react'
import { useNavigate } from 'react-router-dom';
// ('http://localhost:1337/api/articles/v0e8lhlc3estujnhlve7y4bm?populate=*');
export default function ArticleCard({ data }) {
  // console.log(data.cover.documentId)

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("This specific article ID: ", data.id)
    navigate(`/blog/${data.id}`);
  }

  return (
    <div className="bg-white overflow-hidden w-80 flex-shrink-0 flex flex-col gap-20">
      {/* Article Header */}
      <div className="p-4">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span>Article</span>
          <span className="mx-2">•</span>
          <span>{new Date(data.publishedAt).toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
        <h2 className="font-bold text-lg mb-3 leading-tight">
          { data.title }
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          { data.description }
        </p>
      </div>

      {/* Article Footer */}
      <div className="p-4">
          <button
            id = {data.cover.documentId} 
            className="flex items-center space-x-1 text-xs text-gray-500 hover:cursor mb-5"
            onClick = {handleClick}
            >
              Read An Article →
          </button>
        
        {data?.cover?.url && (
          <img 
            src={`http://localhost:1337${data.cover.url}`}
            alt={data.title}
            className="w-full h-48 object-cover rounded"
          />
        )}
        {/* Add this fallback for debugging */}
        {!data?.cover?.url && (
          <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">No image</span>
          </div>
        )}
      </div>
    </div>
  )
}
