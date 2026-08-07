import { draftMode } from "next/headers";
import { revalidateTag } from "next/cache";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const location = slug ? `/blog/${slug}` : "/blog";

  const draft = await draftMode();
  draft.disable();
  revalidateTag("sanity");

  return new Response(null, {
    status: 307,
    headers: {
      Location: location,
      "Set-Cookie": `sanity-preview-perspective=; Path=/; SameSite=Lax; Max-Age=0`,
    },
  });
}
