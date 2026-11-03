import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your domain so link previews use absolute URLs.
  // On Vercel this falls back to the project's production URL automatically.
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title,
  description: profile.tagline,
  openGraph: {
    title,
    description: profile.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
};

// Applies the saved theme before first paint to avoid a light/dark flash.
const themeScript = `
try {
  var t = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", t);
} catch (e) {
  document.documentElement.setAttribute("data-theme", "dark");
}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
