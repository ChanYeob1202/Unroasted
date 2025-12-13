import React from 'react'
import ArticleCard from '../components/cms/ArticleCard';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFetchApi } from '../hooks/useFetchApi';

export default function Blog() {
  const navigate = useNavigate();

  // Change parameter name to slug
  const openArticle = (slug) => { 
    console.log('Opening article with slug:', slug);
    navigate(`/blog/${slug}`); // Use slug in URL
  };
  
  const { data: datas } = useFetchApi(
    `${process.env.REACT_APP_STRAPI_URL}/api/articles?populate[author][populate]=*&populate=cover`,
    {},
    [],
    (result) => {
      console.log('Full API response:', result);
      return result.data;
    }
  );
  
  return (  
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-12 px-6 max-w-7xl mx-auto"
    >
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-coffee mb-4">
          Coffee Thoughts
        </h1>
        <div className="w-24 h-1 bg-amber-600"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {datas?.map((data) => (
          <ArticleCard 
            key={data.id} 
            data={data} 
            onClick={(slug) => openArticle(slug)} // Pass slug
          />
        ))}
      </div>
    </motion.div>
  )
}