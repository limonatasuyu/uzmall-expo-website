"use client";

import { Button } from "@/components/ui/button";
import type { contactFormPurposes } from "@/components/contact-form";
import { useTranslation } from "react-i18next";

interface HomePageTopTextProps {
  contactFormRef: React.RefObject<HTMLFormElement>;
}

function HomePageTopText({ contactFormRef }: HomePageTopTextProps) {
  const { t } = useTranslation();

  const scrollToContactForm = (purpose: typeof contactFormPurposes[number]) => {
    const contactForm = document.querySelector('#contact-form-section');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
    contactFormRef.current?.setPurpose(purpose);
  };

  return (
    <div className="max-w-full min-[950px]:max-w-[600px]">
      <h1 className="font-gothic text-[2.5rem] min-[950px]:text-[4rem] text-shadow-lg font-bold text-[#095d66]">
        {t('HomePageTopText.title')}
      </h1>
      <p className="font-gothic text-[#095d66]/80 text-[3.2rem] mt-4">
        {t('HomePageTopText.description')}
      </p>
      <div className="flex flex-col min-[500px]:flex-row items-start min-[500px]:items-center gap-6 mt-6">
        <span className="text-[1.8rem] font-medium text-white/80 border-l-3 border-[#15bacc]/90 pl-4 py-1.5 hover:text-white/90 hover:border-[#15bacc] transition-all duration-300 border-l-4 whitespace-nowrap">
          {t('HomePageTopText.date')}
        </span>
        <div className="flex flex-col min-[550px]:flex-row min-[950px]:flex-col xl:flex-row items-center gap-4">
          <Button 
            onClick={() => scrollToContactForm('represent')}
            className="rounded-full px-8 py-5 bg-gradient-to-r from-[#15bacc] to-[#0d8995] text-white font-semibold hover:from-[#0d8995] hover:to-[#15bacc] transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            {t('HomePageTopText.participantButton')}
          </Button>
          <Button 
            onClick={() => scrollToContactForm('visitor')}
            className="rounded-full px-8 py-5 bg-gradient-to-r from-[#15bacc] to-[#0d8995] text-white font-semibold hover:from-[#0d8995] hover:to-[#15bacc] transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            {t('HomePageTopText.visitorButton')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export { HomePageTopText };