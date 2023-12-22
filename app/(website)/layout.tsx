import type { Metadata } from "next";
import "/styles/globals.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { token } from "@/sanity/lib/fetch";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "The Observer",
  description:
    "Discover a wealth of insights and stories on diverse topics. Dive into a world of knowledge and experiences through this engaging personal blog.",
  authors: {
    name: "Christian Onoh",
    url: "https://github.com/christianonoh",
  },
};

const PreviewProvider = dynamic(
  () => import("@/components/preview/PreviewProvider")
);

export default function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const draftModeEnabled = draftMode().isEnabled;

  const layout = (
    <div className="">
      <Suspense>
        <Header isDraftMode={draftModeEnabled} />
      </Suspense>
      <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );

  if (draftModeEnabled && token) {
    return <PreviewProvider token={token!}>{layout}</PreviewProvider>;
  }

  return layout;
}
