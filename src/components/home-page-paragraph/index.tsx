"use client"

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { customLoader } from '@/lib/customLoader';

function HomePageParagraph() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center w-[80%] mt-2">
      <div className="relative w-[250px] h-[60px] mb-4">
        <Image 
          src="/logo-uzmall.png" 
          alt="UzMall Logo"
          fill
          className="object-contain"
          loader={customLoader}
          priority
        />
      </div>
      <p className="text-[1.5rem] min-[950px]:text-[2rem] font-bold text-white text-center">
        {t('HomePageParagraph.description')}
      </p>
    </div>
  );
}

export { HomePageParagraph };
