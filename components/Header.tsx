
import React from 'react';
import { NAV_LINKS, ConferenceLogoSvg } from '../constants';
import { NavLink } from '../types';
import { Button } from './Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-custom-blue-nav text-white py-4 absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <ConferenceLogoSvg className="h-10 w-10 text-custom-cyan" />
            <div className="text-sm leading-tight">
              <span className="font-bold block">DESALINATION &</span>
              <span className="block">RESOURCE RECOVERY 2025</span>
            </div>
          </a>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          {NAV_LINKS.map((link: NavLink) => (
            <a key={link.label} href={link.href} className="hover:text-custom-cyan transition-colors duration-200 text-sm font-medium">
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>
        <Button href="#" variant="primary" size="md" className="hidden md:inline-flex">
          REGISTER
        </Button>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};
