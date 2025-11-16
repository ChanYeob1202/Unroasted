import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { FaRegCommentDots, FaPlus, FaArrowRight } from "react-icons/fa6";
import { useFetchFirestore } from '../../hooks/useFetchFirestore';
import { orderBy, limit } from 'firebase/firestore';

export default function Community() {
    const navigate = useNavigate();

    const { data: postsData } = useFetchFirestore(
        "community_posts",
        null,
        [orderBy("createdAt", "desc"), limit(20)]
    );
    const posts = postsData || [];

    const gridClasses = `
      grid
      grid-cols-[2fr_1fr_1fr_0.5fr]
      gap-x-6
      gap-y-4
      items-center
    `;
  
  return (
    <section className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 px-4 md:px-8 lg:px-12 py-10'>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-coffee mb-2">
                Community
              </h1>
              <p className="text-slate-600 text-lg">
                Share your thoughts and connect with others
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/create-post")}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coffee to-amber-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-coffee/30 transition-all duration-300"
            >
              <FaPlus className="w-4 h-4" />
              <span>Write a Post</span>
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Table Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${gridClasses} text-sm font-semibold text-slate-600 mt-8 mb-4 px-6 py-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm`}
        >
          <span className="text-coffee">Title</span>
          <span>Author</span>
          <span>Created</span>
          <span className="text-right">Comments</span>
        </motion.div>

        {/* Posts List */}
        <div className="space-y-3">
          {!posts || posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-2xl border border-slate-200"
            >
              <p className="text-slate-500 text-lg">No posts yet. Be the first to share!</p>
            </motion.div>
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`${gridClasses} rounded-xl px-6 py-4 bg-white border border-slate-200 hover:border-coffee/30 hover:shadow-lg transition-all duration-200 cursor-pointer group`}
                onClick={() => {
                  // navigate to clicked post
                  navigate(`/community/${post.id}`)
                }}
              >
                <span className="font-semibold text-slate-900 group-hover:text-coffee transition-colors duration-200 line-clamp-1">
                  {post.title}
                </span>
                <span className="text-slate-600 font-medium">{post.userName || "Anonymous"}</span>
                <span className="text-slate-500 text-sm">
                  {post.createdAt
                    ? new Intl.DateTimeFormat("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }).format(post.createdAt.toDate())
                    : "—"}
                </span>
                <div className="flex items-center justify-end gap-2 text-slate-600">
                  <FaRegCommentDots className="w-4 h-4" />
                  <span className="font-medium">{post.commentCount ?? 0}</span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}