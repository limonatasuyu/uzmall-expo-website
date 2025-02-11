"use client";
import { ContactForm, type ContactFormRef } from "../contact-form";
import { ContactFormSlider } from "../contact-form-slider";
import { Parallax } from "react-scroll-parallax";
export const ParallaxContact = ({contactFormRef}: {contactFormRef: React.RefObject<HTMLFormElement>}) => {
  return (
    <Parallax translateY={[20, -15]} className="w-screen flex justify-center py-20">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full max-w-[500px]">
            <ContactFormSlider />
          </div>
          <div className="w-full max-w-[500px]">
            <ContactForm ref={contactFormRef as unknown as React.RefObject<ContactFormRef>} />
          </div>
        </div>
      </div>
    </Parallax>
  );
}; 