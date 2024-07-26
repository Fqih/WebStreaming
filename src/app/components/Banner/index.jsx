import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import BannerCard from './card';
import Pagination from './pagination';

const BannerComponent = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const bannersPerPage = isMobile ? 5 : 13;

  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/banners?page=${currentPage}&limit=${bannersPerPage}`);
        const data = response.data;
        setBanners(data.banners || []);
        setTotalCount(data.totalCount || 0);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBanners();
  }, [currentPage, bannersPerPage]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const totalPages = Math.ceil(totalCount / bannersPerPage);

  return (
    <div className="flex flex-col h-auto">
      <div className="flex flex-wrap gap-4 p-4 justify-center flex-1 overflow-auto">
        {Array.isArray(banners) && banners.length > 0 ? (
          banners.map(banner => (
            <BannerCard key={banner.id} banner={banner} />
          ))
        ) : (
          <p className="text-center text-lg">No banners available</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BannerComponent;