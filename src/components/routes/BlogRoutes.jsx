import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
// import CreamTop from '../../pages/blog_posts/CreamTop';
// import Specialty from '../../pages/blog_posts/Specialty';

export default function BlogRoutes() {
  return (
    <Routes>
        <Route path ="/blog/cream-top-post" element={
            <ProtectedRoutes>
              {/* <CreamTop /> */}
            </ProtectedRoutes>
          } />
    
          <Route path ="/blog/specialty-coffee-guide" element={
            <ProtectedRoutes>
              {/* <Specialty /> */}
            </ProtectedRoutes>
          } />
    </Routes>
  )
}
