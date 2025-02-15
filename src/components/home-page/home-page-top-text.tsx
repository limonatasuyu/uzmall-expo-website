"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { customLoader } from "@/lib/customLoader";
import Image from "next/image";

interface HomePageTopTextProps {
	handlePurposeClick: (e: React.MouseEvent, purpose: string) => void;
}

function HomePageTopText({ handlePurposeClick }: HomePageTopTextProps) {
	const { t, i18n } = useTranslation();

	const englishBannerPath = "/banner-en.png";
	const russianBannerPath = "/banner-ru.png";

	const bannerPath = i18n.language === 'ru' ? russianBannerPath : englishBannerPath;

	return (
		<div className="w-full lg:max-w-[50vw] flex flex-col -mt-20 min-[950px]:-mt-16">
			<div className="relative w-full h-auto aspect-[1000/600] mb-6">
				<Image
					src={bannerPath}
					alt="UzMall Logo"
					width={1100}
					height={1100}
					className="w-full h-full object-contain [filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(395%)_hue-rotate(140deg)_brightness(92%)_contrast(101%)]"
					loader={customLoader}
					priority
				/>
			</div>
			<div className="flex flex-col sm:flex-row items-center gap-4 min-[550px]:-mt-20 -mt-16">
				<Button
					onClick={(e: React.MouseEvent) => handlePurposeClick(e, "represent")}
					className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-6 sm:py-8 bg-[#0d8995] text-white font-semibold hover:from-[#0d8995] hover:to-[#15bacc] transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
				>
					{t("HomePageTopText.participantButton")}
				</Button>
				<Button
					onClick={(e: React.MouseEvent) => handlePurposeClick(e, "visitor")}
					className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-6 sm:py-8 bg-[#15bacc] text-white font-semibold hover:from-[#0d8995] hover:to-[#15bacc] transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
				>
					{t("HomePageTopText.visitorButton")}
				</Button>
			</div>
		</div>
	);
}

export { HomePageTopText };
