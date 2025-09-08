import React from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';

export default function RouteLayout() {
  const location = useLocation();
  const isBlogPage = location.pathname === "/blog";

  return (
    <div className="min-h-screen flex flex-col">
      {!isBlogPage && <Navbar />}
      <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl mt-20">
        <Outlet />
      </main>
      <div>
        {!isBlogPage && <Footer />}
      </div>
    </div>
  );
}

