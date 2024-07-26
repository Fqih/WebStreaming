import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ isSearchBarVisible, isDarkMode, toggleSearchBar }) => {
  return (
    <>
      <button onClick={toggleSearchBar} className="text-2xl ml-4">
        <FaSearch />
      </button>
      <div
        className={`absolute top-16 right-0 w-full max-w-md rounded-lg p-4 flex items-center transition-opacity duration-300 ease-in-out ${isSearchBarVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
      >
        <input
          type="text"
          placeholder="Search..."
          className={`p-2 w-full rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
        />
        <FaSearch className="ml-2 text-xl" />
      </div>
    </>
  );
};

export default SearchBar;