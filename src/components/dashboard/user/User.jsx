// src/components/dashboard/user/User.jsx
import React from 'react';
import TableHead from '../../../ui/TableHead';
import TableBody from '../../../ui/TableBody';
import UserControlButton from '../../../ui/UserControlButton';

export default function User({ users, loading, error }) {
    const tableConfig = [
        { id: "username", name: "Username" },
        { id: "email", name: "Email" },
        { id: "role", name: "Role" },
        { id: "createdAt", name: "Created At" },
        { 
            id: "status", 
            name: "Status",
            render: (row) => (
                <span className={`px-2 py-1 text-xs rounded-full ${
                    row.status === 'Verified'
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                    {row.status}
                </span>
            )
        },
        { 
            id: "actions",  
            name: "Actions",
            render: (row) => <UserControlButton userEmail={row.email} />
        }
    ];

    const transformedUsers = users.map((user) => ({
        id: user.id,
        username: user.username || user.email,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt?.seconds
            ? new Date(user.createdAt.seconds * 1000).toLocaleDateString()
            : 'N/A',
        status: user.verified ? "Verified" : "Unverified"
    }));

    if (loading) {
        return (
            <div className="flex justify-center items-center p-4">
                <div className="text-gray-500">
                    Loading users...
                </div>
            </div>
    )};

    if (error) {
        return (
            <div className="flex justify-center items-center p-4">
                <div className="text-red-500">
                    Error: {error}
                </div>
            </div>
        )}; 

    return (
        <div className="overflow-x-auto">
            <TableHead data={tableConfig} />
            <TableBody data={transformedUsers} config={tableConfig} />
        </div>
    );
}