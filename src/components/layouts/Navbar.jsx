import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
// import { TiShoppingCart } from "react-icons/ti";
import NavBarList from '../layouts/NavBarList';
import Logo from '../../ui/Logo';
import { CiViewList } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { link: "/", listName: "home" },
    { link: "/story", listName: "story" },
    { link: "/education", listName: "education" },
    { link: "/blog", listName: "blog" },
    { link: "/board", listName: "board" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className='w-[90%] m-auto px-5 flex items-center justify-between'>
        {/* Logo */}
        <Link to="/" className='flex items-center gap-4 shrink-0'>
          <Logo />
          <span className='text-[#caa09b] text-xs font-light tracking-wider border-l border-gray-200 pl-4 hidden sm:block'>
            From green beans to great dreams
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-8'>
          {navItems.map((item, index) => (
            <NavBarList 
              key={index} 
              {...item} 
              className="text-sm font-medium hover:text-[#9e7d79] transition-colors"
            />
          ))}
          {user ? (
            <button 
              className="text-sm font-medium hover:text-[#9e7d79] transition-colors"
              onClick={logOut}
            >
              Sign out
            </button>
          ) : (
            <button 
              className="px-4 py-2 bg-[#9e7d79] text-white rounded-md text-sm font-medium hover:bg-[#8b6e6a] transition-colors"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </button>
          )}
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className='lg:hidden text-2xl hover:text-[#9e7d79] transition-colors'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoMdClose /> : <CiViewList />}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          <div className={`absolute right-0 top-0 h-screen w-64 bg-white shadow-lg transition-transform duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-6 space-y-6">
              {navItems.map((item, index) => (
                <NavBarList 
                  key={index} 
                  {...item} 
                  className="block text-lg font-medium hover:text-[#9e7d79] transition-colors py-2"
                />
              ))}
              {user ? (
                <button 
                  className="w-full text-left text-lg font-medium hover:text-[#9e7d79] transition-colors py-2"
                  onClick={logOut}
                >
                  Sign out
                </button>
              ) : (
                <button 
                  className="w-full px-4 py-2 bg-[#9e7d79] text-white rounded-md text-lg font-medium hover:bg-[#8b6e6a] transition-colors"
                  onClick={() => navigate("/signin")}
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}





