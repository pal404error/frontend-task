
import React from 'react';
import { KEY_TOPICS_DATA } from '../constants';
import { KeyTopicItem } from '../types';
import { Button } from './Button';

const TopicCard: React.FC<KeyTopicItem> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
    <h3 className="text-xl font-bold text-custom-blue-dark mb-3">{title}</h3>
    <p className="text-custom-gray-text text-sm flex-grow">{description}</p>
  </div>
);

export const KeyTopics: React.FC = () => {
  return (
    <section className="bg-custom-gray-lightBg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-custom-blue-dark mb-12">Key Topics for 2025</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {KEY_TOPICS_DATA.map((topic: KeyTopicItem) => (
            <TopicCard key={topic.id} {...topic} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="secondary" size="lg" href="#">
            View Program
          </Button>
        </div>
      </div>
    </section>
  );
};
