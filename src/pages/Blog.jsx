import React, {useState, useEffect} from 'react'
import ArticleCard from '../components/cms/ArticleCard';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Blog() {
  const [ datas, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        setLoading(true);
        // Fetch all articles from Strapi API
        const response = await fetch('http://localhost:1337/api/articles?populate[author][populate]=*&populate=cover');
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Response text:', errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data); 
        // console.log("Full result.data:", result.data);
        setError(null);
      } catch(error){
        setError(error.message);
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  
  return (  
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-5 min-h-screen flex flex-row gap-8 lg:gap-24 pl-0 lg:pl-0 pr-4 lg:pr-0"
    >

      <div className="w-20 sm:w-32 lg:w-40 h-20 flex items-center justify-start lg:justify-start lg:px-4 flex-shrink-0">
        <div className="text-left">          
          <h1 className="text-sm sm:text-lg lg:text-2xl font-bold">Coffee</h1>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Thoughts</h1>
        </div>
      </div>
      { datas?.map((data) => (
        <ArticleCard key={data.id} data={data} />
      ))}
    
    </motion.div>
  )
}

