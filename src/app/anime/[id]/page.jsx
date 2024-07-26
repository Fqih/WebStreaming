"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import { useTheme } from '@/app/Theme';

const formatViews = (views) => {
  return views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const renderStars = (rating) => {
  const starCount = Math.round(parseFloat(rating));
  let stars = '';

  for (let i = 1; i <= 5; i++) {
    if (i <= starCount) {
      stars += '<span class="text-yellow-500">★</span>';
    } else {
      stars += '<span class="text-gray-400">☆</span>';
    }
  }

  return stars;
};

const AnimeDetail = () => {
  const { isDarkMode } = useTheme();
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchAnime = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/banners/${id}`);
          setAnime(response.data);
        } catch (err) {
          setError(err.message || 'An error occurred');
        } finally {
          setLoading(false);
        }
      };

      fetchAnime();
    }
  }, [id]);

  if (loading) return <p className={`text-center text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Loading...</p>;
  if (error) return <p className={`text-center text-red-500 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>Error: {error}</p>;

  if (!anime) return <p className={`text-center text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Anime not found</p>;

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-black text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar />
      <div className="p-4 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center mt-6">
        {anime.imageUrl ? (
          <div className="w-1/3 flex justify-center">
            <Image
              src={anime.imageUrl}
              alt={anime.description || 'Anime image'}
              width={300}
              height={200}
              layout="responsive"
              className="object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className={`w-full md:w-1/2 lg:w-1/3 h-64 flex items-center justify-center rounded-lg ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-300 text-gray-600'}`}>
            <p>No image available</p>
          </div>
        )}
        <div className="md:ml-6 mt-4 md:mt-0 flex-1 flex flex-col items-center md:items-start">
          <h1 className={`text-3xl font-bold text-center md:text-left ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{anime.description || 'Title not available'}</h1>
          <div className="mt-4 text-center md:text-left">
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Details</h2>
            <p><strong>Views:</strong> {formatViews(anime.views) || 'N/A'}</p>
            <p><strong>Rating:</strong> <span dangerouslySetInnerHTML={{ __html: renderStars(anime.rating) }} /></p>
            <p><strong>Release Date:</strong> {anime.release || 'N/A'}</p>
            <p><strong>Studio:</strong> {anime.studio || 'N/A'}</p>
            <p><strong>Genre:</strong> {anime.genre || 'N/A'}</p>
            <p><strong>Status:</strong> {anime.status || 'N/A'}</p>
            <p><strong>Total Episodes:</strong> {anime.totalEpisodes || 'N/A'}</p>
            <p className="mt-4"><strong>Synopsis:</strong></p>
            <p>{anime.synopsis || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;