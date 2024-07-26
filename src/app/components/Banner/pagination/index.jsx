// 'use client';

import React from 'react';
import { useTheme } from '@/app/Theme';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const { isDarkMode } = useTheme();
  const buttonClasses = `
    px-4 py-2 rounded-lg 
    transition-colors duration-300
    ${isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-800 disabled:bg-gray-500' : 'bg-gray-300 text-black hover:bg-gray-800 disabled:bg-gray-200'}
  `;

  return (
    <div className="flex items-center gap-4 p-4 justify-center">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={buttonClasses}
      >
        Prev
      </button>
      <span className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={buttonClasses}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
