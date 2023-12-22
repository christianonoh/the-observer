"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postsQuery } from "@/sanity/lib/queries";
import Posts from "./Posts";

export default function PreviewPosts({
  posts = [],
}: {
  posts: SanityDocument[];
}) {
  // console.log(posts);
  const [data] = useLiveQuery(posts, postsQuery);

  return <Posts posts={data} />;
}

// "use client";

// import dynamic from "next/dynamic";

// // Re-exported components using next/dynamic ensures they're not bundled
// // and sent to the browser unless actually used, with draftMode().enabled.

// export default dynamic(() => import("./Posts"));
