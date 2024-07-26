import React, { useState } from 'react';
import { FaBars, FaSearch, FaHome, FaInfoCircle, FaFilm, FaEnvelope, FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../../Theme';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Themettoggle from './Themetoggle';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <div className={`relative p-3 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-cyan-400 text-gray-900'}`}>
      <nav className={`p-4 flex items-center justify-between z-50 `}>
        {/* Mobile menu button */}
        <button onClick={toggleSidebar} className="text-2xl lg:hidden">
          <FaBars />
        </button>

        <div className="text-lg font-bold flex-1 text-center lg:text-left lg:flex-none">
        Let`Stream
        </div>

        {/* Navigation  */}
        <Navigation isDarkMode={isDarkMode} />

        {/* Dark Mode Toggle Button */}
        <Themettoggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Search bar */}
        <SearchBar isSearchBarVisible={isSearchBarVisible} isDarkMode={isDarkMode} toggleSearchBar={toggleSearchBar} />
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;