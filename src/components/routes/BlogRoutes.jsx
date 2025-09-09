import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import ArticleFormat from '../../components/cms/ArticleFormat';
import MatchaTrend from '../../pages/blog_articles/MatchaTrend';

export default function BlogRoutes() {

  const ArticleWithParams = () => {
    const { articleId } = useParams();
    return <ArticleFormat id={ articleId } />;
  };

  return (
    <Routes>
          <Route path = ":articleId" element = {
            <ProtectedRoutes>
              <ArticleWithParams />
            </ProtectedRoutes>
          } />
    </Routes>
  )
}