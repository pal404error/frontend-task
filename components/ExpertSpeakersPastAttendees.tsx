
import React from 'react';
import { EXPERT_SPEAKERS_SAMPLE, PAST_ATTENDEES_DATA, ArrowRightIcon, ConferenceLogoSvg } from '../constants';
import { PastAttendee } from '../types';
import { Speaker } from '../types';
import { Button } from './Button';


export const ExpertSpeakersPastAttendees: React.FC = () => {
  return (
    <section className="relative bg-custom-cyan text-custom-blue-dark py-16 md:py-24 overflow-hidden">
       {/* Simplified wave decoration */}
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/20 rounded-full transform rotate-12 opacity-80"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-white/15 rounded-full transform -rotate-6 opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Expert Speakers */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Expert Speakers</h3>
            <div className="space-y-4">
              {EXPERT_SPEAKERS_SAMPLE.map((speaker: Pick<Speaker, 'name' | 'company'>, index: number) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow">
                  <p className="font-semibold text-custom-blue-dark">{speaker.name}</p>
                  <p className="text-sm text-custom-gray-text">{speaker.company}</p>
                </div>
              ))}
            </div>
            <a href="#" className="mt-6 inline-flex items-center font-semibold text-custom-blue-dark hover:text-black transition-colors">
              Show More Speakers <ArrowRightIcon className="ml-2" />
            </a>
          </div>

          {/* Past Attendees */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Past Attendees</h3>
            <ul className="space-y-2 columns-2">
              {PAST_ATTENDEES_DATA.slice(0,10).map((attendee: PastAttendee) => ( // Show first 10
                <li key={attendee.id} className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-custom-blue-dark rounded-full mr-2 inline-block"></span>
                  {attendee.name}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-6 inline-flex items-center font-semibold text-custom-blue-dark hover:text-black transition-colors">
              Show More Attendees <ArrowRightIcon className="ml-2" />
            </a>
          </div>

          {/* Register Now */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center flex flex-col items-center justify-center">
            <ConferenceLogoSvg className="h-20 w-20 text-custom-cyan mx-auto mb-4" />
            <p className="text-xl font-bold text-custom-blue-dark mb-1">DESALINATION &</p>
            <p className="text-xl font-bold text-custom-blue-dark mb-6">RESOURCE RECOVERY 2025</p>
            <Button variant="secondary" size="lg" href="#">
              Register Now
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
