import { defineLive } from "next-sanity";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  // Pass your backend server token here
  serverToken: process.env.SANITY_API_READ_TOKEN,
  // Pass your frontend client token here
  browserToken: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
});
