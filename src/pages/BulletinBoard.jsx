import React, { useState, useEffect } from 'react'
import { db } from '../lib/firebase/firebase'
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore'

export default function BulletinBoard() {
    const [boardPosts, setBoardPosts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: ''
    });

    const [loading, setLoading] = useState(true);
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Fetch posts
    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const postRef = collection(db, "posts");
                const querySnapshot = await getDocs(postRef);
                const postList = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    // Log the data to see what we're getting
                    console.log('Document data:', data);
                    return {
                        id: doc.id,
                        title: String(data.title || ''),
                        content: String(data.content || ''),
                        author: String(data.author || ''),
                        createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
                    };
                });
                setBoardPosts(postList);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching post data:", error);
                setLoading(false);
            }
        }
        fetchPostData();
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const postRef = collection(db, "posts");
            await addDoc(postRef, {
                title: String(formData.title),
                content: String(formData.content),
                author: String(formData.author),
                createdAt: serverTimestamp()
            });
            
            // Clear form
            setFormData({ title: '', content: '', author: '' });
            
            // Refresh posts
            const newSnapshot = await getDocs(postRef);
        const newPosts = newSnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    title: String(data.title || ''),
                    content: String(data.content || ''),
                    author: String(data.author || ''),
                    createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
                };
            });
            setBoardPosts(newPosts);
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

  return (
        <div className='container mx-auto p-4'>
            {/* Toggle Button */}
            <button 
                onClick={() => setIsFormVisible(!isFormVisible)}
                className="fixed bottom-6 right-6 bg-amber-400 hover:bg-amber-500 text-white rounded-full p-4 shadow-lg transform transition-transform hover:scale-110"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>

            {/* Form Modal - Update styling */}
            <div className={`fixed bottom-0 left-0 right-0 bg-amber-50 shadow-lg rounded-t-3xl transform transition-transform duration-300 ${isFormVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className='p-6 max-w-4xl mx-auto'>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className='text-2xl font-bold text-amber-800'>New Note</h2>
                        <button 
                            onClick={() => setIsFormVisible(false)}
                            className="text-amber-800 hover:text-amber-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div>
                            <input
                                type="text"
                                name="title"
                                placeholder="Post Title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className='w-full p-3 border-b-2 border-gray-200 focus:border-blue-500 outline-none text-xl'
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="content"
                                placeholder="Write your post..."
                                value={formData.content}
                                onChange={handleInputChange}
                                className='w-full p-3 border-b-2 border-gray-200 focus:border-blue-500 outline-none min-h-[150px]'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="author"
                                placeholder="Your name"
                                value={formData.author}
                                onChange={handleInputChange}
                                className='w-full p-3 border-b-2 border-gray-200 focus:border-blue-500 outline-none'
                                required
                            />
                        </div>
                        <button 
                            type="submit"
                            className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transform transition-transform hover:scale-105'
                        >
                            Publish Post
                        </button>
                    </form>
                </div>
            </div>

            {/* Display Posts as Sticky Notes */}
            <div className='space-y-6'>
                <h1 className='text-3xl font-bold text-center mb-8 text-amber-800'>Coffee Notes</h1>
                
                {/* Horizontal Scrolling Container */}
                <div className='overflow-x-auto pb-6'>
                    <div className='flex space-x-6 min-w-max px-4'>
                        {boardPosts.map((post) => (
                            <article 
                                key={post.id} 
                                className={`
                                    w-72 h-72
                                    ${getRandomColor()}
                                    rounded-lg shadow-lg
                                    transform rotate-${getRandomRotation()}
                                    hover:rotate-0 hover:scale-105 transition-all duration-300
                                    flex flex-col
                                    relative
                                    overflow-hidden
                                `}
                            >
                                {/* Tape Effect */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-gray-200/50 rounded"></div>
                                
                                <div className='p-6 flex flex-col h-full'>
                                    <h3 className='text-xl font-handwriting font-bold text-gray-800 mb-3 line-clamp-2'>
                                        {String(post.title) || 'Untitled'}
                                    </h3>
                                    
                                    <p className='text-gray-700 font-handwriting leading-relaxed flex-grow overflow-hidden line-clamp-6'>
                                        {String(post.content) || 'No content'}
                                    </p>
                                    
                                    <div className='mt-4 pt-2 border-t border-black/10 font-handwriting'>
                                        <div className='flex justify-between items-center text-sm text-gray-600'>
                                            <span>~ {String(post.author) || 'Anonymous'}</span>
                                            <span>{post.createdAt && post.createdAt.toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
    </div>
    );
}

// Add these helper functions at the top of your component
const getRandomColor = () => {
    const colors = [
        'bg-amber-100',
        'bg-rose-100',
        'bg-lime-100',
        'bg-cyan-100',
        'bg-violet-100'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomRotation = () => {
    const rotations = ['1', '2', '-1', '-2', '0'];
    return rotations[Math.floor(Math.random() * rotations.length)];
};
