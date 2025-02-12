"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { customLoader } from "@/lib/customLoader";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export const ParallaxPartners = () => {
  const { t } = useTranslation();
  
  const partners = [
    
    {
      link: "#",
      image: "/partners-1.png",
    },
    //{
    //  link: "#",
    //    image: "/partners-2.png",
    //},
    {
      link: "#",
      image: "/partners-3.png",
    },
    {
      link: "#",
      image: "/partners-4.png",
    },
    {
      link: "#",
      image: "/logo-bright.png",
    },
    {
      link: "#",
      image: "/logo-fashion-retail-management.png",
    },
    {
      link: "#",
      image: "/logo-lynks.png",
    },
    {
      link: "#",
      image: "/logo-marketing-uz.png",
    },
    {
      link: "#",
      image: "/logo-mpa.png",
    },
    {
      link: "#",
      image: "/logo-natmall-expo.png",
    },
    {
      link: "#",
      image: "/logo-oca.png",
    },
    {
      link: "#",
      image: "/logo-tuyap.png",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="min[450px]:text-4xl text-3xl md:text-[2.5rem] font-bold text-[#095d66] text-center mb-12">
          {t("HomePagePartners.title")}
        </h2>
        
        <div className="block md:hidden"> {/* Mobile Swiper */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={'auto'}
            className="w-full"
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              550: {
                slidesPerView: 2
              }
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index as number} className="w-full">
                <div className="bg-white backdrop-blur-sm rounded-xl p-6 hover:bg-white/70 transition-all duration-300 h-full">
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={partner.image}
                      alt={t("HomePagePartners.partnerLogoAlt")}
                      fill
                      className="object-contain"
                      loader={customLoader}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Desktop Grid */}
          {partners.map((partner, index) => (
            <div 
              key={index as number}
              className="bg-white backdrop-blur-sm rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={partner.image}
                  alt={t("HomePagePartners.partnerLogoAlt")}
                  fill
                  className="object-contain"
                  loader={customLoader}
                  sizes="(max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 