import React, {useState, useEffect} from 'react'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { FaRegCommentDots } from "react-icons/fa6";
import { db } from '../../lib/firebase/firebase';

export default function Community() {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const postRef = collection(db, "community_posts");
          const q = query(postRef, orderBy("createdAt", "desc"), limit(20));
          const querySnapshot = await getDocs(q);
          const community_posts = querySnapshot.docs.map(doc => ({
            id:doc.id,
            ...doc.data(),
          }))
          setPosts(community_posts);

        } catch (error){
          console.error("Error fetching posts: ", error);
        }
      }
      fetchPosts();
    }, []);


    console.log(posts);


    const gridClasses = `
    grid
    grid-cols-[2fr_1fr_1fr_0.5fr]
    gap-x-6
    gap-y-4
    items-center
  `;
    useEffect(() => {
      
    })
 
  
  return (
    <section className='min-h-screen xm:px-8 md:px-12 bg-white'>
      {/* title */}
      <div className = "mt-10 flex">
        <h1 className = "mx-auto font-semibold text-2xl text-coffee"> Share Your Thought</h1>
      </div>

   
      <div className = {`${gridClasses} text-sm font-semibold text-slate-500 mt-10 lg:mt-20 border-b pb-3`}>
        {/* table head => title, userNamne createdAt commentCount */}
        <span>title</span>
        <span>Author</span>
        <span>Created</span>
        <span className = "text-right">Comments</span>
      </div>

      {/* content section */}

      <div className="mt-2 space-y-2 text-sm">
        {posts.map(post => (
          <div key={post.id} className={`${gridClasses} rounded-xl px-4 py-3 bg-slate-50`}>
            <span 
              className="font-medium text-slate-900 hover:cursor-pointer "
              onClick = {()=> {
                // navigate to clicked post
              }}
              >
                {post.title}
            </span>
            <span className="text-slate-600">{post.userName}</span>
            <span className="text-slate-500">
              {post.createdAt
                ? new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(post.createdAt.toDate())
                : "—"}
            </span>
            <span className="text-right text-slate-600">{post.commentCount ?? 0}</span>
          </div>
        ))}
      </div>
    
    </section>
  )
}