"use client";
import React, { useState } from 'react';
import { useTheme } from '@/app/Theme';

const AnimeReleaseSchedule = () => {
  const { isDarkMode } = useTheme();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Data anime rilis statis
  const animeReleases = [
    { id: 1, title: 'Naruto', description: 'Episode 1', releaseDate: '2024-07-10' },
    { id: 2, title: 'One Piece', description: 'Episode 115', releaseDate: '2024-07-15' },
    { id: 3, title: 'Attack on Titan', description: 'Final Season Part 2', releaseDate: '2024-07-20' },
  ];

  // Warna untuk setiap anime
  const animeColors = {
    'Naruto': isDarkMode ? 'bg-yellow-500' : 'bg-yellow-300', // Kuning
    'One Piece': isDarkMode ? 'bg-red-500' : 'bg-red-300', // Merah
    'Attack on Titan': isDarkMode ? 'bg-blue-500' : 'bg-blue-300', // Biru
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const startDay = new Date(currentYear, currentMonth, 1).getDay();
    const calendarDays = [];

    // Create empty slots for days before the start of the month
    for (let i = 0; i < startDay; i++) {
      calendarDays.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }

    return calendarDays;
  };

  const formatDate = (day) => {
    return `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-50 text-gray-900'} rounded-lg transition-all`}>
      <h2 className="text-3xl font-bold text-center mb-4">Anime Release Schedule</h2>
      <div className="text-center mb-4">
        <h3 className="text-2xl font-semibold">{`${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}`}</h3>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{day}</div>
        ))}
        {generateCalendar().map((day, index) => {
          const formattedDate = day ? formatDate(day) : '';
          const releases = animeReleases.filter(anime => anime.releaseDate === formattedDate);
          const bgColor = releases.length > 0 ? animeColors[releases[0].title] : (isDarkMode ? 'bg-gray-700' : 'bg-gray-200');

          return (
            <div 
              key={index} 
              className={`relative p-2 border rounded-md transition-all ${day ? 'cursor-pointer' : ''} ${bgColor}`}
              title={releases.length > 0 
                ? releases.map(anime => `${anime.title}: ${anime.description}`).join('\n') 
                : ''}
            >
              {day && <div className={`font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{day}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimeReleaseSchedule;
