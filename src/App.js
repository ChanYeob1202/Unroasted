import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import RoutLayout from "./components/layouts/RouteLayout";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import PublicRoutes from "./components/routes/PublicRoutes";
import BulletinBoard from "./pages/BulletinBoard";
import Specialty from "./pages/blog_posts/Specialty";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Story from "./pages/Story";

// Auth Pages
import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';

// Blog Routes
import TestDatabase from './components/TestDatabase';
import BoardFormPage from "./pages/BoardFormPage";
import CreamTop from "./pages/blog_posts/CreamTop";


function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<RoutLayout />}>
          {/* Main Routes */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
      
          <Route path="blog" element={
            <ProtectedRoutes>
              <Blog />
            </ProtectedRoutes>
          } />
          <Route path="story" element={<Story />} />
          <Route path="board" element={<BulletinBoard />} />

          {/* Board Form Page */}
          <Route path="board/:id" element= {<BoardFormPage />} />

          {/* Auth Routes */}
          <Route path="signin" element={
            <PublicRoutes>
              <SignInPage />
            </PublicRoutes>
          } />
          <Route path="signup" element={
            <PublicRoutes>
              <SignUpPage />g
            </PublicRoutes>
          } />

          {/* Blog Routes */}
          <Route path ="/blog/traditional-vs-modern-coffee" element={
            <ProtectedRoutes>
              <CreamTop />
            </ProtectedRoutes>
          } />
          <Route path ="/blog/what-makes-coffee-specialty" element={
            <ProtectedRoutes>
              <Specialty />
            </ProtectedRoutes>
          } />
        </Route>
      </Routes>
      <TestDatabase />  
    </>
  );
}

export default App;