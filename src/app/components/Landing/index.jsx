import React from 'react';
import BannerComponent from '../Banner';

const LandingPage = () => {
  return (
    <div className="flex" id='home'>      
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-4">    
          <section className="text-center mb-8">
            <h2 className="text-2xl font-semibold">Anime</h2>
          </section>
          <div className='justify-center'>
            <BannerComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
