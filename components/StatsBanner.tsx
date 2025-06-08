
import React from 'react';
import { STATS_DATA } from '../constants';
import { StatItem } from '../types';

export const StatsBanner: React.FC = () => {
  return (
    <section className="relative bg-custom-cyan text-custom-blue-dark py-16 md:py-20 overflow-hidden">
      {/* Simplified wave decoration */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/20 rounded-full opacity-50"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/15 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS_DATA.map((stat: StatItem) => (
            <div key={stat.id} className="p-4">
              <p className="text-4xl md:text-5xl font-extrabold mb-1">{stat.value}</p>
              <p className="text-sm md:text-base font-semibold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
