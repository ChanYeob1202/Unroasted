import React from 'react'
import { motion } from 'framer-motion'
import { marked } from 'marked'
import { useFetchApi } from '../../hooks/useFetchApi'


marked.setOptions({
  breaks: true,
  gfm: true,
})

export default function ArticleFormat({ id }) { // 'id' is now actually a slug
    const { data: article, loading, error: fetchError } = useFetchApi(
      id ? `${process.env.REACT_APP_STRAPI_URL}/api/articles?filters[slug][$eq]=${id}&populate=*` : null,
      {},
        [id],
        (data) => {
            // When filtering, Strapi returns an array
            if (data.data && data.data.length > 0) {
                return data.data[0]; // Get first (and only) result
            }
            // Return null if not found, let the hook handle the error
            return null;
        }
    );

    // Check if article was not found
    const error = fetchError || (article === null && !loading ? 'Article not found' : null);

      // Handle both flat and nested structures
      const a = article?.attributes ?? article ?? {};

  return (
    <div className = "min-h-screen bg-white">
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md mx-auto p-6">
            <p className="text-red-600 font-medium">Unable to load article</p>
            <p className="text-sm text-gray-500 mt-2">{error}</p>
          </div>
        </div>
      )}
      
      {article && (
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <img 
              src={(() => {
                const url = a.cover?.url ?? a.cover?.data?.attributes?.url;
                if (!url) return undefined;
                return url.startsWith('http') ? url : `${process.env.REACT_APP_STRAPI_URL}${url}`;
              })()}
              alt={a.title || "Article cover"}
              className="w-full max-w-2xl max-h-80 mx-auto mb-12 rounded-lg object-cover"
            />

            {/* Article Title */}
          </motion.div>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
              {a.title}
            </h1>
          </div>

          {/* Article Subtitle */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-900 font-light max-w-2xl mx-auto leading-relaxed">
              {a.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500">
            {new Date(a.publishedAt || a.createdAt).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })} — Los Angeles, CA
            </p>
          </div>
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-justify
            prose-headings:font-serif prose-headings:text-gray-900 
            prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:text-center
            prose-h2:text-2xl prose-h2:font-serif prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-left
            prose-p:text-gray-900 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-justify
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-em:text-gray-700 prose-em:font-light
            prose-ul:text-gray-900 prose-li:mb-2
            prose-blockquote:border-l-gray-300 prose-blockquote:text-gray-700
            prose-blockquote:font-light">
            {a.blocks?.map((block, index) => (
              <div 
                key={index}
                dangerouslySetInnerHTML={{ __html: marked(block.body || '') }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}