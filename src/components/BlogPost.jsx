import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import LikeButton from '../ui/LikeButton';

export default function BlogPost({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postRef = doc(db, 'posts', postId);
        const postSnap = await getDoc(postRef);
        
        if (postSnap.exists()) {
          setPost(postSnap.data());
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError('Error loading post');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-coffee-dark">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <article className="max-w-3xl mx-auto px-4 pb-20">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-5xl font-serif text-coffee-dark mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-between mb-8">
            <div className="text-coffee-light font-rubik">
              {new Date(post.date.toDate()).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })} • {post.readTime}
            </div>
            <LikeButton postId={postId} initialLikes={post.likes} />
          </div>
          <img 
            src={post.imageUrl}
            alt={post.title} 
            className="w-full h-auto rounded-lg mb-8"
          />
        </header>

        <div className="space-y-8 text-gray-800 font-rubik">
          {/* Introduction */}
          <section>
            <p className="mb-6">{post.content.introduction}</p>
          </section>

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-3xl font-serif text-coffee mb-6">
                {section.title}
              </h2>
              
              {section.content && (
                <p className="mb-4">{section.content}</p>
              )}

              {section.subsections && section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-8">
                  <h3 className="text-2xl font-serif text-coffee-dark mb-4">
                    {subsection.title}
                  </h3>
                  
                  {subsection.content && (
                    <p className="mb-2">{subsection.content}</p>
                  )}
                  
                  {subsection.bulletPoints && (
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      {subsection.bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex} 
                            dangerouslySetInnerHTML={{ __html: point }}
                        />
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}

          {/* Conclusion */}
          {post.content.conclusion && (
            <section>
              <h2 className="text-3xl font-serif text-coffee mb-6">Conclusion</h2>
              <p className="mb-4">{post.content.conclusion}</p>
            </section>
          )}
        </div>
      </article>
    </div>
  );
} 