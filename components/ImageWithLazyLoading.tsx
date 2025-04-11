"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageWithLazyLoadingProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  quality?: number;
}

const ImageWithLazyLoading = ({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  priority = false,
  sizes,
  style,
  quality
}: ImageWithLazyLoadingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [showImage, setShowImage] = useState(priority);

  useEffect(() => {
    // Only set up IntersectionObserver if the image is not a priority image
    if (!priority) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsInView(true);
            setShowImage(true);
            observer.disconnect();
          }
        },
        { rootMargin: '200px' } // Load images 200px before they come into view
      );

      const element = document.getElementById(`image-container-${src.replace(/[^a-zA-Z0-9]/g, '-')}`);
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    }
  }, [src, priority]);

  return (
    <div
      id={`image-container-${src.replace(/[^a-zA-Z0-9]/g, '-')}`}
      className={`relative ${className} overflow-hidden`}
      style={fill ? { position: 'relative', width: '100%', height: '100%', ...style } : { ...style }}
    >
      {/* Skeleton loader */}
      {isLoading && (
        <div 
          className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md`}
          style={fill ? undefined : { width: `${width}px`, height: `${height}px` }}
        />
      )}

      {/* Only render the image if it's in view or a priority image */}
      {showImage && (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          quality={quality || 85}
          sizes={sizes}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          priority={priority}
        />
      )}
    </div>
  );
};

export default ImageWithLazyLoading; 