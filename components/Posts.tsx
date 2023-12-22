// ./nextjs-app/app/_components/Posts.tsx

import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { formatDate } from "@/utils";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  const title = posts.length === 0 ? `0 Post` : `${posts.length} Posts`;

  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="text-2xl p-4 font-bold">{title}</h1>
      <section className="grid grid-cols-1 md:grid-cols-2  gap-12">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`blog/${post.slug.current}`}
            className=" col-span-1"
            as={`blog/${post.slug.current}`}
          >
            <div className="relative w-full h-80 inline-block rounded-t-3xl">
              <div className="absolute top-0 left-0 z-0 w-full h-full rounded-t-3xl from-transparent bg-gradient-to-b to-dark/90" />
              {post.mainImage && (
                <Image
                  src={urlForImage(post.mainImage).url()}
                  alt={
                    post.mainImage.alt
                      ? post.mainImage.alt
                      : `Cover Image for ${post.title}`
                  }
                  fill
                  className="object-cover object-center w-full h-full -z-10 rounded-t-3xl"
                  placeholder="blur"
                  blurDataURL={post.placeHolder.blurHash}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              <div className="absolute bottom-0 w-full p-4 text-white flex justify-between items-end ">
                <span>
                  <h3 className="text-2xl font-bold ">{post.title}</h3>
                  <p>
                    {post.author && post.author.name} -{" "}
                    {formatDate(
                      post.publishedAt ? post.publishedAt : post._createdAt
                    )}
                  </p>
                </span>
                {post.categories?.length > 0 && (
                  <span className="px-3 py-1 text-xs text-dark bg-primary rounded-xl whitespace-nowrap">
                    {post.categories[0].title}
                  </span>
                )}
              </div>
            </div>
            <h2>{post.title}</h2>
          </Link>
        ))}
      </section>
    </main>
  );
}

// export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
//   const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

//   console.log(posts);

//   return (
//     <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
//       <h1 className="text-2xl p-4 font-bold">{title}</h1>
//       {posts.map((post) => (
//         <Link
//           key={post._id}
//           href={`blog/${post.slug.current}`}
//           className="p-4 hover:bg-blue-50"
//         >
//           <h2>{post.title}</h2>
//         </Link>
//       ))}
//     </main>
//   );
// }
