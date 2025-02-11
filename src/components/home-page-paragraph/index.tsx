"use client"

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { customLoader } from '@/lib/customLoader';

function HomePageParagraph() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-[950px]:flex-row items-center justify-center w-[95%] max-w-[1400px] mx-auto gap-10 min-[950px]:gap-16">
      <div className="relative w-[350px] h-[90px] min-[950px]:w-[400px] min-[950px]:h-[100px]">
        <Image 
          src="/logo-uzmall.png" 
          alt="UzMall Logo"
          fill
          className="object-contain"
          loader={customLoader}
          priority
        />
      </div>
      <p className="font-century-gothic text-3xl min-[950px]:text-5xl font-bold text-white/80 select-none hover:text-white/90 transition-all duration-300 text-center min-[950px]:text-left max-w-[800px]">
        {t('HomePageParagraph.description')}
      </p>
    </div>
  );
}

export { HomePageParagraph };
