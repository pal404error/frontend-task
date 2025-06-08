
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromoCards } from './components/PromoCards';
import { FeaturedSpeakers } from './components/FeaturedSpeakers';
import { PremierForum } from './components/PremierForum';
import { KeyTopics } from './components/KeyTopics';
import { StatsBanner } from './components/StatsBanner';
import { PartnersCarousel } from './components/PartnersCarousel';
import { LatestNews } from './components/LatestNews';
import { Testimonials } from './components/Testimonials';
import { ExpertSpeakersPastAttendees } from './components/ExpertSpeakersPastAttendees';
import { Sponsors } from './components/Sponsors';
import { IndustryTrends } from './components/IndustryTrends';
import { RelatedEvents } from './components/RelatedEvents';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-custom-gray-text antialiased">
      <Header />
      <Hero />
      <PromoCards />
      <FeaturedSpeakers />
      <PremierForum />
      <KeyTopics />
      <StatsBanner />
      <PartnersCarousel />
      <LatestNews />
      <Testimonials />
      <ExpertSpeakersPastAttendees />
      <Sponsors />
      <IndustryTrends />
      <RelatedEvents />
      <Footer />
    </div>
  );
};

export default App;
