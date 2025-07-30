import React, { useState } from 'react'
import FilterTabs from '../ui/FilterTabs'
import User from '../components/dashboard/user/User';
import Post from '../components/dashboard/posts/Post';
import { useFetchData } from '../hooks/useFetchData';

export default function DashBoard() {
  const [viewState, setViewState] = useState("users");
  
  // Only fetch the active view's data
  const { 
    data: users, 
    loading: userLoading, 
    error: userError 
  } = useFetchData(viewState === "users" ? "users" : "");
  

  const { 
    data: posts, 
    loading: postLoading, 
    error: postError 
  } = useFetchData(viewState === "posts" ? "posts" : ""); 
  
  const dashboard_lists = [
    { id: "users", label: "Users" },
    { id: "posts", label: "Posts" }
  ];

  const renderContent = () => {
    switch(viewState) {
      case "users":
        return (
          <User  
            users={ users }
            loading={ userLoading }
            error={ userError }
          />
        );

      case "posts":
        return (
          <Post 
            posts = { posts }
            loading = { postLoading }
            error = { postError }
           />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold font-serif mb-20 text-center">Dashboard</h1>
        <FilterTabs
          items={dashboard_lists}
          selectedItem={viewState}
          onItemSelect={(item) => setViewState(item.id)}
          variant="underline"
        />
        <div className="mt-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}