"use client";

import Post from "@/components/Post";
import { useParams } from "next/navigation";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postQuery } from "@/sanity/lib/queries";

export default function PreviewPost({ post }: { post: SanityDocument }) {
  const params = useParams();
  const [data] = useLiveQuery(post, postQuery, params);

  return <Post post={data} />;
}

// "use client";

// import dynamic from "next/dynamic";

// // Re-exported components using next/dynamic ensures they're not bundled
// // and sent to the browser unless actually used, with draftMode().enabled.

// export default dynamic(() => import("./Post"));
