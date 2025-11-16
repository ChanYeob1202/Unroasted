import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, updateDoc, increment } from 'firebase/firestore'
import { db } from '../../../lib/firebase/firebase'
import { FaRegCommentDots, FaHeart, FaEye, FaBookmark, FaShare } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useFetchFirestore } from '../../../hooks/useFetchFirestore'

export default function CommunityPostDetail() {
  const { postId } = useParams();
  
  const { data: post, loading } = useFetchFirestore(
    "community_posts",
    postId,
    [],
    [postId]
  );

  // track view count
  useEffect(() => {
    const incrementViewCount = async () => {
      if (!postId) return;
      
      try {
        const postRef = doc(db, "community_posts", postId);
        await updateDoc(postRef, {
          viewCount: increment(1)
        });
      } catch (error) {
        console.error("Error incrementing view count:", error);
      }
    }
    if (post) {
      incrementViewCount();
    }
  }, [postId, post])

  const formatDate = (timestamp) => {
    if (!timestamp) return "—"
    const date = timestamp.toDate()
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return "Yesterday"
    if (diffDays < 7) return `${diffDays} days ago`
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-coffee border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 text-lg">Post Not Found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8"
        >
          {/* Author and Date Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coffee to-amber-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {(post.userName || "A")[0].toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">{post.userName || "Anonymous"}</p>
                <p className="text-sm text-slate-500">{formatDate(post.createdAt)}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <FaBookmark className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Title/Headline */}
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Content Body */}
          <div className="text-slate-700 leading-relaxed space-y-4 mb-6">
            {post.content?.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-base md:text-lg">
                  {paragraph}
                </p>
              )
            ))}
          </div>

          {/* Engagement Metrics */}
          <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2 text-slate-600">
              <FaHeart className="w-5 h-5" />
              <span className="font-medium">{post.likeCount ?? 0}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <FaRegCommentDots className="w-5 h-5" />
              <span className="font-medium">{post.commentCount ?? 0}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FaEye className="w-4 h-4" />
              <span>{post.viewCount ?? 0}</span>
            </div>
            <div className="flex-1"></div>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <FaShare className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </motion.article>
      </div>
    </div>
  )
}