import React from 'react'
// Remove the incorrect import of useFetchData

export default function TableBody({ data, config }) {
    if( !data || !Array.isArray(data)){
        return null;
    }

    return (
        <div className='border-y-black border-gray-200'>
            <div className='grid grid-cols-5 py-3 px-6'>
                {data.map((user) => (
                    <div key = {user.id} className='flex items-center'>
                        <p className='text-xs font-medium text-serif truncate'>
                    
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
