import React, {useState} from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase/firebase';
import { useAuth } from '../../hooks/useAuth';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa6';

export default function CreatePost() {
  
    /*
        this page is only for users  
        title
        content
        submit button
        onsubmit => addDoc() to fireStore "posts" collection
    */
  const [ title, setTitle ] = useState("");
  const [content, setContent ] = useState("");
  const { currentUser } = useAuth();
  console.log(currentUser)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "community_posts"), {
        title: title,
        content: content,
        userName: currentUser.displayName,
        userId: currentUser.uid,
        createdAt:serverTimestamp(),
        updatedAt:serverTimestamp(),
        // future features
        likes: [],
        imgUrl: "",
        tags: [],
        userAvatar: "",
        commentCount: 0,
        viewCount: 0, 
      });
      console.log("Document added with title: ", docRef);

      // clear form
      setTitle("");
      setContent("");
    } catch (error){
      console.error("Error: ", error)
    }  }

    
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 md:px-8 lg:px-12 py-10">
      <div className="max-w-4xl mx-auto">
        {/* page title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-coffee text-center mb-3">
            Share Your Thought
          </h1>
          <p className="text-slate-600 text-center text-lg">
            Write something meaningful to share with the community
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit = {handleSubmit}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 backdrop-blur-sm"
        >
          {/* Title Input */}
          <div className="mb-8">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide"
            >
              Post Title
            </label>
            <input 
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full px-5 py-4 text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:border-coffee focus:ring-4 focus:ring-coffee/10 transition-all duration-200 bg-slate-50/50 hover:bg-white"
            />
            <p className="text-xs text-slate-400 mt-2 ml-1">
              {title.length}/100 characters
            </p>
          </div>

          {/* Content Textarea */}
          <div className="mb-8">
            <label
              htmlFor="content"
              className="block text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide"
            >
              Your Story
            </label>
            <textarea 
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts, experiences, or ideas with the community..."
              rows={14}
              className="w-full px-5 py-4 text-base border-2 border-slate-200 rounded-xl focus:outline-none focus:border-coffee focus:ring-4 focus:ring-coffee/10 transition-all duration-200 resize-y min-h-[300px] bg-slate-50/50 hover:bg-white leading-relaxed"
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-slate-400 ml-1">
                {content.length}/2000 characters
              </p>
              <p className="text-xs text-slate-400">
                {content.split(/\s+/).filter(word => word.length > 0).length} words
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4 border-t border-slate-100">
            <button
              type="button"
              className="px-8 py-3 text-slate-600 border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 font-medium hover:shadow-md"
            >
              Cancel
            </button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={!title.trim() || !content.trim()}
              className="group relative px-10 py-3.5 bg-gradient-to-r from-coffee to-amber-700 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-coffee/30 flex items-center gap-2"
            >
              <span>Publish Post</span>
              <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}
