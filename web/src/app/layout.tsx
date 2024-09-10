import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { PHProvider } from "@/app/posthog";
import dynamic from "next/dynamic";
import Github from "./_components/github";
const PostHogPageView = dynamic(() => import("./_components/PHogPageView"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "T3 Cloudflare",
  description:
    "Live demo — T3 stack on Cloudflare Pages with Cloudflare D1 in the Eastern North America (enam) region.",
  keywords: ["T3 Stack", "Cloudflare Pages", "Cloudflare D1", "Drizzle"],
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <PHProvider>
        <body>
          <TRPCReactProvider>
            <PostHogPageView />
            <Github></Github>
            {children}
          </TRPCReactProvider>
        </body>
      </PHProvider>
    </html>
  );
}
