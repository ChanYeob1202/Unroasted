import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaGithub, FaMedium, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';
import Logo from '../../ui/Logo';
import NewsletterForm from '../forms/NewsletterForm';

export default function Footer() {
  const footerLinks = {
    explore: [
      { name: 'My Story', path: '/about' },
      { name: 'Developer Site', path: 'https://your-dev-portfolio-url.com' },
      { name: 'Blog', path: '/blog' },
      { name: 'Careers', path: '/careers' }
    ],
    learn: [
      { name: 'Coffee Guide', path: '/guide' },
      { name: 'Brewing Tips', path: '/tips' },
      { name: 'Coffee Quiz', path: '/quiz' },
      { name: 'FAQ', path: '/faq' }
    ]
  };

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

  const contactInfo = [
    {
      icon: <FaPhone className="text-lg" />,
      text: '213-589-9504',
      href: 'tel:213-589-9504'
    },
    {
      icon: <FaEnvelope className="text-lg" />,
      text: 'michaelcodescoffee@gmail.com',
      href: 'mailto:michaelcodescoffee@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-lg" />,
      text: 'Los Angeles, CA',
      href: 'https://goo.gl/maps/your-location'
    }
  ];

  return (
    <footer className="w-full bg-stone-100 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-600 text-sm leading-relaxed">
              Exploring the world of coffee, one cup at a time. Join our community of coffee enthusiasts.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-600 hover:text-coffee transition-colors p-2 hover:bg-white rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold uppercase mb-4 text-gray-900">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-coffee transition-colors text-sm inline-flex items-center"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 text-gray-900">
              Stay Connected
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Join our newsletter for exclusive coffee tips and updates.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-coffee transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                {info.icon}
                <span className="text-sm">{info.text}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Michael Codes Coffee. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span className="text-gray-400 text-sm">in Los Angeles</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}