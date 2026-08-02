import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Facebook,
  Mail,
  Link as LinkIcon,
  Heart,
} from "lucide-react";
import { BlogCard } from "../components/blog/BlogCard";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-32 pb-20 text-center max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy-950 mb-4">
          Article Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The requested blog post could not be found.
        </p>
        <Button to="/blog" variant="primary" size="md">
          Back to Blog
        </Button>
      </main>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const copyLink = () => navigator.clipboard.writeText(window.location.href);

  const shareButtons = [
    { icon: LinkIcon, label: "Copy Link", onClick: copyLink },
    {
      icon: Facebook,
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    },
    {
      icon: Mail,
      label: "Email Article",
      href: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`,
    },
  ];

  return (
    <main className="pt-24 pb-20 bg-brand-bg">
      <section className="bg-navy-950 text-white py-16 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-xs font-semibold text-gold-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Articles
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <Badge
              variant={post.category === "FAMILY GUIDES" ? "gold" : "blue"}
            >
              {post.category}
            </Badge>
            <div className="flex items-center space-x-1 text-xs text-gray-300">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 border-t border-navy-800 pt-6 text-xs text-gray-300">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gold-500" />
              <span className="font-semibold text-white">{post.author}</span>
              <span className="text-gray-400">({post.authorRole})</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gold-500" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="hidden lg:block lg:col-span-2">
              <div className="sticky top-28 space-y-4">
                <span className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                  SHARE
                </span>
                {shareButtons.map(({ icon: Icon, label, onClick, href }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-navy-800 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      title={label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      key={label}
                      onClick={onClick}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-navy-800 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      title={label}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="lg:col-span-10 bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              <div className="mt-12 pt-8 border-t border-gray-100 bg-gold-50/60 p-6 rounded-xl flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-navy-800 text-gold-500 flex items-center justify-center font-bold flex-shrink-0">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 text-sm">
                    Written by {post.author}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {post.authorRole} at 1st Blessed Adult Family Home in
                    Everett, WA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-950 mb-8">
            Keep Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((rel) => (
              <BlogCard key={rel.slug} post={rel} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
