
import React from 'react';
import { PlayIcon } from '../constants';

export const PremierForum: React.FC = () => {
  return (
    <section className="relative bg-custom-cyan text-custom-blue-dark py-16 md:py-24 overflow-hidden">
      {/* Wave-like background element - simplified */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-white/30 rounded-full transform"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/20 rounded-full transform"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              THE PREMIER FORUM FOR NEXT-GEN DESALINATION AND RESOURCE RECOVERY SOLUTIONS
            </h2>
            <p className="mb-4 text-lg">
              Welcome to Desalination & Resource Recovery 2025, where utility leaders and desalination experts come together to explore the latest advancements in sustainable water management and resource recovery.
            </p>
            <p className="mb-4">
              The desalination industry faces challenges such as high energy consumption, costs, and environmental impacts. Innovations in advanced membranes, AI optimisation, renewable energy, and zero liquid discharge are driving energy-efficient solutions while transforming waste into valuable resources.
            </p>
            <p>
              Join us to explore groundbreaking technologies, connect with industry leaders, and shape the future of sustainable water management and resource recovery.
            </p>
          </div>
          <div className="relative group aspect-video bg-black rounded-lg shadow-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/conferencevid/800/450" 
              alt="Conference highlights" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <PlayIcon className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
