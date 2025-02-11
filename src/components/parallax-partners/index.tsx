"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { customLoader } from "@/lib/customLoader";

export const ParallaxPartners = () => {
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
      image: "/logo-tüyap.png",
    },
  ];

  return (
    <div className="w-screen flex flex-col items-center py-20">
      <div className="w-[90%] max-w-7xl mx-auto px-4">
        <h2 className="text-[2.5rem] font-bold text-white text-center mb-12">
          {t("HomePagePartners.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index as number}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={partner.image}
                  alt={t("HomePagePartners.partnerLogoAlt")}
                  fill
                  className="object-contain"
                  loader={customLoader}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 