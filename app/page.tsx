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
    "public/adventures/random1.jpg", 
    "public/adventures/random2.jpg",
    "public/adventures/random3.jpg",
    "public/adventures/random4.jpg",
    "public/adventures/random5.jpg",
    "public/adventures/random6.jpg",
    "public/adventures/random7.jpg",
    "public/adventures/random8.jpg",
    "public/adventures/random9.jpg",
    "public/adventures/random10.jpg",
    "public/adventures/random11.jpg",
    "public/adventures/random12.jpg",
  ];

  useEffect(() => {
    // Redirect to the About page
    router.push('/about');
  }, [router]);
  
  // Return an empty div as this page will redirect immediately
  return <div></div>;
}