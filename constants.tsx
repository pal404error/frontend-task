
import React from 'react';
import { NavLink, Speaker, PromoCardItem, KeyTopicItem, StatItem, Partner, NewsArticle, Testimonial, PastAttendee, SponsorInfo, IndustryTrend, RelatedEvent } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Event Details', href: '#' },
  { label: 'Speakers', href: '#' },
  { label: 'Sponsors', href: '#' },
  { label: 'Venue', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export const SPEAKERS_DATA: Speaker[] = [
  { id: '1', name: 'Naser Al Kaabi', title: 'CEO', company: 'Alsertal Group', imageUrl: 'https://picsum.photos/seed/speaker1/200/200' },
  { id: '2', name: 'Ahmed Yousry', title: 'VP Engineering', company: 'ACWA Power', imageUrl: 'https://picsum.photos/seed/speaker2/200/200' },
  { id: '3', name: 'Oren Heymans', title: 'CTO', company: 'Entegris', imageUrl: 'https://picsum.photos/seed/speaker3/200/200' },
  { id: '4', name: 'Anton Borodastov', title: 'Lead Scientist', company: 'Membranium', imageUrl: 'https://picsum.photos/seed/speaker4/200/200' },
  { id: '5', name: 'Ignacio Rodriguez', title: 'Director', company: 'DESALA', imageUrl: 'https://picsum.photos/seed/speaker5/200/200' },
  { id: '6', name: 'Lars Späth', title: 'Consultant', company: 'savant-Geiger GmbH', imageUrl: 'https://picsum.photos/seed/speaker6/200/200' },
];

export const PROMO_CARD_DATA: PromoCardItem[] = [
  { id: '1', title: 'View Program', description: 'Discover the highlights of the event', href: '#' },
  { id: '2', title: 'Connect With Us', description: 'Get your questions answered by our team', href: '#' },
  { id: '3', title: 'Become a Partner', description: 'Join as a sponsor and reserve your booth', href: '#' },
];

export const KEY_TOPICS_DATA: KeyTopicItem[] = [
  { id: '1', title: 'Evaluating financial strategies and public-private partnership models', description: 'Exploring market-driven finance and public-private partnerships in desalination funding, with a focus on risk mitigation.' },
  { id: '2', title: 'Exploring innovative brine management and mineral recovery systems', description: 'Utilise high-recovery crystallizers, electrochemical processes, and ion-exchange resins to extract valuable solids and minimise waste streams.' },
  { id: '3', title: 'Utilising digital tools for real-time monitoring and predictive maintenance', description: 'Harness AI-driven SCADA, sensor fusion, and anomaly detection to forecast membrane fouling, optimise dosing, and extend equipment lifespan.' },
  { id: '4', title: 'Enhancing process efficiency with advanced desalination technologies', description: 'Discover how optimising desalination processes with cutting-edge technologies, such as hybrid systems and membrane distillation, improves energy efficiency.' },
  { id: '5', title: 'Latest advancements in membrane technologies and clean energy integration', description: 'Use advanced membrane materials with superior flux and rejection, alongside clean or hybrid energy grids, for efficient, low-carbon desalination.' },
  { id: '6', title: 'Case studies and regulatory updates on sustainable water management', description: 'Gain insights into end-user experiences and regulatory updates that promote sustainable water practices and reduce ecological impacts.' },
];

export const STATS_DATA: StatItem[] = [
  { id: '1', value: '100+', label: 'Industry Topics' },
  { id: '2', value: '8+', label: 'Networking Events' },
  { id: '3', value: '50+', label: 'Leading Experts' },
  { id: '4', value: '20+', label: 'Q&A Sessions' },
];

export const PARTNERS_DATA: Partner[] = [
  { id: '1', name: 'Marafiq', logoUrl: 'https://picsum.photos/seed/partner1/150/60?grayscale' },
  { id: '2', name: 'Ministry of Energy', logoUrl: 'https://picsum.photos/seed/partner2/150/60?grayscale' },
  { id: '3', name: 'Nama Water', logoUrl: 'https://picsum.photos/seed/partner3/150/60?grayscale' },
  { id: '4', name: 'AEWA', logoUrl: 'https://picsum.photos/seed/partner4/150/60?grayscale' },
  { id: '5', name: 'EWEC', logoUrl: 'https://picsum.photos/seed/partner5/150/60?grayscale' },
  { id: '6', name: 'Kahramaa', logoUrl: 'https://picsum.photos/seed/partner6/150/60?grayscale' },
];

export const NEWS_ARTICLES_DATA: NewsArticle[] = [
  { id: 'main', category: 'INSIGHTS', date: '7 Apr 2025', title: 'AI Rainmakers: UAE\'s High-Tech Bet to Reinvent Water Security', imageUrl: 'https://picsum.photos/seed/newsmain/800/500', isFeatured: true, summary: 'UAE turns to AI-powered cloud seeding to cut desalination reliance and reshape global water strategies.' },
  { id: '1', category: 'INSIGHTS', date: '7 Apr 2025', title: 'Permian Breakthrough Turns Oilfield Wastewater into a Vital Resource' },
  { id: '2', category: 'REGULATORY', date: '19 Mar 2025', title: 'Dubai\'s Desalination Leap Redefines Gulf\'s Clean Water Future' },
  { id: '3', category: 'MARKET TRENDS', date: '10 Mar 2025', title: 'Gulf Nations Fast-Track Desalination in Race for Water Security' },
  { id: '4', category: 'PARTNERSHIPS', date: '26 Feb 2025', title: 'Gulf Utility Game Changer: ACWA Power\'s $693M Power Move' },
  { id: '5', category: 'TECHNOLOGY', date: '18 Feb 2025', title: 'UAE turns to AI-powered cloud seeding to cut desalination reliance and reshape global water strategies.' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: '1', quote: 'I met new parties that were active in this sector.', name: 'Kelbij star', company: 'Deltares', imageUrl: 'https://picsum.photos/seed/testimonial1/600/400' },
  { id: '2', quote: 'It offered ideas for applying new technologies across the entire water industry value chain.', name: 'Matthijs Stel', company: 'Evides', imageUrl: 'https://picsum.photos/seed/testimonial2/600/400' },
  { id: '3', quote: 'It proved fantastic for sharing knowledge and discovering innovative products.', name: 'David Hurley', company: 'AVK UK', imageUrl: 'https://picsum.photos/seed/testimonial3/600/400' },
];

export const EXPERT_SPEAKERS_SAMPLE: Pick<Speaker, 'name' | 'company'>[] = [
  { name: 'Maher Al Kaabi', company: 'Alserkal Group' },
  { name: 'Ahmed Yousry', company: 'ACWA Power' },
  { name: 'Oren Heymans', company: 'Entegris' },
];

export const PAST_ATTENDEES_DATA: PastAttendee[] = [
  { id: '1', name: 'Ramboll Group' },
  { id: '2', name: 'SAUR' },
  { id: '3', name: 'SmartValve' },
  { id: '4', name: 'Royal Haskoning DHV' },
  { id: '5', name: 'ENOWA.NEOM' },
  { id: '6', name: 'Flowless' },
  { id: '7', name: 'Azer Group' },
  { id: '8', name: 'Upande Limited' },
  { id: '9', name: 'Deltares' },
];

export const SPONSORS_DATA: SponsorInfo[] = [
  { id: '1', name: 'Aqua Robur', logoUrl: 'https://picsum.photos/seed/sponsorlogo1/200/100?grayscale&contrast=200&txt=AQUA%20ROBUR&txtclr=00AEEF&txtsize=20&txtfont=Arial%20Black' },
  { id: '2', name: 'Electro Scan Inc.', logoUrl: 'https://picsum.photos/seed/sponsorlogo2/200/100?grayscale&txt=electroScan%20Inc.&txtclr=333&txtsize=18' },
  { id: '3', name: 'GWF', logoUrl: 'https://picsum.photos/seed/sponsorlogo3/200/100?grayscale&txt=GWF&txtclr=0A2540&txtsize=40&txtfont=Impact' },
  { id: '4', name: 'Layermark', logoUrl: 'https://picsum.photos/seed/sponsorlogo4/200/100?grayscale&txt=LAYERMARK&txtclr=555&txtsize=24' },
  { id: '5', name: 'Mueller', logoUrl: 'https://picsum.photos/seed/sponsorlogo5/200/100?txt=MUELLER&txtclr=fff&txtbg=cc0000&txtsize=30' },
  { id: '6', name: 'Panevo', logoUrl: 'https://picsum.photos/seed/sponsorlogo6/200/100?grayscale&txt=%E2%80%A2%20PANEVO&txtclr=00AEEF&txtsize=26' },
];

export const INDUSTRY_TRENDS_DATA: IndustryTrend[] = [
  { id: '1', name: 'Brine Valorisation' },
  { id: '2', name: 'Water-Energy Nexus' },
  { id: '3', name: 'Next-Gen Membranes' },
  { id: '4', name: 'AI-Driven Systems' },
  { id: '5', name: 'Decarbonisation' },
];

export const RELATED_EVENTS_DATA: RelatedEvent[] = [
  { id: '1', title: 'Water Resource Recovery USA 2025', date: '14 - 15 April, 2025', location: 'Miami, Florida', imageUrl: 'https://picsum.photos/seed/event1/400/300' },
  { id: '2', title: 'Membrane Technology USA 2025', date: '23 - 24 July, 2025', location: 'Miami, Florida', imageUrl: 'https://picsum.photos/seed/event2/400/300' },
  { id: '3', title: 'PFAS Treatment Europe 2025', date: '28 - 29 July, 2025', location: 'Amsterdam, The Netherlands', imageUrl: 'https://picsum.photos/seed/event3/400/300' },
];

export const FOOTER_LINKS_COLUMNS = [
    {
        title: 'Event Details',
        links: [
            { label: 'Speakers', href: '#' },
            { label: 'Sponsors', href: '#' },
            { label: 'Venue', href: '#' },
            { label: 'Program', href: '#' },
            { label: 'Benefits', href: '#' },
        ]
    },
    {
        title: 'Other Events',
        links: [
            { label: 'Water Resource Recovery USA 2025', href: '#' },
            { label: 'Membrane Technology USA 2025', href: '#' },
            { label: 'PFAS Treatment Europe 2025', href: '#' },
        ]
    },
    {
        title: 'Quick Links',
        links: [
            { label: 'Register', href: '#' },
            { label: 'Benefits', href: '#' }, // Duplicated? Original has it.
            { label: 'FAQ', href: '#' },
            { label: 'Media', href: '#' }, // Moved from top level
            { label: 'Gallery', href: '#' }, // Moved from top level
        ]
    },
    {
        title: 'Contact Us',
        links: [
            { label: 'Email', href: 'mailto:info@example.com' },
            { label: 'Customer Support', href: '#' },
            { label: 'Terms and Conditions', href: '#' },
        ]
    }
];

// Simple SVG Icons
export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0L13.5 19.5M21 12H3" />
  </svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-3.75h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
  </svg>
);

