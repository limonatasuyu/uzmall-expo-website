"use client";
import { HomePageTopImages } from "@/components/home-page-top-images";
import { HomePageTopText } from "@/components/home-page-top-text";
import { HomePageParagraph } from "@/components/home-page-paragraph";
import { HomePageTextCards } from "@/components/home-page-text-cards";
import { HomePageVideoText } from "@/components/home-page-video-text";
import { HomePageVideo } from "@/components/home-page-video";
import { HomePageBottomTextCards } from "@/components/home-page-bottom-text-cards";
import type { ContactFormRef } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { useRef } from "react";
import Image from "next/image";
import { customLoader } from "@/lib/customLoader";
import { Navbar } from "@/components/navbar";
import { HomePageSpeakers } from "@/components/home-page-speakers";
import { ParallaxContact } from "@/components/parallax-contact";
import { ParallaxPartners } from "@/components/parallax-partners";
import { MapSection } from "@/components/map-section";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import { FormatsSection } from "@/components/formats-section";
import { BrandsSection } from "@/components/brands-section";
import { Stickers } from "@/components/stickers";
export default function Home() {
	const contactFormRef = useRef<ContactFormRef>(null);

	const handlePurposeClick = (e: React.MouseEvent, purpose: string) => {
		e.preventDefault();
		const contactForm = document.querySelector("#contact-form-section");
		contactForm?.scrollIntoView({ behavior: "smooth" });
		contactFormRef?.current?.setPurpose(purpose);
	};

	return (
		<ParallaxProvider>
			<Image
				src="/uzmall-logo-u.png"
				alt="background"
				height={1000}
				width={1000}
				className="fixed top-20 -right-40 z-0 opacity-10"
				loader={customLoader}
			/>
			<Navbar handlePurposeClick={handlePurposeClick} />
			<main>
				<div className="bg-[#eaeaea]">
					<Stickers />

					<section className="flex pt-10 pb-10 rounded-b-[100px] justify-center w-screen">
						<div className="flex flex-col min-[950px]:flex-row items-center justify-between gap-8 w-[95%] md:w-[90%] max-w-7xl">
							<HomePageTopText handlePurposeClick={handlePurposeClick} />
							<div className="lg:flex-shrink-0 w-full lg:w-[50%] h-full flex justify-center items-center">
								<HomePageVideo />
							</div>
						</div>
					</section>
					<section className="flex justify-center w-screen mt-24">
						<HomePageParagraph />
					</section>
					<section
						id="home-page-text-cards-section"
						className="flex justify-center w-screen mt-2"
					>
						<HomePageTextCards handlePurposeClick={handlePurposeClick} />
					</section>
					<section className="flex justify-center w-screen mt-20 min-[1590px]:ml-[2vw] pb-10">
						<div className="flex min-[950px]:flex-row flex-col items-center justify-center gap-8 min-[950px]:w-[80%] w-[90%] min-[950px]:mt-4 -mt-12">
							<HomePageTopImages />
							<HomePageVideoText />
						</div>
					</section>
					<section className="flex justify-center w-screen">
						<div className="w-full h-full rounded-b-[100px]">
							<HomePageBottomTextCards />
						</div>
					</section>
					<section
						id="home-page-speakers-section"
						className="flex justify-center w-screen bg-[#eaeaea]"
					>
						<Parallax
							translateY={[10, -15]}
							className="w-full flex justify-center rounded-t-[100px] bg-gradient-to-b from-[#eaeaea] to-white mt-4 "
						>
							<div className="w-[90%] max-w-5xl mb-12">
								<HomePageSpeakers />
							</div>
						</Parallax>
					</section>
					<section className="flex justify-center w-screen bg-[#eaeaea]">
						<BrandsSection />
					</section>

					<section
						className="flex justify-center w-screen bg-[#eaeaea]"
						id="contact-form-section"
					>
						<ParallaxContact
							contactFormRef={
								contactFormRef as unknown as React.RefObject<HTMLFormElement>
							}
						/>
					</section>
					<section className="flex justify-center w-screen bg-[#eaeaea]">
						<FormatsSection />
					</section>
					<section className="flex justify-center w-screen bg-[#eaeaea]">
						<ParallaxPartners />
					</section>
					<section className="flex flex-col items-center justify-center w-screen py-16 bg-[#eaeaea]">
						<MapSection />
					</section>
				</div>
			</main>
			<Footer />
		</ParallaxProvider>
	);
}
