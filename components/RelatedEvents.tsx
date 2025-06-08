
import React from 'react';
import { RELATED_EVENTS_DATA, CalendarIcon, LocationPinIcon } from '../constants';
import { RelatedEvent } from '../types';

const EventCard: React.FC<RelatedEvent> = ({ title, date, location, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col h-full">
    <div className="relative aspect-[16/9] overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-custom-blue-dark mb-3 group-hover:text-custom-cyan transition-colors">{title}</h3>
      <div className="mt-auto space-y-2 text-sm text-custom-gray-text">
        <div className="flex items-center">
          <CalendarIcon className="w-4 h-4 mr-2 text-custom-cyan" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <LocationPinIcon className="w-4 h-4 mr-2 text-custom-cyan" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  </div>
);

export const RelatedEvents: React.FC = () => {
  return (
    <section className="bg-custom-gray-lightBg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-custom-blue-dark mb-12">Related Events In The Series</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RELATED_EVENTS_DATA.map((event: RelatedEvent) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};
