"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { customLoader } from '@/lib/customLoader';

interface ImageCard {
  title: string;
  imageUrl: string;
}

const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 600;

export default function HomePageStatsImages() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const photos: ImageCard[] = [
    {
      title: t('HomePageStatImages.images.stats'),
      imageUrl: '/stats-image-1.jpg',
    },
    {
      title: t('HomePageStatImages.images.stats'),
      imageUrl: '/stats-image-2.jpg',
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-0 p-4 h-min max-w-1/2   overflow-hidden relative">
      <div 
        className={`
          relative rounded-lg overflow-hidden shadow-lg
          transition-all duration-300 ease-in-out w-[250px] aspect-square
          ${hoveredIndex === 0 ? 'w-[300px] z-10' : hoveredIndex !== null ? 'w-[100px]' : ''}
          hidden min-[950px]:block
        `}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <Image
          src={photos[0].imageUrl}
          alt={photos[0].title}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          className={"object-cover h-full w-full"}
          loader={customLoader}
        />
      </div>
      <div 
        className={`
          relative rounded-lg overflow-hidden shadow-lg aspect-square
          transition-all duration-300 ease-in-out w-[250px]
          ${hoveredIndex === 1 ? 'w-[300px] z-10' : hoveredIndex !== null ? 'w-[100px]' : ''}
        `}
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <Image
          src={photos[1].imageUrl}
          alt={photos[1].title}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          className={"object-cover h-full w-full"}
          loader={customLoader}
        />
      </div>
    </div>
  );
}

export { HomePageStatsImages }