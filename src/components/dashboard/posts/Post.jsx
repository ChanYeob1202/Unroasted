import React from 'react'
import TableHead from '../../../ui/TableHead';
import TableBody from '../../../ui/TableBody';

export default function Post({posts, loading, error}) {

// title, primaryCateogry, publishedDate

    const tableConfig = [
        {
            id: "title",
            name: "Title"
        },
        {
            id: "category",
            name: "Category"
        },
        {
            id: "status",
            name: "Status"
        },
        {
            id: "publishedAt",
            name: "Published At"
        },
        {
            id: "actions",
            name: "Actions"
        }
    ]

    if (loading) {
        return (
          <div className="flex justify-center items-center p-4">
            <div className="text-gray-500">Loading posts...</div>
          </div>
        );
      }
    
      if (error) {
        return (
          <div className="flex justify-center items-center p-4">
            <div className="text-red-500">Error: {error}</div>
          </div>
        );
      }
 
  return (
    <div>
      <TableHead data = {tableConfig}/>

    </div>
  )
}
