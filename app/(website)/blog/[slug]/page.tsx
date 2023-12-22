import Post from "@/components/Post";
import PreviewPost from "@/components/PreviewPost";
import PreviewProvider from "@/components/preview/PreviewProvider";
import { client } from "@/sanity/lib/client";
import { sanityFetch, token } from "@/sanity/lib/fetch";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { Suspense } from "react";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function BlogPage({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }
  return <Post post={post} />;
}

// export default async function BlogPage({ params }: { params: any }) {
//   const post = await sanityFetch<SanityDocument>({ query: postQuery, params });

//   return (
//     <LiveQuery
//       enabled={draftMode().isEnabled}
//       query={postQuery}
//       initialData={post}
//       as={PreviewPost}
//     >
//       <Post post={post} />
//     </LiveQuery>
//   );
// }
