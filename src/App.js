import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import RoutLayout from "./components/layouts/RouteLayout";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import PublicRoutes from "./components/routes/PublicRoutes";
import Community from "./pages/community/Community";

// Page Imports
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Story from "./pages/Story";
import BlogRoutes from "./components/routes/BlogRoutes";
// Auth Pages
import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';
import CreatePost from "./pages/community/CreatePost";
// 

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<RoutLayout />}>
          {/* Main Routes */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blog" element={
            <ProtectedRoutes>
              <Blog />
            </ProtectedRoutes>
          } />
          <Route path="story" element={<Story />} />
          <Route path="community" element={<Community />} />
          {/* Board Form Page */}
        
        
          {/* Auth Routes */}
          <Route path="signin" element={
            <PublicRoutes>
              <SignInPage />
            </PublicRoutes>
          }/>

          <Route path="signup" element={
            <PublicRoutes>
              <SignUpPage />
            </PublicRoutes>
          }/>

          {/* Blog Routes */}
          <Route path="blog/*" element={<BlogRoutes />} />
          <Route path = "createPost" element = { <CreatePost />}  />
           
        </Route>
      </Routes>
    </>
  );
}

export default App;