import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Affan Ahmad | Frontend Developer in Nagpur | React & Next.js Expert",
  description:
    "Affan Ahmad is a Frontend Developer specializing in React.js, Next.js, Shopify, and SEO. Based in Nagpur, India. Available for freelance and full-time projects.",
  keywords: [
    "Frontend Developer Nagpur",
    "React Developer India",
    "Next.js Developer",
    "Shopify Developer",
    "MERN Stack Developer",
  ],
  openGraph: {
    title: "Affan Ahmad Portfolio",
    description: "Frontend Developer specializing in React & Next.js",
    url: "https://yourdomain.com",
    siteName: "Affan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
