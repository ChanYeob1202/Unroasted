import React, {useState, useEffect} from 'react'
import ArticleCard from '../components/cms/ArticleCard';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Blog() {
  const [ datas, setData ] = useState(null);
  
  const navigate = useNavigate();
  const openArticle = ( id ) => { 
    console.log('openArticle ->', id); 
    navigate(`/blog/${id}`); 
  };
  
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('http://localhost:1337/api/articles?populate[author][populate]=*&populate=cover');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result.data); 
      } catch(error){
        console.error('Error fetching articles:', error);
      }
    }
    fetchData();
  }, []);
  
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
            onClick={() => openArticle(data.id)}
          />
        ))}
      </div>
    </motion.div>
  )
}