"use client"

import Image from "next/image"
import { customLoader } from "@/lib/customLoader";

function HomePageVideoText() {
  const contents = [
    {
      boldText: "6000+",
      thinText: "участников - девелоперов и владельцев коммерческой недвижимости.",
      icon: "/6000+.png"
    },
    {
      boldText: "9000+",
      thinText: "посетителей, потенциальных арендаторов и инвесторов",
      icon: "/9000+.png"
    },
    {
      boldText: "25+",
      thinText: "Стран, из которых приедут бренды",
      icon: "/25+.png"
    },
    {
      boldText: "500+",
      thinText: "международных брендов",
      icon: "/500+.png"
    },
    {
      boldText: "1000+",
      thinText: "предложений объектов коммерческой недвижимости из Узбекистана и стран Центральной Азии",
      icon: "/100+.png"
    },
    {
      boldText: "50+",
      thinText: "международных экспертов, которые поделятся трендами развития рынка на ближайшие 5 лет",
      icon: "/50+.png"
    },
  ];
  
  return (
    <div className="self-center min-[950px]:max-w-[80%] grid grid-cols-1 md:grid-cols-2 gap-6">
      {contents.map((content, index) => (
        <div 
          key={index} 
          className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 max-w-[400px]"
        >
          <div className="w-12 h-12 flex-shrink-0 relative">
            <Image 
              src={content.icon} 
              alt={`${content.boldText} icon`}
              className="w-full h-full object-contain"
              width={48}
              height={48}
              loader={customLoader}
            />
          </div>
          <div>
            <h2 className="text-[2.5rem] font-bold text-[#eaeaea] leading-tight mb-2">
              {content.boldText}
            </h2>
            <hr className="w-[60%] h-[5px] bg-[#095d66] mb-2"/>
            <p className="text-[1rem] text-[#eaeaea] whitespace-pre-line leading-relaxed">
              {content.thinText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { HomePageVideoText };
