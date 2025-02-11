"use client";
import { HomePageTopImages } from "@/components/home-page-top-images";
import { HomePageTopText } from "@/components/home-page-top-text";
import { HomePageParagraph } from "@/components/home-page-paragraph";
import { HomePageTextCards } from "@/components/home-page-text-cards";
import { HomePageVideoText } from "@/components/home-page-video-text";
import { HomePageVideo } from "@/components/home-page-video";
import { HomePageBottomText } from "@/components/home-page-bottom-text";
import type { ContactFormRef } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { customLoader } from "@/lib/customLoader";
import { Navbar } from "@/components/navbar";
import { HomePageSpeakers } from "@/components/home-page-speakers";
import { ParallaxContact } from "@/components/parallax-contact";
import { ParallaxPartners } from "@/components/parallax-partners";
import { MapSection } from "@/components/map-section";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from "react-scroll-parallax";
export default function Home() {
  const contactFormRef = useRef<ContactFormRef>(null);
  
  return (
    <ParallaxProvider>
      <Navbar contactFormRef={contactFormRef as unknown as React.RefObject<HTMLFormElement>} />
      <main>
        <div className="bg-gradient-to-b from-[#15bacc] to-[#095d66]">
          <Link
            href="https://t.me/uzfranchiseassociation"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 w-14 h-14 bg-[#15bacc] rounded-full flex items-center justify-center shadow-lg hover:bg-[#095d66] transition-colors duration-300 z-50"
            aria-label="Contact us on Telegram"
          >
            <Image
              src="/telegram-icon.png"
              alt="Telegram"
              width={32}
              height={32}
              className="w-16 h-16"
              loader={customLoader}
            />
          </Link>

          <section className="flex pt-10 pb-10 rounded-b-[100px] justify-center w-screen gap-4 bg-gradient-to-b from-[#095d66] to-[#15bacc]">
            <div className="flex min-[950px]:flex-row flex-col items-center justify-between w-[80%] gap-8">
              <HomePageTopText contactFormRef={contactFormRef as unknown as React.RefObject<HTMLFormElement>} />
              <HomePageVideo />
            </div>
          </section>
          <section className="flex justify-center w-screen mt-24">
            <HomePageParagraph />
          </section>
          <section id="home-page-text-cards-section" className="flex justify-center w-screen mt-2">
            <HomePageTextCards />
          </section>
          <section className="flex justify-center w-screen mt-20 min-[1590px]:ml-[2vw] pb-10">
            <div className="flex min-[950px]:flex-row flex-col-reverse items-center justify-center gap-8 min-[950px]:w-[80%] w-[90%] min-[950px]:mt-4 -mt-12">
              <HomePageTopImages />
              <HomePageVideoText />
            </div>
          </section>
          <section className="flex justify-center w-screen">
            <div className="w-full h-full bg-gradient-to-b from-[#15bacc] to-[#095d66] rounded-b-[100px]">
              <HomePageBottomText />
            </div>
          </section>
          <section className="flex justify-center w-screen bg-white">
            <div className="w-full flex justify-center rounded-t-[100px] bg-gradient-to-b from-[#15bacc] to-[#095d66] mt-4">
              
              <Parallax translateY={[20, -15]} className="w-[90%] max-w-7xl mb-12">
                <HomePageSpeakers />
              </Parallax>
            </div>
          </section>
        
          <section className="flex justify-center w-screen" id="contact-form-section">
            <ParallaxContact contactFormRef={contactFormRef as unknown as React.RefObject<HTMLFormElement>} />
          </section>
          <section className="flex justify-center w-screen">
            <ParallaxPartners />
          </section>
        </div>
        <div className="w-screen bg-gradient-to-b from-[#15bacc] to-[#095d66] h-[100px]" />
        <MapSection />
      </main>
      <Footer />
    </ParallaxProvider>
  );
}
