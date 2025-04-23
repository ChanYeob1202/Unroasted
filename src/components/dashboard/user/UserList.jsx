import React from 'react'
import VerifyButton from '../../../ui/VerifyButton';

export default function UserList({ user }) {

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp.seconds * 1000).toLocaleDateString();
  }


  return (
    <div className="hover:bg-gray-50 transition-all duration-200">
      <div className="grid grid-cols-5 items-center py-4 px-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-indigo-600 font-medium">{user.username.charAt(0).toUpperCase()}</span>
          </div>
          <p className="text-sm font-medium text-gray-900 truncate">{user.username}</p>
        </div>
        
        <p className="text-sm text-gray-600 truncate">{user.email}</p>
        
        <p className="text-sm text-gray-600 truncate">{formatDate(user.createdAt)}</p>
        
        <p className="text-sm text-gray-600 truncate capitalize">{user.role}</p>
        
        <div className="flex items-center">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            user.verified ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {user.verified ? 'Verified' : 'Unverified'}
          </span>
          <VerifyButton user={user} />
        </div>
      </div>
    </div>
  )
}