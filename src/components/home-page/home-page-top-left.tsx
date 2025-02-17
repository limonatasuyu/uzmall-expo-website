"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { customLoader } from "@/lib/customLoader";
import Image from "next/image";
import { useMemo } from "react";

interface HomePageTopLeftProps {
	handlePurposeClick: (e: React.MouseEvent, purpose: string) => void;
}

function HomePageTopLeft({ handlePurposeClick }: HomePageTopLeftProps) {
	const { t, i18n } = useTranslation();

	const englishTextBannerPath = "/home-page-top-text-en.png";
	const russianTextBannerPath = "/home-page-top-text-ru.png";

	const englishDateBannerPath = "/event-date.png";
	const russianDateBannerPath = "/event-date.png";

	const bannerPaths = useMemo(
		() => ({
			text: i18n.language === "ru" ? russianTextBannerPath : englishTextBannerPath,
			date: i18n.language === "ru" ? russianDateBannerPath : englishDateBannerPath,
		}),
		[i18n.language],
	);

	return (
		<div className="w-full lg:max-w-[50vw] flex flex-col">
			<div className="relative w-full h-auto aspect-[1000/300] px-4 sm:px-0">
				<Image
					src={bannerPaths.text}
					alt="UzMall Paragraph"
					width={1100}
					height={500}
					className="w-full h-full object-contain [filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(395%)_hue-rotate(140deg)_brightness(92%)_contrast(101%)]"
					loader={customLoader}
					priority
				/>
			</div>
			<div className="flex flex-col sm:flex-row items-center gap-4 relative z-50 px-4 sm:px-0 mt-4 sm:-mt-8">
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
			<div className="relative w-full h-auto aspect-[2/1] -mt-4 sm:-mt-8 px-4 sm:px-0">
				<Image
					src={bannerPaths.date}
					alt="UzMall Date"
					width={1100}
					height={1100}
					className="w-full h-full object-contain [filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(395%)_hue-rotate(140deg)_brightness(92%)_contrast(101%)]"
					loader={customLoader}
					priority
				/>
			</div>
		</div>
	);
}

export { HomePageTopLeft };
