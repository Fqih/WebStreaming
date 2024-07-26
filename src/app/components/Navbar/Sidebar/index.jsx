import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/app/Theme';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const linkClasses = `group flex items-center p-4 cursor-pointer relative rounded-md transition-colors duration-300 ease-in-out ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-200'}`;
  const underlineClasses = `absolute left-0 bottom-0 w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-300 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-700'} group-hover:scale-x-100`;

  const buttonClasses = `absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center px-4 py-2 rounded-full text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`;

  return (
    <div className={`fixed top-0 left-0 w-64 h-full transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-40 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="relative h-full">
        <button onClick={toggleSidebar} className="text-2xl absolute top-4 right-4">
          &times;
        </button>
        <div className="flex items-center justify-center mt-8">
          {/* Ganti teks dengan gambar logo menggunakan next/image */}
          <Image 
            src="/Assets/img/logo.png" 
            alt="Logo" 
            width={100} // Sesuaikan lebar gambar
            height={40} // Sesuaikan tinggi gambar
            className="object-contain"
          />
        </div>
        <div className="mt-8">
          <Link href="/" legacyBehavior>
            <a className={linkClasses}>
              Home
              <span className={underlineClasses} />
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={linkClasses}>
              List
              <span className={underlineClasses} />
            </a>
          </Link>
          <Link href="#popular" legacyBehavior>
            <a className={linkClasses}>
              Popular
              <span className={underlineClasses} />
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={linkClasses}>
              Contact
              <span className={underlineClasses} />
            </a>
          </Link>
        </div>
        <button onClick={toggleDarkMode} className={buttonClasses}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;