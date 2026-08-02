import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blog';
import { SectionHeader } from '../ui/SectionHeader';
import { BlogCard } from '../blog/BlogCard';
import { Button } from '../ui/Button';

export const BlogPreview: React.FC = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAMILY GUIDES & BLOG"
          title="Insights & Guidance for Senior Care Decisions"
          subtitle="Articles, advice, and checklists written by our care team to help families navigate senior care with clarity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/blog" variant="primary" size="md">
            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
