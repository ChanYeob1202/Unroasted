import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { FaRegCommentDots } from "react-icons/fa6";
{/* <FaRegCommentDots /> */}



export default function BulletinBoard() {
  /* 
    1. Title
    2. Number of Comments
    3. Last update date 
  */
  const articles = [
    {
      id: 0,
      title:"Great articles!",
      author: "archlord3",
      comments: 3,
      date: "2024-06-10"
    },
    {
      id:1,
      title: "이렇게 해보면 어떨까요",
      author: "Jamie",
      comments: 0,
      date: "2024-06-09"
    },
  ]

  return (
    <div className='min-h-screen bg-white'>
      {/* title */}
      <motion.div 
        initial = {{ opacity: 0, y: 20 }}
        animate = {{ opacity: 1, y:0 }}
        transition = {{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-serif text-2xl font-semibold text-center mt-8">Share Your Thoughts</h1>
      </motion.div>

      {/* lists */}
      <div className='mt-20 max-w-3xl mx-auto'>
        <div className="grid grid-cols-12 gap-4 px-4 py-2 border-b font-semibold text-gray-500 text-xs uppercase">
          <div className="col-span-7">Title</div>
          <div className="col-span-2 text-center">Author</div>
          <div className="col-span-2 text-center">Date</div>
          <div className="col-span-1 text-center"><FaRegCommentDots /></div>
        </div>
        {articles.map((article) => (
          <Link
            key={ article.id }
            to={`/board/${article.id}`}  
            className='grid grid-cols-12 gap-4 px-4 py-4 border-b items-center hover:bg-gray-50 transition'
          >
            <div className="col-span-7 truncate font-medium text-gray-900">{ article.title }</div>
            <div className="col-span-2 text-center text-gray-700">{ article.author }</div>
            <div className="col-span-2 text-center text-gray-400 text-xs">{ article.date }</div>
            <div className="col-span-1 text-center flex justify-center items-center">
              <FaRegCommentDots className="inline mr-1" />
              <span className="text-xs">{ article.comments }</span>
            </div>
          </Link>

          /* write a post  */


        ))}
      </div>
    </div>
  )
}
