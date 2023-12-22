import Posts from "@/components/Posts";
import PreviewPosts from "@/components/PreviewPosts";
import PreviewProvider from "@/components/preview/PreviewProvider";
import { sanityFetch, token } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import Image from "next/image";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }
  return <Posts posts={posts} />;
}

// export default async function Home() {
//   const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
//   const isDraftMode = draftMode().isEnabled;

//   return (
//     <LiveQuery
//       enabled={draftMode().isEnabled}
//       query={postsQuery}
//       initialData={posts}
//       as={PreviewPosts}
//     >
//       <Posts posts={posts} />
//     </LiveQuery>
//   );
// }
