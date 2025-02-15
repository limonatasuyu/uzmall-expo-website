"use client";
import Image from "next/image";
import { customLoader } from "@/lib/customLoader";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CREAwardsForm } from "@/components/cre-awards-page/cre-awards-page-form";
import { ParallaxProvider } from "react-scroll-parallax";
import { CreAwardsFormSlider } from "@/components/cre-awards-page/cre-awards-page-contact-slider";

export default function CREAwardsPage() {
	const { t } = useTranslation();

	return (
		<ParallaxProvider>
			<Navbar />
			<main className="min-h-screen bg-[#eaeaea]">
				<div className="relative w-full">
					{/* Background pattern */}
					<div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-10" />

					<div className="mx-auto px-4 pb-32 relative">
						<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
							{/* Logo */}
							<div className="relative w-[180px] h-[180px] mb-16 hover:scale-105 transition-transform duration-300">
								<Image
									src="/logo-uzmall.png"
									alt={t("creAwards.logoAlt")}
									fill
									className="object-contain"
									loader={customLoader}
									priority
								/>
							</div>

							<h1 className="text-4xl font-bold text-[#095d66] mb-12">
								{t("creAwards.title")}
							</h1>

							{/* Content with card-like background */}
							<div className="backdrop-blur-sm bg-[#eaeaea]/5 rounded-2xl p-8 shadow-2xl border border-white/10 mb-16">
								<div className="space-y-8 text-[#095d66]">
									<p className="text-xl leading-relaxed font-light">
										{t("creAwards.description1")}
									</p>
									<p className="text-xl leading-relaxed font-light">
										{t("creAwards.description2")}
									</p>
									<p className="text-xl leading-relaxed font-light">
										{t("creAwards.description3")}
									</p>
								</div>
							</div>
							<div className="w-screen">
								<div className="flex flex-col md:flex-row items-center justify-center gap-8">
									<div className="w-full max-w-[500px]">
										<CreAwardsFormSlider />
									</div>
									<div className="w-full max-w-[500px]">
										<CREAwardsForm />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</ParallaxProvider>
	);
}
