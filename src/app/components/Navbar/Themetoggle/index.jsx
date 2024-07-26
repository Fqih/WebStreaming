import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Themettoggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="hidden lg:flex items-center space-x-4">
      <button
        onClick={toggleDarkMode}
        className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-400 dark:hover:bg-gray-300"
      >
        {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        <span>{isDarkMode ? 'Light' : 'Dark'}</span>
      </button>
    </div>
  );
};

export default Themettoggle;