
import React from 'react';
import { NEWS_ARTICLES_DATA, ArrowRightIcon } from '../constants';
import { NewsArticle } from '../types';

const FeaturedNewsArticle: React.FC<NewsArticle> = ({ title, category, date, imageUrl, summary }) => (
  <div className="group">
    <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
    <span className="text-xs font-semibold text-custom-cyan uppercase tracking-wider">{category} - {date}</span>
    <h3 className="mt-1 text-2xl font-bold text-white group-hover:text-custom-cyan transition-colors">{title}</h3>
    {summary && <p className="mt-2 text-gray-400 text-sm">{summary}</p>}
  </div>
);

const NewsListItem: React.FC<NewsArticle> = ({ title, category, date }) => (
  <div className="py-4 border-b border-gray-700 group">
    <span className="text-xs font-semibold text-custom-cyan uppercase tracking-wider">{category} - {date}</span>
    <h4 className="mt-1 text-md font-semibold text-gray-200 group-hover:text-white transition-colors">{title}</h4>
  </div>
);

export const LatestNews: React.FC = () => {
  const featuredArticle = NEWS_ARTICLES_DATA.find(article => article.isFeatured);
  const otherArticles = NEWS_ARTICLES_DATA.filter(article => !article.isFeatured);

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Latest News</h2>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            {otherArticles.slice(0, 4).map(article => ( // Show first 4 small articles
              <NewsListItem key={article.id} {...article} />
            ))}
             <a href="#" className="mt-6 inline-flex items-center font-semibold text-custom-cyan hover:text-cyan-300 transition-colors">
              Show All News <ArrowRightIcon className="ml-2" />
            </a>
          </div>
          <div className="lg:col-span-2">
            {featuredArticle && <FeaturedNewsArticle {...featuredArticle} />}
          </div>
        </div>
      </div>
    </section>
  );
};
