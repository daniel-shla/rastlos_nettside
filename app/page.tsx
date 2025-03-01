"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Shortcuts from "@/components/Shortcuts";
import Image from "next/image";
import { useTheme } from "@/components/ThemeContext";
import ThemedContainer from "@/components/ThemedContainer";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { isDark, isLight, getThemedImage } = useTheme();
  const adventureImages = [
    "public/random1.jpg", // Replace with your image filenames in public/adventures
    "public/random2.jpg",
    "public/random3.jpg",
    "public/random4.jpg",
    "public/random5.jpg",
    "public/random6.jpg",
    "public/random7.jpg",
    "public/random8.jpg",
    "public/random9.jpg",
    "public/random10.jpg",
    "public/random11.jpg",
    "public/random12.jpg",
  ];

  useEffect(() => {
    // Redirect to the About page
    router.push('/about');
  }, [router]);
  
  // Return an empty div as this page will redirect immediately
  return <div></div>;
}