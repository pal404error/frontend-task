
import React from 'react';
import { TESTIMONIALS_DATA, QuoteIcon } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, company, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
    <div className="md:w-2/5">
      <img src={imageUrl} alt={`Event scene related to ${name}'s testimonial`} className="w-full h-48 md:h-full object-cover"/>
    </div>
    <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
      <QuoteIcon className="w-8 h-8 text-custom-cyan mb-4" />
      <blockquote className="text-lg text-custom-gray-text mb-4 italic">"{quote}"</blockquote>
      <p className="font-bold text-custom-blue-dark">{name}</p>
      <p className="text-sm text-custom-cyan">{company}</p>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-custom-gray-lightBg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-custom-blue-dark mb-12">They've Attended Our Events</h2>
        <div className="space-y-12">
          {TESTIMONIALS_DATA.map((testimonial: Testimonial, index: number) => (
            // Alternate layout for visual variety - not in original image, but good for UX
            <div key={testimonial.id} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-2/5">
                 <img src={testimonial.imageUrl} alt={`Event scene related to ${testimonial.name}'s testimonial`} className="w-full h-48 md:h-full object-cover rounded-l-lg md:rounded-l-none md:rounded-r-lg if index % 2 != 0, else md:rounded-r-none md:rounded-l-lg "/>
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-white rounded-r-lg md:rounded-r-none md:rounded-l-lg if index % 2 != 0, else md:rounded-l-none md:rounded-r-lg shadow-lg">
                <QuoteIcon className="w-8 h-8 text-custom-cyan mb-4" />
                <blockquote className="text-lg text-custom-gray-text mb-4 italic">"{testimonial.quote}"</blockquote>
                <p className="font-bold text-custom-blue-dark">{testimonial.name}</p>
                <p className="text-sm text-custom-cyan">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
