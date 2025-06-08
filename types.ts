
export interface NavLink {
  label: string;
  href: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  imageUrl: string;
}

export interface PromoCardItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface KeyTopicItem {
  id: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

export interface NewsArticle {
  id: string;
  category: string;
  date: string;
  title: string;
  imageUrl?: string; // Optional for list items
  isFeatured?: boolean;
  summary?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
  imageUrl: string; // Image of the event/crowd
}

export interface PastAttendee {
  id: string;
  name: string;
}

export interface SponsorInfo {
  id: string;
  name: string;
  logoUrl: string;
}

export interface IndustryTrend {
  id: string;
  name: string;
}

export interface RelatedEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
}
