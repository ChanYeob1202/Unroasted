import React from 'react'

export default function TableHead({ data }) {
  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="grid grid-cols-5 py-3 px-6">
        {data.map((column) => (
          <div key={column.id} className="flex items-center">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider truncate">
              {column.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
