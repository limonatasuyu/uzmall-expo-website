"use client";

import Image from 'next/image';
import { useState } from 'react';
import { customLoader } from '@/lib/customLoader';

interface ImageCard {
  title: string;
  imageUrl: string;
}

const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 600;

export default function HomePageTopImages() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const photos: ImageCard[] = [
    {
      title: 'Test Text 1',
      imageUrl: '/person-1.png',
    },
    {
      title: 'Test Text 2',
      imageUrl: '/person-2.png',
    },
    {
      title: 'Test Text 3',
      imageUrl: '/person-3.png',
    }
  ];

  return (
    <div className="hidden min-[1170px]:flex justify-center items-center gap-4 p-4 h-[600px] max-w-1/2 overflow-hidden relative">
      {photos.map((photo, index) => (
        <div 
          key={index} 
          className={`
            relative h-full rounded-lg overflow-hidden shadow-lg
            transition-all duration-300 ease-in-out w-[200px]
            ${hoveredIndex === index ? 'w-[400px] z-10' : hoveredIndex !== null ? 'w-[100px]' : ''}
          `}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className="object-cover h-full w-full"
            loader={customLoader}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-white text-lg font-medium">{photo.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export { HomePageTopImages }