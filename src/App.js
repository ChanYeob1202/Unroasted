import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import RoutLayout from "./components/layouts/RouteLayout";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import PublicRoutes from "./components/routes/PublicRoutes";
import BulletinBoard from "./pages/BulletinBoard";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Story from "./pages/Story";
import Education from "./pages/Education";
import Fundamentals from "./pages/education_page/fundamental/Fundamentals";
import OriginIntro from "./pages/education_page/fundamental/originVarieties/OriginIntro";
import CoffeeCherryToBean from "./pages/education_page/fundamental/originVarieties/CoffeeCherryToBean";
import CoffeePlanBiologyCultivation from "./pages/education_page/fundamental/originVarieties/CoffeePlanBiologyCultivation";
import TheImpactOfAltitudeAndClimate from "./pages/education_page/fundamental/originVarieties/TheImpactOfAltitudeAndClimate";
import IntroClassification from "./pages/education_page/fundamental/bean_classification/Intro_classification";
import ArabicaVsRobusta from "./pages/education_page/fundamental/bean_classification/Arabica-vs-Robusta";
import Varieties from "./pages/education_page/fundamental/bean_classification/Varieties";
import Grades from "./pages/education_page/fundamental/bean_classification/Grades";

// Auth Pages
import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';

// Blog Routes
import { BlogRoutes } from "./components/routes/BlogRoutes";
import TestDatabase from './components/TestDatabase';

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
          <Route path="blog" element={<Blog />} />
          <Route path="story" element={<Story />} />
          <Route path="board" element={<BulletinBoard />} />
          {/* Auth Routes */}
          <Route path="signin" element={
            <PublicRoutes>
              <SignInPage />
            </PublicRoutes>
          } />
          <Route path="signup" element={
            <PublicRoutes>
              <SignUpPage />
            </PublicRoutes>
          } />

          {/* Protected Routes */}
          <Route path="education/:id" element={<Education />} />
          <Route path="cart" element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          } />

          {/* education routes */}
          <Route path="/education" element={
            <ProtectedRoutes>
              <Education />
            </ProtectedRoutes>
          } />
          <Route path="/education/coffee-fundamentals" element={
            <ProtectedRoutes>
              <Fundamentals />
            </ProtectedRoutes>
          } />
          <Route path="/education/coffee-fundamentals/origins&varieties" element={
            <ProtectedRoutes>
              <OriginIntro />
            </ProtectedRoutes>
          } />
          <Route path="/education/coffee-fundamentals/origins&varieties/coffee-plant-biology-cultivation" element={
            <ProtectedRoutes>
              <CoffeePlanBiologyCultivation />
            </ProtectedRoutes>
          } />
          <Route path="/education/coffee-fundamentals/origins&varieties/coffee-cherry-to-bean" element={
            <ProtectedRoutes>
              <CoffeeCherryToBean />
            </ProtectedRoutes>
          } />
          <Route path="/education/coffee-fundamentals/origins&varieties/the-impact-of-altitude-and-climate" element={
            <ProtectedRoutes>
              <TheImpactOfAltitudeAndClimate />
            </ProtectedRoutes>
          } />
          <Route path="/education/coffee-fundamentals/bean-classification" element={
            <ProtectedRoutes>
              <IntroClassification />
            </ProtectedRoutes>
          } />
          <Route path = "/education/coffee-fundamentals/bean-classification/arabica-vs-robusta" element={
            <ProtectedRoutes>
              <ArabicaVsRobusta />
            </ProtectedRoutes>
          } />
          <Route path="/education/coffee-fundamentals/bean-classification/varietals" element={
            <ProtectedRoutes>
              <Varieties />
            </ProtectedRoutes>
          } />
          <Route path="/education/coffee-fundamentals/bean-classification/grades" element={
            <ProtectedRoutes>
              <Grades />
            </ProtectedRoutes>
          } />

          {/* Blog Routes */}
          {BlogRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
      <TestDatabase />  
    </>
  );
}

export default App;