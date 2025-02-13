"use client";

import { Button } from "@/components/ui/button";
import type { contactFormPurposes } from "@/components/contact-form";
import { useTranslation } from "react-i18next";
import { customLoader } from "@/lib/customLoader";
import Image from "next/image";

interface HomePageTopTextProps {
	contactFormRef: React.RefObject<HTMLFormElement>;
}

function HomePageTopText({ contactFormRef }: HomePageTopTextProps) {
	const { t, i18n } = useTranslation();

	const scrollToContactForm = (
		purpose: (typeof contactFormPurposes)[number],
	) => {
		const contactForm = document.querySelector("#contact-form-section");
		contactForm?.scrollIntoView({ behavior: "smooth" });
		contactFormRef.current?.setPurpose(purpose);
	};

	const englishBannerPath = "/banner-en.png";
	const russianBannerPath = "/banner-ru.png";

	const bannerPath = i18n.language === 'ru' ? russianBannerPath : englishBannerPath;

	return (
		<div className="w-full lg:max-w-[800px] flex flex-col">
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
					onClick={() => scrollToContactForm("represent")}
					className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-6 sm:py-8 bg-[#0d8995] text-white font-semibold hover:from-[#0d8995] hover:to-[#15bacc] transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
				>
					{t("HomePageTopText.participantButton")}
				</Button>
				<Button
					onClick={() => scrollToContactForm("visitor")}
					className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-6 sm:py-8 bg-[#15bacc] text-white font-semibold hover:from-[#0d8995] hover:to-[#15bacc] transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
				>
					{t("HomePageTopText.visitorButton")}
				</Button>
			</div>
			{/*<div className="relative w-[350px] h-[90px] min-[950px]:w-[400px] min-[950px]:h-[100px]">
        <Image 
          src="/logo-uzmall.png" 
          alt="UzMall Logo"
          fill
          className="object-contain"
          loader={customLoader}
          priority
        />
      </div>
			<p className="font-gothic text-[#095d66]/80 text-[3.2rem] mt-4">
				{t("HomePageTopText.description")}
			</p>
			<div className="flex flex-col min-[550px]:flex-row items-start min-[550px]:items-center gap-6 mt-6">
				<span className="font-century-gothic text-[1.8rem] font-medium text-[#095d66]/80 border-l-3 border-[#15bacc]/90 pl-4 py-1.5 hover:text-[#095d66]/90 hover:border-[#15bacc] transition-all duration-300 border-l-4 whitespace-nowrap">
					{t("HomePageTopText.date")}
				</span>
			
			</div>*/}
		</div>
	);
}

export { HomePageTopText };
