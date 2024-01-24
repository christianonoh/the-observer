"use client";

import Image from "next/image";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { IdealImage } from "./ImageBox";
import { Image as ImageType } from "sanity";

export default function Post({ post }: { post: SanityDocument }) {
  // console.log(post.body);
  return (
    <main className="container mx-auto prose prose-lg p-4">
      {post?.title ? <h1>{post.title}</h1> : <h1>Untitled</h1>}
      {post?.mainImage ? (
        <div className="relative w-full h-80 md:h-96 inline-block rounded-t-3xl">
          <Image
            className="object-contain object-center w-full h-full -z-10 rounded-t-3xl"
            src={urlForImage(post.mainImage).url()}
            placeholder="blur"
            fill
            alt="Lady"
            blurDataURL={post.placeHolder.blurHash}
          />
        </div>
      ) : null}
      {post?.body ? (
        <PortableText
          value={post.body}
          components={{
            types: {
              image: ({
                value,
              }: {
                value: ImageType & { alt?: string; caption?: string };
              }) => {
                return (
                  <div className="my-6 space-y-2">
                    <IdealImage image={value} />
                    {value?.alt && (
                      <div className="font-sans text-sm text-gray-600">
                        {value.alt}
                      </div>
                    )}
                  </div>
                );
              },
            },
          }}
        />
      ) : null}
    </main>
  );
}
