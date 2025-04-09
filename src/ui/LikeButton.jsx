import React, { useState } from 'react'
import { FiHeart } from 'react-icons/fi'


export default function LikeButton({postId, initialLikes = 0}) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(initialLikes);

    const handleLike = () => {
        try {
            //firebase logic here

            setLiked(!liked);
            setLikeCount(prev => liked ? prev - 1 : prev + 1);
        } catch (error){
            console.error('Error liking post:', error);
        }
    }



  return (
    <button 
        onClick={handleLike}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-coffee hover:bg-coffee/5 transition-colors"
  > 
    <FiHeart 
        className={`w-5 h-5 ${liked ? 'fill-coffee text-coffee' : 'text-coffee'}`} 
    />
    <span className="font-rubik text-coffee">
      {likeCount} {liked ? 'Liked' :   'Like'}
    </span>
  </button>
  )
}