export const LocationPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

export const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-12 h-12 ${className}`}>
    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
  </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={`w-10 h-10 ${className}`}>
    <path d="M13,14H11V10H13M13,17.5H11V15.5H13M10,3H14A3,3 0 0,1 17,6V10C17,11.89 15.79,13.43 14.08,13.84L14.54,15.5H12.42L11.7,13H10C8.89,13 8,12.1 8,11V6A3,3 0 0,1 10,3M6,14H4V10H6M6,17.5H4V15.5H6M3,3H7A3,3 0 0,1 10,6V7H8V6A1,1 0 0,0 7,5H3A1,1 0 0,0 2,6V11A1,1 0 0,0 3,12H4.3L3.66,13.5H5.78L6.5,11.76C7.61,12.21 8,13.23 8,14.5V17.5C8,19.16 6.66,20.5 5,20.5C3.34,20.5 2,19.16 2,17.5V15.5H4.5L2.34,10.16C2.13,9.73 2,9.23 2,8.7V6A3,3 0 0,1 3,3Z" />
 </svg>
);


export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.21 1.21 0 0013 13.25c-.05.26-.09.51-.09.77V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.3.86 3.3 3.6v5.5z" />
  </svg>
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export const ConferenceLogoSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50,10 A40,20 0 1,0 50,50 A40,20 0 0,0 50,10 Z M50,30 A20,10 0 1,1 50,50 A20,10 0 0,1 50,30 Z" transform="rotate(45 50 50)"/>
    <path d="M50,50 A40,20 0 1,0 50,90 A40,20 0 0,0 50,50 Z M50,70 A20,10 0 1,1 50,90 A20,10 0 0,1 50,70 Z" transform="rotate(45 50 50)"/>
    <text x="50" y="62" fontSize="10" textAnchor="middle" fill="white" className="font-bold tracking-tighter">D&RR</text>
  </svg>
);
