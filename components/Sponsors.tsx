
import React from 'react';
import { SPONSORS_DATA } from '../constants';
import { SponsorInfo } from '../types';

export const Sponsors: React.FC = () => {
  return (
    <section className="bg-custom-gray-lightBg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-custom-blue-dark mb-12">Our Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {SPONSORS_DATA.map((sponsor: SponsorInfo) => (
            <div key={sponsor.id} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md aspect-[3/2] hover:shadow-xl transition-shadow">
              <img 
                src={sponsor.logoUrl} 
                alt={sponsor.name} 
                className="max-h-16 md:max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
