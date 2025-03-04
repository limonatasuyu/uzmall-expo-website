"use client"

import Image from "next/image"
import { customLoader } from "@/lib/customLoader";
import { useTranslation } from 'react-i18next';

function HomePageStats() {
  const { t } = useTranslation();

  const contents = [
    {
      key: "developers",
      icon: "/6000+.png"
    },
    {
      key: "visitors",
      icon: "/9000+.png"
    },
    {
      key: "countries",
      icon: "/50+planes.png"
    },
    {
      key: "brands",
      icon: "/500+.png"
    },
    {
      key: "properties",
      icon: "/100+.png"
    },
    {
      key: "experts",
      icon: "/50+.png"
    },
  ];
  
  return (
    <div className="self-center min-[950px]:max-w-[80%] grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 rounded-xl backdrop-blur-sm">
      {contents.map((content) => {
        const boldText = t(`HomePageStatsText.items.${content.key}.boldText`);
        const thinText = t(`HomePageStatsText.items.${content.key}.thinText`);

        return (
          <div 
            key={content.key} 
            className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 max-w-[400px]"
          >
            <div className="w-12 h-12 flex-shrink-0 relative">
              <Image 
                src={content.icon} 
                alt={`${boldText} icon`}
                className="w-full h-full object-contain"
                width={48}
                height={48}
                loader={customLoader}
              />
            </div>
            <div>
              <h2 className="text-[3rem] font-bold text-[#095d66] leading-tight mb-2">
                {boldText}
              </h2>
              <hr className="w-[60%] h-[5px] bg-[#095d66] mb-2"/>
              <p className="text-[1rem] font-semibold text-[#095d66] whitespace-pre-line leading-relaxed">
                {thinText}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { HomePageStats };
