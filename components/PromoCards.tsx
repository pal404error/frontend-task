
import React from 'react';
import { PROMO_CARD_DATA, ArrowRightIcon } from '../constants';
import { PromoCardItem } from '../types';

export const PromoCards: React.FC = () => {
  return (
    <section className="bg-custom-blue-dark text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROMO_CARD_DATA.map((card: PromoCardItem) => (
            <a
              key={card.id}
              href={card.href}
              className="group bg-custom-blue-nav p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  {card.title}
                  <ArrowRightIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </h3>
                <p className="text-gray-300 text-sm">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
