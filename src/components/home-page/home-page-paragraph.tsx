"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { customLoader } from "@/lib/customLoader";

function HomePageParagraph() {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col min-[950px]:flex-row items-center justify-center w-[95%] max-w-[1400px] mx-auto gap-10 min-[950px]:gap-16">
			<div className="relative w-[360px] h-[100px] min-[950px]:w-[410px] min-[950px]:h-[110px]">
				<Image
					src="/logo-uzmall.png"
					alt="UzMall Logo"
					fill
					className="object-contain"
					loader={customLoader}
					priority
				/>
			</div>
			<p className="font-century-gothic text-xl min-[950px]:text-3xl font-bold text-[#095d66]/80 select-none hover:text-[#095d66]/90 transition-all duration-300 text-center max-w-[800px]">
				{t("HomePageParagraph.description")}
			</p>
		</div>
	);
}

export { HomePageParagraph };
