import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import FilterTabs from '../ui/FilterTabs';

export default function DashBoard() {
  const location = useLocation();
  const [selectedView, setSelectedView] = useState('overview')

  const dashboardViews = [
    { id: 'overview', label: 'Overview' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'users', label: 'Users' }
  ]

  const renderContent = () => {
    switch(selectedView) {
      case 'overview':
        return (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Quick Stats</h2>
              <p className="text-gray-600">Current path: {location.pathname}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
              {/* Add your overview content here */}
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Analytics Dashboard</h2>
            {/* Add your analytics content here */}
          </div>
        );
      case 'users':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">User Management</h2>
            {/* Add your user management content here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl text-center font-serif font-semibold mb-10">Dashboard</h1>
        
        <FilterTabs
          items={dashboardViews} 
          selectedItem={selectedView}
          onItemSelect={(item) => setSelectedView(item.id)}
          variant="underline"
        />

        <div className="pb-20">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}








