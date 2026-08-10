import React from "react";
import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";
import { BlogPost } from "../../data/blog";
import { Badge } from "../ui/Badge";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant={post.category === "FAMILY GUIDES" ? "gold" : "blue"}>
            {post.category}
          </Badge>
          <div className="flex items-center space-x-1 text-xs text-gray-500 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="block group-hover:text-gold-600 transition-colors"
        >
          <h3 className="text-xl font-bold text-navy-950 mb-3 leading-snug line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2 text-gray-600 font-medium">
          <User className="w-4 h-4 text-gold-500" />
          <span>{post.author}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-xs font-semibold text-navy-800 hover:text-gold-600 group-hover:translate-x-1 transition-transform"
        >
          Read Article <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </Link>
      </div>
    </article>
  );
};
