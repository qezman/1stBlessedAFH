import { ArticleHero } from "../components/blog/ArticleHero";
import { ArticleBody } from "../components/blog/ArticleBody";
import { RelatedPosts } from "../components/blog/RelatedPosts";
import { BlogCTA } from "../components/blog/BlogCTA";
import { ARTICLE, RELATED_POSTS } from "../components/blog/blogData";

export function BlogPost() {
  return (
    <main>
      <ArticleHero post={ARTICLE} />
      <ArticleBody post={ARTICLE} />
      <RelatedPosts posts={RELATED_POSTS} />
      <BlogCTA
        label="Take the next step"
        heading={"Have more questions?\nWe're happy to talk."}
        sub="No phone trees, no intake forms. Just a real conversation about what's right for your family."
      />
    </main>
  );
}
