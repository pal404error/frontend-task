
import React from 'react';
import { INDUSTRY_TRENDS_DATA } from '../constants';
import { IndustryTrend } from '../types';

export const IndustryTrends: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Industry Trends</h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {INDUSTRY_TRENDS_DATA.map((trend: IndustryTrend) => (
            <button
              key={trend.id}
              type="button"
              className="px-6 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-colors text-sm md:text-base"
            >
              {trend.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
