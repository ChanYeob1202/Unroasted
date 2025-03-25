import React, { useState, useEffect } from 'react'
import { db } from '../lib/firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function BulletinBoard() {
    const [boardPosts, setBoardPosts] = useState([]);
    

    useEffect(()=> {
        const fetchPostData = async () => {
            try {
                const postRef = collection(db, "posts");
                const querySnapshot = await getDocs(postRef);
                const postList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log(postList);
            } catch (error){
                console.error("Error fetching post data:", error);
            }
        }
        fetchPostData();
    }, []);

  return (
    <div className='container mx-auto'>
        <ul>
            {/* {boardPosts.map((post) => {
                return(
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                )
            })}
             */}
        </ul>

    </div>
  );
}
