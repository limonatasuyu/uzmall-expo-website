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
      <h1 className="text-[2.5rem] min-[950px]:text-[4rem] text-shadow-lg font-bold text-white">
        {t('HomePageTopText.title')}
      </h1>
      <div className="flex flex-col min-[500px]:flex-row items-start min-[500px]:items-center gap-4 mt-4">
        <span className="text-[1.4rem] font-medium text-white/80 border-l-3 border-[#15bacc]/90 pl-4 py-1 hover:text-white/90 hover:border-[#15bacc] transition-all duration-300 border-l-4">
          {t('HomePageTopText.date')}
        </span>
        <div className="flex items-center gap-2">
          <Button 
            onClick={() => scrollToContactForm('represent')}
            className="rounded-full px-6 py-2.5 bg-gradient-to-r from-[#15bacc] to-[#0d8995] text-white font-semibold hover:from-[#0d8995] hover:to-[#15bacc] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('HomePageTopText.participantButton')}
          </Button>
          <Button 
            onClick={() => scrollToContactForm('visitor')}
            className="rounded-full px-6 py-2.5 bg-gradient-to-r from-[#15bacc] to-[#0d8995] text-white font-semibold hover:from-[#0d8995] hover:to-[#15bacc] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('HomePageTopText.visitorButton')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export { HomePageTopText };