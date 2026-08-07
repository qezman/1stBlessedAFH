import { draftMode } from "next/headers";
import { revalidateTag } from "next/cache";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const perspective = searchParams.get("perspective") || "drafts";
  const location = slug ? `/blog/${slug}` : "/blog";

  const draft = await draftMode();
  draft.enable();
  revalidateTag("sanity");

  return new Response(null, {
    status: 307,
    headers: {
      Location: location,
      "Set-Cookie": `sanity-preview-perspective=${perspective}; Path=/; SameSite=Lax`,
    },
  });
}
