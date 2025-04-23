import React from 'react'
import TableHead from '../../../ui/TableHead';
import VerifyButton from '../../../ui/VerifyButton';

export default function User({users, loading, error}) {
    const tableConfig = [
        {id: "name", name: "Username"}, 
        {id: "email", name: "Email"},
        {id: "role",name: "Role"},
        {id: "createdAt", name: "Created At"}, 
        {id: "status",name: "Status"}
    ]

    const transformedUsers = users.map((user) => {
      return {
        username: user.username || user.email,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt?.seconds ? 
          new Date(user.createdAt.seconds * 1000).toLocaleDateString() : 
          'N/A',
        status: user.verified ? "Verified" : "Unverified"
      }
    })

    if (loading) {
        return (
          <div className="flex justify-center items-center p-4">
            <div className="text-gray-500">Loading users...</div>
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
      // overflow-x-auto enable horizontal scrolling
        <div className="overflow-x-auto">
            <TableHead data={tableConfig} />
            <div className='border-y border-gray-200'>
                {transformedUsers.map((user) => (
                    <div key={user.email} className='grid grid-cols-5 py-3 px-6 hover:bg-gray-50'>
                        <div className='flex items-center'>
                            <p className='text-sm text-gray-700 truncate'>
                                {user.username}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-sm text-gray-700 truncate'>
                                {user.email}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-sm text-gray-700 truncate'>
                                {user.role}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-sm text-gray-700 truncate'>
                                {user.createdAt}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                                user.status === 'Verified' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                                {user.status}
                            </span>
                            <VerifyButton />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
