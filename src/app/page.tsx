import { HomePageTopImages } from "@/components/home-page-top-images";
import { HomePageTopText } from "@/components/home-page-top-text";
import { HomePageParagraph } from "@/components/home-page-paragraph";
import { HomePageTextCards } from "@/components/home-page-text-cards";
import { HomePageVideoText } from "@/components/home-page-video-text";
import { HomePageVideo } from "@/components/home-page-video";
import { HomePageBottomText } from "@/components/home-page-bottom-text";
import { ContactForm } from "@/components/contact-form";
import { ContactFormSlider } from "@/components/contact-form-slider";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <section className="flex mt-10 justify-center w-screen gap-4">
        <div className="flex items-center justify-between w-[80%]">
          <HomePageTopText />
          <HomePageTopImages />
        </div>
      </section>
      <section className="flex justify-center w-screen mt-20">
        <HomePageParagraph />
      </section>
      <section id="home-page-text-cards-section" className="flex justify-center w-screen mt-20">
        <HomePageTextCards />
      </section>
      <section className="flex justify-center w-screen mt-20 min-[1590px]:ml-[2vw]">
        <div className="flex min-[950px]:flex-row flex-col-reverse items-center justify-center gap-8 min-[950px]:w-[80%] w-[90%] min-[950px]:mt-4 -mt-12">
          <HomePageVideo /> 
          <HomePageVideoText />
        </div>
      </section>
      <section className="flex justify-center w-screen pt-20">
        <HomePageBottomText />
      </section>
      <section className="flex flex-col justify-center items-center w-screen pt-20 text-center bg-[#095d66]">
        <div className="w-[80%] max-w-7xl bg-[#095d66]">
          <div className="mb-16">
            <h2 className="text-[2.5rem] font-bold text-white mb-4">
              CRE AWARDS
            </h2>
            <p className="text-[1.5rem] text-white/80">
              Премия коммерческой недвижимости
            </p>
          </div>

          <div>
            <h2 className="text-[2.5rem] font-bold text-white mb-4">
              Программа и спикеры
            </h2>
            <p className="text-[1.5rem] text-white/80">
              Спикеры
            </p>
          </div>
        </div>
      </section>
      <section id="contact-form-section" className="bg-[#095d66] py-16">
        <div className="container mx-auto px-4 mr-0 min-[950px]:mr-auto">
          <div className="flex flex-col md:flex-row justify-center items-start gap-8">
            <ContactFormSlider />
            <ContactForm />
          </div>
        </div>
      </section>

            <div className="w-screen h-[30%] bg-[#095d66]">
              <h1 className="text-[2.5rem] font-bold text-white pb-4 text-center">
              Информационные партнеры
              </h1>
            </div>
      <Footer />
    </div>
  );
}
