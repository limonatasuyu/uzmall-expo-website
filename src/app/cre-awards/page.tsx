"use client";
import Image from "next/image";
import { customLoader } from "@/lib/customLoader";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useRef } from "react";
import { ParallaxContact } from "@/components/parallax-contact";
import { ParallaxProvider } from "react-scroll-parallax";
export default function CREAwardsPage() {
	const { t } = useTranslation();
	const contactFormRef = useRef(null);

	return (
		<ParallaxProvider>
			<Navbar />
			<main className="min-h-screen bg-gradient-to-b from-[#eaeaea] to-[#095d66]">
				<div className="relative w-full">
					{/* Background pattern */}
					<div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-10" />

					<div className="container mx-auto px-4 py-32 relative">
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

							<h1 className="text-4xl font-bold text-white mb-12">
								{t("creAwards.title")}
							</h1>

							{/* Content with card-like background */}
							<div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 shadow-2xl border border-white/10">
								<div className="space-y-8 text-white">
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

							{/* Contact Form Section */}
							<ParallaxContact
								contactFormRef={
									contactFormRef as unknown as React.RefObject<HTMLFormElement>
								}
							/>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</ParallaxProvider>
	);
}
