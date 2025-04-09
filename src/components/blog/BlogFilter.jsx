import React from 'react'
import { useFetchData } from '../../hooks/useFetchData';
import { db } from '../../lib/firebase/firebase'
import { doc, updateDoc } from 'firebase/firestore'

export default function BlogFilter({posts, onCategorySelect}) {
  const { data: categories, loading, error } = useFetchData('blog_categories');

  const handleCategoryButton = async (category) => {
    try {
      // Update clicked category
      const categoryRef = doc(db, "blog_categories", category.id);
      await updateDoc(categoryRef, {
        isActive: true
      });
      
      // Call the callback to filter posts
      onCategorySelect(category.primaryCategory);
      
    } catch (error) {
      console.error("Error in category update:", error);
    }
  };

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error}</div>;
  }

  return (
    <div className='container flex flex-col items-center my-20'>
      {/* Minimal, elegant title */}
      <div className='text-lg  text-gray-800 font-light tracking-wide mb-4'>
        Categories
      </div>

      <div className='max-w-2xl w-full'>
        <div className="flex flex-wrap justify-center gap-8">
          {categories?.map((category) => (
            <button 
              key={category.id}
              onClick={() => handleCategoryButton(category)}
              className={`
                px-8 py-3
                rounded-lg
                ${category.isActive ? 'bg-coffee text-white' : 'bg-coffee/10'}
                border-b-2 border-transparent
                hover:border-coffee
                text-gray-600 hover:text-coffee
                font-light text-lg
                transition-all duration-300
                tracking-wider
              `}
            >
              {category.primaryCategory}
            </button>
          ))}
        </div>
      </div>
    </div>
    
  )
}
