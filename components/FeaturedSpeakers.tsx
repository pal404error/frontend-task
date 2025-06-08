
import React from 'react';
import { SPEAKERS_DATA, ArrowRightIcon } from '../constants';
import { Speaker } from '../types';

const SpeakerCard: React.FC<Speaker> = ({ name, title, company, imageUrl }) => (
  <div className="flex-shrink-0 w-60 bg-gray-800 rounded-lg shadow-lg overflow-hidden text-white">
    <img src={imageUrl} alt={name} className="w-full h-60 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-gray-300">{title}</p>
      <p className="text-xs text-gray-400">{company}</p>
    </div>
  </div>
);

export const FeaturedSpeakers: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-cyan">Meet Our Featured Speakers</h2>
          <a href="#" className="text-custom-cyan hover:text-cyan-300 font-semibold flex items-center transition-colors">
            Show All Speakers <ArrowRightIcon className="ml-2" />
          </a>
        </div>
        <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4">
          {SPEAKERS_DATA.map((speaker: Speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
           {/* Add a few more for scrolling illusion if needed */}
          {SPEAKERS_DATA.slice(0,2).map((speaker: Speaker, index: number) => (
            <SpeakerCard key={`extra-${index}`} {...speaker} imageUrl={`https://picsum.photos/seed/speakerextra${index}/200/200`} />
          ))}
        </div>
      </div>
    </section>
  );
};
