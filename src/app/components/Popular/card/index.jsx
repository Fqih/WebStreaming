import Link from 'next/link';
import Image from 'next/image';
import { FaEye, FaCircle } from 'react-icons/fa';
import { useTheme } from '@/app/Theme';


const formatNumber = (number) => {
  return number.toLocaleString();
};

const BannerCard = ({ banner }) => {
    const { isDarkMode } = useTheme();
  
    // Define the color classes based on the theme
    const backgroundColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';
    const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
    const statusColor = banner.status === 'Active' 
      ? (isDarkMode ? 'text-green-400' : 'text-green-500') 
      : (isDarkMode ? 'text-red-400' : 'text-red-500');
  
    return (
      <Link href={`/anime/${banner.id}`} passHref>
        <div 
          className={`relative ${backgroundColor} border ${borderColor} shadow-lg rounded-lg overflow-hidden w-[300px] mx-auto mb-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
        >
          <div className="relative w-full h-64 overflow-hidden">
            {banner.imageUrl ? (
              <Image
                src={banner.imageUrl}
                alt={banner.description || 'Banner image'}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 transition-transform duration-300 transform hover:scale-110"
              />
            ) : (
              <div className={`w-full h-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} flex items-center justify-center text-${isDarkMode ? 'gray-100' : 'gray-600'}`}>
                <p>No image available</p>
              </div>
            )}
          </div>
          <div className={`p-4 ${textColor}`}>
            <p className={`font-bold text-lg mb-2 ${textColor}`}>{banner.description || 'Description not available'}</p>
            <div className={`flex items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-x-4`}>
              <div className="flex items-center space-x-1">
                <FaEye className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className="flex items-center">
                  <span className="mr-1 text-gray-500">•</span>
                  {formatNumber(banner.views || 0)}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <FaCircle className={statusColor} />
                <span>{banner.status || 'Unknown'}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  
  export default BannerCard;
  