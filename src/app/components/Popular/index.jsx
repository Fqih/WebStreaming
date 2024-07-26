import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import BannerCard from './card';
import { useTheme } from '@/app/Theme';

const PopularSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const bannersPerPage = isMobile ? 5 : 13;

  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/banners?page=1&limit=${bannersPerPage}`);
        const data = response.data;
        console.log('Fetched banners:', data);

        // Sort banners by views in descending order and take the top 10
        const sortedBanners = (data.banners || []).sort((a, b) => b.views - a.views).slice(0, 10);
        setBanners(sortedBanners);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBanners();
  }, [bannersPerPage]);

  if (loading) return <p className={`text-center text-lg py-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Loading...</p>;
  if (error) return <p className={`text-center text-red-500 py-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Error: {error}</p>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: isMobile ? '20px' : '40px',
    focusOnSelect: true,
    className: 'slider',
  };

  return (
    <div className={`flex flex-col w-full p-6`} id='popular'>
      <h1 className={`text-2xl font-bold text-center mb-[50px] ${isDarkMode ? 'text-white' : 'text-black'}`}>TOP Popular Mingguan 🔥</h1>
      <div className="flex justify-center items-center w-full">
        {Array.isArray(banners) && banners.length > 0 ? (
          <Slider {...sliderSettings} className="w-full max-w-6xl">
            {banners.map(banner => (
              <div key={banner.id} className="px-2">
                <BannerCard banner={banner} />
              </div>
            ))}
          </Slider>
        ) : (
          <p className={`text-center text-lg py-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>No banners available</p>
        )}
      </div>
    </div>
  );
};

export default PopularSection;
