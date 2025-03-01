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
    "random1.jpg", // Replace with your image filenames in public/adventures
    "random2.jpg",
    "random3.jpg",
    "random4.jpg",
    "random5.jpg",
    "random6.jpg",
    "random7.jpg",
    "random8.jpg",
    "random9.jpg",
    "random10.jpg",
    "random11.jpg",
    "random12.jpg",
  ];

  useEffect(() => {
    // Redirect to the About page
    router.push('/about');
  }, [router]);
  
  // Return an empty div as this page will redirect immediately
  return <div></div>;
}