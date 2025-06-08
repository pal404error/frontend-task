
import React from 'react';
import { PARTNERS_DATA, ChevronLeftIcon, ChevronRightIcon } from '../constants';
import { Partner } from '../types';

export const PartnersCarousel: React.FC = () => {
  // For a real carousel, you'd use useState and functions to handle scrolling.
  // This is a simplified static display.
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12 overflow-hidden">
          <button aria-label="Previous partners" className="text-gray-400 hover:text-custom-blue-dark transition-colors p-2 hidden sm:block">
            <ChevronLeftIcon className="w-8 h-8" />
          </button>
          {PARTNERS_DATA.map((partner: Partner) => (
            <div key={partner.id} className="flex-shrink-0">
              <img 
                src={partner.logoUrl} 
                alt={partner.name} 
                className="h-10 md:h-12 lg:h-14 object-contain"
                style={{ filter: 'grayscale(100%) opacity(0.7)' }} 
              />
            </div>
          ))}
          <button aria-label="Next partners" className="text-gray-400 hover:text-custom-blue-dark transition-colors p-2 hidden sm:block">
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};
