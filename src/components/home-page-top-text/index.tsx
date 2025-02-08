"use client";

import { Button } from "@/components/ui/button";

function HomePageTopText() {
  const scrollToContactForm = () => {
    const contactForm = document.querySelector('#contact-form-section');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-full min-[1170px]:max-w-1/2">
      <h1 className="text-[2.5rem] min-[950px]:text-[4rem] text-shadow-lg font-bold text-white min-[1170px]:w-[600px] w-full">Первый в Центральной Азии инвестиционный выставка-форум коммерческой недвижимости</h1>
      <div className="flex items-center gap-2">
        <span className="text-[1.5rem] font-bold text-white">28-29 мая 2025г.</span>
        <Button 
          onClick={scrollToContactForm}
          className="bg-white text-black rounded-full px-4 py-2 ml-8 bg-[#15bacc] text-[#095d66]"
        >
          Стать участником!
        </Button>
      </div>
    </div>
  );
}

export { HomePageTopText };