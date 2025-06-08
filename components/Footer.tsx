
import React from 'react';
import { FOOTER_LINKS_COLUMNS, ConferenceLogoSvg, TwitterIcon, LinkedInIcon } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <ConferenceLogoSvg className="h-12 w-12 text-custom-cyan" />
              <div className="text-sm leading-tight text-white">
                <span className="font-bold block">DESALINATION &</span>
                <span className="block">RESOURCE RECOVERY 2025</span>
              </div>
            </a>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {FOOTER_LINKS_COLUMNS.map((column) => (
            <div key={column.title}>
              <h5 className="font-bold text-white uppercase tracking-wider text-sm mb-4">{column.title}</h5>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Desalination & Resource Recovery. All rights reserved.</p>
          <p>Privacy Policy | IQ International Pte. LTD</p>
        </div>
      </div>
    </footer>
  );
};
