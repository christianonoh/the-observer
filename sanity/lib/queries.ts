import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  ...,
  author->,
  categories[]->,
  "placeHolder": mainImage.asset->{"blurHash":metadata.lqip}
  } | order(publishedAt desc)`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body,
    "placeHolder": mainImage.asset->{"blurHash":metadata.lqip}
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
