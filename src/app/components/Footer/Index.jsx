import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Let`Stream</h1>
        </div>

        <nav className="flex flex-col md:flex-row items-center">
          <Link href="/" className="mx-2 text-gray-400 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="mx-2 text-gray-400 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="mx-2 text-gray-400 hover:text-white">
            Contact
          </Link>
          <Link href="/privacy" className="mx-2 text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
        </nav>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.instagram.com/fqihhkim21_/?hl=id" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/faqih-hakim/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Let`Stream. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
