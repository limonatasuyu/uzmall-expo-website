"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { customLoader } from "@/lib/customLoader";
import Image from "next/image";

interface HomePageTopLeftProps {
  handlePurposeClick: (e: React.MouseEvent, purpose: string) => void;
}

function HomePageTopLeft({ handlePurposeClick }: HomePageTopLeftProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:max-w-[50vw] flex flex-col">
      <div className="flex flex-col gap-6 mt-8">
        <div className="relative w-screen sm:w-full h-auto aspect-[1100/170] px-4 sm:px-0">
          <Image
            src="/logo-1-cropped.png"
            alt="UzMall Logo"
            width={1100}
            height={500}
            className="w-full h-auto max-w-[350px] object-contain [filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(395%)_hue-rotate(140deg)_brightness(92%)_contrast(101%)]"
            loader={customLoader}
            priority
          />
        </div>
        <p className="text-[#127584] text-left text-2xl sm:text-4xl max-w-[550px] leading-tight whitespace-pre-line px-4 sm:px-0 font-semibold">
          {t("HomePageTopLeft.paragraph")}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 relative z-50 px-4 sm:px-0 mt-4">
        <Button
          onClick={(e: React.MouseEvent) => handlePurposeClick(e, "represent")}
          className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-4 sm:py-6 bg-[#0d8995] text-white font-semibold hover:bg-[#0d8995]/50 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          {t("HomePageTopLeft.participantButton")}
        </Button>
        <Button
          onClick={(e: React.MouseEvent) => handlePurposeClick(e, "visitor")}
          className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-4 sm:py-6 bg-[#15bacc] text-white font-semibold hover:bg-[#15bacc]/50 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          {t("HomePageTopLeft.visitorButton")}
        </Button>
      </div>
      <div className="relative w-full h-auto aspect-[2/1] px-4 sm:px-0 mt-8">
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <Image
              src="/date-icon.png"
              alt="Date Icon"
              width={65}
              height={65}
              loader={customLoader}
              className="[filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(395%)_hue-rotate(140deg)_brightness(92%)_contrast(101%)]"
            />
            <div className="text-[#127584] text-4xl sm:text-5xl font-bold">
              {t("HomePageTopLeft.date")}
            </div>
          </div>

          <div className="flex gap-4 items-center mt-4">
            <Image
              src="/time-icon.png"
              alt="Time Icon"
              width={40}
              height={40}
              loader={customLoader}
              className="[filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(395%)_hue-rotate(140deg)_brightness(92%)_contrast(101%)]"
            />
            <div className="text-[#0d8995] text-xl sm:text-2xl">{t("HomePageTopLeft.time")}</div>
            <Image
              src="/location-icon.png"
              alt="Location Icon"
              width={40}
              height={40}
              loader={customLoader}
              className="[filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(395%)_hue-rotate(140deg)_brightness(92%)_contrast(101%)]"
            />
            <div className="text-[#0d8995] text-xl sm:text-2xl">{t("HomePageTopLeft.location")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomePageTopLeft };
