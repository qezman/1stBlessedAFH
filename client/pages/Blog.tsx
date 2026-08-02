import React, { useState } from 'react';
import { blogPosts } from '../data/blog';
import { BlogCard } from '../components/blog/BlogCard';
import { SectionHeader } from '../components/ui/SectionHeader';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'FAMILY GUIDES', 'CARE & EDUCATION'];

  const filteredPosts =
    selectedCategory === 'ALL'
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <main className="pt-24 pb-20">
      {/* Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-3">
            RESOURCES & ARTICLES
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Family Care & Senior Living Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical advice, checklists, and guides from our caregivers to help your family make informed senior care decisions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-navy-800 text-white shadow-md'
                    : 'bg-white text-navy-950/70 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
