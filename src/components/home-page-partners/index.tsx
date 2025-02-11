'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { customLoader } from '@/lib/customLoader';

function HomePagePartners() {
  const { t } = useTranslation();
  const partners = [
    {
      link: "#",
      image: "/partners-1.png",
    },
    {
      link: "#",
      image: "/partners-2.png",
    },
    {
      link: "#",
      image: "/partners-3.png",
    },
    {
      link: "#",
      image: "/partners-4.png",
    },
    {
      link: "https://buzb.uz/",
      image: "/logo-bright.png",
    },
    {
      link: "#",
      image: "/logo-mpa.png",
    },
    {
      link: "http://fashionretail.uz/",
      image: "/logo-fashion-retail-management.png",
    },
    {
      link: "https://natmall.ru/",
      image: "/logo-natmall-expo.png",
    },
    {
      link: "https://lynkspm.com/",
      image: "/logo-lynks.png",
    },
    {
      link: "https://www.ocamagazine.com/",
      image: "/logo-oca.png",
    },
    {
      link: "https://marketing.uz/",
      image: "/logo-marketing-uz.png",
    },
    {
      link: "https://www.tuyap.com.tr/",
      image: "/logo-tüyap.png",
    },
  ];

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const PartnerLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isExternal = href.startsWith('http') || href.startsWith('https');
    const className = "block w-full aspect-[3/2] relative bg-white rounded-lg p-4 transition-transform hover:scale-105";

    if (isExternal || href === '#') {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  };
  
  return (
    <div className="w-screen flex flex-col items-center py-13 mt-8">
      <div className="w-[90%] max-w-7xl mx-auto px-4">
        <h1 className="text-[2.5rem] font-bold text-white pb-8 text-center">
          {t('HomePagePartners.title')}
        </h1>
        
        <div className="block sm:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={screenWidth < 550 ? 1 : 2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={`${partner.link} ${index}`}>
                <PartnerLink href={partner.link}>
                  <Image
                    src={partner.image}
                    alt={t('HomePagePartners.partnerLogoAlt')}
                    fill
                    className="object-contain p-2"
                    loader={customLoader}
                  />
                </PartnerLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <PartnerLink key={`${partner.link} ${index}`} href={partner.link}>
              <Image
                src={partner.image}
                alt={t('HomePagePartners.partnerLogoAlt')}
                fill
                className="object-contain p-2"
                loader={customLoader}
              />
            </PartnerLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export { HomePagePartners };
