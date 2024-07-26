import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const AnimeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
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

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  if (!anime) return <p className="text-center text-lg">Anime not found</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center">
        {anime.imageUrl ? (
          <Image
            src={anime.imageUrl}
            alt={anime.title || 'Anime image'}
            width={500}
            height={300}
            layout="responsive"
            className="object-cover rounded-lg"
          />
        ) : (
          <p>No image available</p>
        )}
        <h1 className="text-3xl font-bold mt-4">{anime.title || 'Title not available'}</h1>
        <p className="mt-2 text-lg">{anime.description || 'Description not available'}</p>
        <div className="mt-4 w-full max-w-2xl">
          <h2 className="text-xl font-semibold">Details</h2>
          <p><strong>Views:</strong> {anime.views !== undefined ? anime.views : 'N/A'}</p>
          <p><strong>Rating:</strong> {anime.rating || 'N/A'}</p>
          <p><strong>Synopsis:</strong> {anime.synopsis || 'N/A'}</p>
          <p><strong>Release Date:</strong> {anime.release || 'N/A'}</p>
          <p><strong>Studio:</strong> {anime.studio || 'N/A'}</p>
          <p><strong>Genre:</strong> {anime.genre || 'N/A'}</p>
          <p><strong>Status:</strong> {anime.status || 'N/A'}</p>
          <p><strong>Total Episodes:</strong> {anime.totalEpisodes !== undefined ? anime.totalEpisodes : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;