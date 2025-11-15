import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaGithub, FaMedium } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { 
      icon: <FaInstagram className="text-xl" />, 
      url: 'https://www.instagram.com/michaelcodescoffee',
      label: 'Instagram'
    },
    { 
      icon: <FaLinkedinIn className="text-xl" />, 
      url: 'https://www.linkedin.com/in/michael-kim-3514a9314',
      label: 'LinkedIn'
    },
    { 
      icon: <FaGithub className="text-xl" />, 
      url: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    { 
      icon: <FaMedium className="text-xl" />, 
      url: 'https://medium.com/@yourusername',
      label: 'Medium'
    }
  ];

  return (
    <footer className="w-full bg-white py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">unroasted</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Exploring the world of coffee, one cup at a time. Join our community of coffee enthusiasts.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-600 hover:text-coffee transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">EXPLORE</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-coffee">
                  My Story
                </Link>
              </li>
              <li>
                <Link to="https://michaelkimdev.com" className="text-gray-600 hover:text-coffee">
                  Developer Site
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-coffee">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">STAY CONNECTED</h3>
            <p className="text-gray-600 mb-4">
              Join our newsletter for exclusive coffee tips and updates.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button className="w-full bg-coffee-dark text-white py-2 rounded hover:bg-coffee-dark/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 text-gray-600">
          <a href="tel:213-589-9504" className="hover:text-coffee">
            213-589-9504
          </a>
          <a href="mailto:michaelcodescoffee@gmail.com" className="hover:text-coffee md:text-center">
            michaelcodescoffee@gmail.com
          </a>
          <div className="md:text-right">
            Los Angeles, CA
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            © 2025 Michael Codes Coffee. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Made with <span className="text-red-500">❤️</span> in Los Angeles
          </p>
        </div>
      </div>
    </footer>
  );
}