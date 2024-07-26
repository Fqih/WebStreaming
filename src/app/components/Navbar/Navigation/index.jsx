import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Navigation = ({ isDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="hidden lg:flex flex-1 justify-center space-x-9">
      <a href="/" className="relative flex items-center space-x-1 group">
        <span>Home</span>
        <span className="absolute bottom-[-1px] right-[-1px] w-full h-0.5 bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </a>
      <a href="/about" className="relative flex items-center space-x-1 group">
        <span>List</span>
        <span className="absolute bottom-[-1px] right-[-1px] w-full h-0.5 bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </a>
      <a href="#popular" className="relative flex items-center space-x-1 group">
        <span>Popular</span>
        <span className="absolute bottom-[-1px] right-[-1px] w-full h-0.5 bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </a>
      <div className="relative flex items-center space-x-1 group">
        <span>By Genre</span>
        <FaChevronDown
          className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        <div
          className={`absolute top-full mt-2 w-48 z-20 rounded-lg shadow-lg ${isDarkMode ? 'text-white bg-gray-800' : 'text-gray-900 bg-white'} ${isDropdownOpen ? 'block' : 'hidden'}`}
        >
          <a href="/genre/action" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Action</a>
          <a href="/genre/comedy" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Comedy</a>
          <a href="/genre/drama" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Drama</a>
          <a href="/genre/fantasy" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Fantasy</a>
          <a href="/genre/romance" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Romance</a>
          <a href="/genre/sci-fi" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Sci-Fi</a>
          <a href="/genre/adventure" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Adventure</a>
          <a href="/genre/horror" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Horror</a>
          <a href="/genre/thriller" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Thriller</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;