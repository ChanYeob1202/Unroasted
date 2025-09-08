import React from 'react';
import TableHead from '../../../ui/TableHead';
import TableBody from '../../../ui/TableBody';

export default function Post({ posts, loading, error }) {
    // Calculate total views
    const totalViews = posts?.reduce((sum, post) => sum + (post.views || 0), 0) || 0;


    const  tableConfig = [
        { id: "title", name: "Title" },
        { id: "category", name: "Category" },
        { id: "status", name: "Status" },
        { id: "publishedAt", name: "Published At" },
        { 
            id: "views",
            name: "Total Views",
            render: (row) => row.views?.toLocaleString() || '0'
        },
        {
            id: "actions",
            name: "Actions",
            render: (row) => (
              <button
                onClick={() => {
                  console.log('Editing post:', row);
                }}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit 
              </button>
            )
        }
    ];

    const transformedPosts = posts.map(post => ({
        id: post.id,
        title: post.title,
        category: post.primaryCategory || post.category,
        status: post.published ? "published" : "draft",
        publishedAt: post.publishedDate
            ? new Date(post.publishedDate.seconds * 1000).toLocaleDateString()
            : "N/A"
        }));

    if ( loading ) {
        return (
            <div className="flex justify-center items-center p-4">
                <div className="text-gray-500">
                    Loading posts...
                </div>
            </div>);
    }

    if ( error ) {
        return (
            <div className="flex justify-center items-center p-4">
                <div className="text-red-500">
                    Error: {error}
                </div>
            </div>);
        }

    return (
        <div>
            <TableHead data={tableConfig} />
            <TableBody data={transformedPosts} config={tableConfig} />
        </div>
    );
}