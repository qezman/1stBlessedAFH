import type { Metadata } from "next";

export const SITE_URL = new URL("https://1stblessedafh.com");
const SITE_NAME = "1st Blessed Adult Family Home";
const DEFAULT_IMAGE = "/hero-img.jpg";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: DEFAULT_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_IMAGE],
    },
  };
}
