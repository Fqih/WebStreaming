'use client'
import LandingPage from './components/Landing';
import Navbar from './components/Navbar';
import { useTheme } from './Theme';
import Footer from './components/Footer/Index';
import PopularSection from './components/Popular';
import AnimeReleaseCalendar from './components/Jadwal';

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-800'}`}>
      <Navbar />
      <main className="flex flex-col items-center justify-between mt-7">
        <LandingPage />
      </main>
      <PopularSection />
      <main className="flex flex-col items-center justify-between mt-7">
      <AnimeReleaseCalendar />
      </main>
      <Footer />
    </div>
  );
}
