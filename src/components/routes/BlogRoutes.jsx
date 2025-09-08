import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import MatchaTrend from '../../pages/blog_articles/MatchaTrend';
import CoffeeColor from '../../pages/blog_articles/CoffeeColor';

export default function BlogRoutes() {
  

  return (
    <Routes>
        <Route path ="cream-top-post" element={
            <ProtectedRoutes>
              {/* <CreamTop /> */}
            </ProtectedRoutes>
          }/> 

          <Route path ="specialty-coffee-guide" element={
            <ProtectedRoutes>
              {/* <Specialty /> */}
              
            </ProtectedRoutes>
          } />

          <Route path='17' element = {
            <ProtectedRoutes>
              {/* navigate to matchat-trend article */}
              <MatchaTrend />
            </ProtectedRoutes>
          } />

          <Route path = ":articleId" element = {
            <ProtectedRoutes>
              <CoffeeColor />
            </ProtectedRoutes>
          } />
            
    </Routes>
  )
}
