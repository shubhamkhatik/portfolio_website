import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubham Khatik | Full Stack Developer",
  description:
    "Frontend Developer with 4+ years of React.js and Next.js expertise. Building scalable web applications with modern technologies.",
  keywords: [
    "Shubham Khatik",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Frontend Developer",
    "MERN Stack",
    "TypeScript",
  ],
  authors: [{ name: "Shubham Khatik" }],
  creator: "Shubham Khatik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhamkhatik.vercel.app",
    title: "Shubham Khatik | Full Stack Developer",
    description:
      "Frontend Developer with 4+ years of React.js and Next.js expertise. Building scalable web applications.",
    siteName: "Shubham Khatik Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Khatik | Full Stack Developer",
    description:
      "Frontend Developer with 4+ years of React.js and Next.js expertise.",
    creator: "@shubham_ktk",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shubham Khatik",
              url: "https://shubhamkhatik.vercel.app",
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "PreDrag System LLP",
              },
              sameAs: [
                "https://github.com/shubhamkhatik",
                "https://www.linkedin.com/in/shubhamkhatik/",
                "https://twitter.com/shubham_ktk",
                "https://dev.to/shubhamkhatik",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased noise-bg`}
      >
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
