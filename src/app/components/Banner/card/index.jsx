import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/app/Theme';
import { EyeIcon, StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BannerCard = ({ banner }) => {
  const { theme } = useTheme();
  const shadowClass = theme === 'light' ? 'shadow-black' : 'shadow-white';

  const isLongDescription = banner.description.length > 17;

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const [ratingValue, maxRating] = banner.rating.split('/').map(Number);

  const fullStars = Math.floor(ratingValue);
  const hasHalfStar = ratingValue % 1 >= 0.5;

  return (
    <Link href={`/anime/${banner.id}`} passHref>
      <motion.div
        className={`relative max-w-xs w-[150px] h-[200px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl ${shadowClass} group`}
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full h-full">
          <Image
            src={banner.imageUrl}
            alt={banner.description}
            width={300}
            height={200}
            layout="responsive"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end text-white">
            <div className={`relative ${isLongDescription ? 'overflow-hidden' : ''} z-10`}>
              <p
                className={`text-sm font-medium text-center mb-2 whitespace-nowrap ${isLongDescription ? 'animate-marquee' : ''} block`}
              >
                {banner.description}
              </p>
            </div>
            <div className="bg-black bg-opacity-50 text-white rounded-t-lg transition-all duration-300 absolute bottom-0 left-0 w-full h-9 flex flex-col items-center p-2 group-hover:h-full group-hover:translate-y-0">
              <div className="flex items-center opacity-0 group-hover:opacity-100 mt-10 transition-opacity duration-300 mb-1">
                <EyeIcon className="w-4 h-4 mr-1" />
                <span className="text-sm font-bold">{formatNumber(banner.views)}</span>
              </div>
              <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(maxRating)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`w-4 h-4 ${index < fullStars ? 'text-yellow-400' : index === fullStars && hasHalfStar ? 'text-yellow-400' : 'text-gray-400'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BannerCard;