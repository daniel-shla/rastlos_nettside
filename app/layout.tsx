// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import "./mobile-enhancements.css"; // Add mobile enhancements
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from 'react';
import Shortcuts from '@/components/Shortcuts'; // Import the wrapper
import { ThemeProvider } from "@/components/ThemeContext";
import BackToTop from "@/components/BackToTop"; // Import the BackToTop component


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

// Define metadata for the site including Open Graph tags
export const metadata: Metadata = {
  title: "IFI Rastløs",
  description: "IFI Rastløs er en studentforening ved Institutt for Informatikk som arrangerer fysiske og sosiale aktiviteter for studenter.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "IFI Rastløs",
    description: "IFI Rastløs er en studentforening ved Institutt for Informatikk som arrangerer fysiske og sosiale aktiviteter for studenter.",
    url: "https://ifirastlos.no",
    siteName: "IFI Rastløs",
    images: [
      {
        url: "/lightlogo.png",
        width: 800,
        height: 800,
        alt: "IFI Rastløs Logo",
      }
    ],
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IFI Rastløs",
    description: "IFI Rastløs er en studentforening ved Institutt for Informatikk som arrangerer fysiske og sosiale aktiviteter for studenter.",
    images: ["/lightlogo.png"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Explicit Open Graph meta tags for platforms that might ignore Next.js metadata */}
        <meta property="og:image" content="https://ifirastlos.no/lightlogo.png" />
        <meta property="og:image:secure_url" content="https://ifirastlos.no/lightlogo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta name="twitter:image" content="https://ifirastlos.no/lightlogo.png" />
        <meta name="image" content="https://ifirastlos.no/lightlogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased min-h-dvh flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <Shortcuts /> {/* Shortcuts bar here */}
          <div className="flex-1">{children}</div>
          <Footer />
          <BackToTop /> {/* Add the BackToTop component */}
        </ThemeProvider>
      </body>
    </html>
  );
}