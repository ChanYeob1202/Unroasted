import React from 'react'
// Remove the incorrect import of useFetchData


export default function TableBody({ data, config }) {
    if( !data || !Array.isArray(data)){
        return null;
    }

    return (
        <div className='border-y border-gray-200'>
            {data.map((row, idx) => (
                <div key={row.id || idx} className='grid grid-cols-6 py-3 px-6 hover:bg-gray-50'>
                    {config.map((col) => (
                        <div key={col.id} className='flex items-center'>
                            <p className='text-sm text-gray-700 truncate'>
                                {col.render ? col.render(row) : row[col.id]}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}