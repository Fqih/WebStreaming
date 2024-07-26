"use client";
import React from 'react';
import { useTheme } from '@/app/Theme';

const AboutMe = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-all`}>
      <h2 className="text-3xl font-bold text-center mb-4">📚 About Me</h2>
      <div className="mb-4">
        <p className="text-lg">
          Welcome to the <strong>Anime Release Schedule</strong> app! I’m <a href="https://www.linkedin.com/in/faqih-hakim/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Muhammad Faqih Hakim</a>, a developer with a passion for creating engaging and useful web applications. This project is a part of my ongoing journey to build innovative solutions using modern web technologies.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-2">🌟 Project Overview</h3>
      <p className="mb-4">
        The <strong>Anime Release Schedule</strong> app is designed to help anime enthusiasts keep track of their favorite anime release dates. The application features a dynamic calendar that highlights release dates with color-coded indicators for different anime series. This allows users to easily see when new episodes or seasons are coming out.
      </p>

      <h3 className="text-2xl font-semibold mb-2">🛠 Technologies Used</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Frontend:</strong> React, Tailwind CSS</li>
        <li><strong>Backend:</strong> (Specify if you have a backend or just use static data)</li>
        <li><strong>Theme:</strong> Dark mode and light mode support</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2">🚀 Features</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Dynamic Calendar:</strong> View and interact with a monthly calendar displaying anime release dates.</li>
        <li><strong>Color-Coded Dates:</strong> Different colors represent different anime series for easy identification.</li>
        <li><strong>Responsive Design:</strong> Works well on various devices and screen sizes.</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2">📝 Future Improvements</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>User Authentication:</strong> Allow users to create accounts and customize their schedule.</li>
        <li><strong>API Integration:</strong> Fetch anime release dates from a public API to keep the calendar updated.</li>
        <li><strong>User Feedback:</strong> Implement features based on user suggestions and feedback.</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2">📫 How to Reach Me</h3>
      <p>
        If you have any questions, suggestions, or just want to connect, feel free to reach out:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Email:</strong> <a href="mailto:mhmdfkih21@gmail.com" className="text-blue-500 hover:underline">mhmdfkih21@gmail.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/faqih-hakim/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Muhammad Faqih Hakim</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/Fqih" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Fqih</a></li>
      </ul>

      <p className="text-center text-sm">
        Thank you for checking out my project! I hope you find it useful and enjoyable.
      </p>
    </div>
  );
};

export default AboutMe;