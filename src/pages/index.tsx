"use client";
import { HomePageStatsImages } from "@/components/home-page/home-page-stats-images";
import { HomePageTopLeft } from "@/components/home-page/home-page-top-left";
import { HomePageTopRight } from "@/components/home-page/home-page-top-right";
import { HomePageParagraph } from "@/components/home-page/home-page-paragraph";
import { HomePageButtonCards } from "@/components/home-page/home-page-button-cards";
import { HomePageStats } from "@/components/home-page/home-page-stats";
import { HomePageTextCards } from "@/components/home-page/home-page-text-cards";
import type { ContactFormRef } from "@/components/layout/contact-form";
import { Footer } from "@/components/layout/footer";
import { useRef } from "react";
import Image from "next/image";
import { customLoader } from "@/lib/customLoader";
import { Navbar } from "@/components/layout/navbar";
import { HomePageSpeakers } from "@/components/home-page/home-page-speakers";
import { ParallaxContact } from "@/components/home-page/home-page-contact";
import { ParallaxPartners } from "@/components/home-page/home-page-partners";
import { MapSection } from "@/components/home-page/home-page-map-section";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import { FormatsSection } from "@/components/home-page/home-page-formats-section";
import { HomePageTable } from "@/components/home-page/home-page-table";
import { Stickers } from "@/components/layout/stickers";
import Head from "next/head";

export default function Home() {
  const contactFormRef = useRef<ContactFormRef>(null);

  const handlePurposeClick = (e: React.MouseEvent, purpose: string) => {
    e.preventDefault();
    const contactForm = document.querySelector("#contact-form-section");
    contactForm?.scrollIntoView({ behavior: "smooth" });
    contactFormRef?.current?.setPurpose(purpose);
  };

  return (
    <>
      <Head>
        <title>Uzmall Expo - Leading Real Estate Exhibition & Forum</title>
        <meta
          name="description"
          content="Uzmall Expo is Uzbekistan's premier real estate exhibition and forum, connecting developers, investors, and industry experts."
        />
        <meta
          name="keywords"
          content="real estate exhibition, property expo, Uzbekistan real estate, property investment, real estate forum"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Uzmall Expo - Leading Real Estate Exhibition & Forum" />
        <meta
          property="og:description"
          content="Join Uzbekistan's premier real estate exhibition and forum. Connect with developers, investors and industry experts."
        />
        <meta property="og:url" content="https://uzmall-expo.uz" />
        <meta property="og:site_name" content="Uzmall Expo" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uzmall Expo - Leading Real Estate Exhibition & Forum" />
        <meta
          name="twitter:description"
          content="Join Uzbekistan's premier real estate exhibition and forum. Connect with developers, investors and industry experts."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        {/* Robots & SEO */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
      </Head>

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
        <main className="overflow-hidden max-w-screen">
          <div className="bg-[#eaeaea]">
            <Stickers />

            <section id="home-page-top" className="flex pt-2 pb-10 rounded-b-[100px] justify-center w-screen">
              <div className="flex flex-col min-[950px]:flex-row items-center justify-between gap-8 w-[95%] md:w-[90%] max-w-7xl">
                <HomePageTopLeft handlePurposeClick={handlePurposeClick} />
                <HomePageTopRight />
              </div>
            </section>
            <section className="flex justify-center w-screen mt-24">
              <HomePageParagraph />
            </section>
            <section id="home-page-text-cards-section" className="flex justify-center w-screen mt-2">
              <HomePageButtonCards handlePurposeClick={handlePurposeClick} />
            </section>
            <section className="flex justify-center w-screen mt-20 min-[1590px]:ml-[2vw] pb-10">
              <div className="flex min-[950px]:flex-row flex-col items-center justify-center gap-8 min-[950px]:w-[80%] w-[90%] min-[950px]:mt-4 -mt-12">
                <HomePageStatsImages />
                <HomePageStats />
              </div>
            </section>
            <section className="flex justify-center w-screen">
              <div className="w-full h-fit rounded-b-[100px]">
                <HomePageTextCards />
              </div>
            </section>
            <section
              id="home-page-speakers-section"
              className="flex justify-center w-screen bg-[#eaeaea] md:max-h-[90vh] overflow-hidden"
            >
              <Parallax
                translateY={[5, -5]}
                className="w-full flex justify-center rounded-t-[50px] md:rounded-t-[100px] bg-gradient-to-b from-[#eaeaea] to-white"
                disabled={typeof window !== "undefined" && window.innerWidth < 768}
              >
                <div className="w-[95%] md:w-[90%] max-w-5xl pt-2 md:pt-4 pb-8 md:pb-12">
                  <HomePageSpeakers />
                </div>
              </Parallax>
            </section>
            <section className="flex justify-center w-screen bg-[#eaeaea] h-fit px-4 md:px-0">
              <div className="w-full max-w-9xl">
                <HomePageTable />
              </div>
            </section>

            <section className="flex justify-center w-screen bg-[#eaeaea]" id="contact-form-section">
              <ParallaxContact
                contactFormRef={contactFormRef as unknown as React.RefObject<HTMLFormElement>}
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
    </>
  );
}
