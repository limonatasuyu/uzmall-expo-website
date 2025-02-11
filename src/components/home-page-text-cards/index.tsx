import Link from "next/link";
import { Building2, Users, Presentation, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

function TextCards({title, description, link, icon: Icon}: {
  title: string, 
  description: string, 
  link: string,
  icon: React.ElementType
}) {
  const { t } = useTranslation();
  
  return (
    <Link 
      href={link}
      className="block h-full transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col items-start rounded-lg bg-white p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="w-full flex flex-col h-full">
          <div className="flex justify-center mb-6">
            <div className="text-[#15bacc] group-hover:text-[#095d66] transition-colors duration-300">
              <Icon className="w-8 h-8 text-[#15bacc] group-hover:text-[#095d66] transition-colors duration-300" />
            </div>
          </div>
          <h2 className="text-[1.6rem] font-bold text-[#095d66] group-hover:text-[#15bacc] leading-tight mb-4 text-center transition-colors duration-300">
            {title}
          </h2>
          <p className="text-[1rem] text-[#095d66]/80 group-hover:text-[#095d66] leading-relaxed text-center transition-colors duration-300 mb-6">
            {description}
          </p>
          <div className="mt-auto flex justify-center">
            <span className="inline-block px-6 py-2 rounded-full bg-[#15bacc] text-white group-hover:bg-[#095d66] transition-colors duration-300">
              {t('common.visitUs')}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function HomePageTextCards() {
  const { t } = useTranslation();

  const contents = [
    {
      title: t('HomePageTextCards.exhibition.title'),
      description: t('HomePageTextCards.exhibition.description'),
      link: "#contact-form-section",
      icon: Building2
    },
    {
      title: t('HomePageTextCards.networking.title'),
      description: t('HomePageTextCards.networking.description'),
      link: "#contact-form-section",
      icon: Users
    },
    {
      title: t('HomePageTextCards.forum.title'),
      description: t('HomePageTextCards.forum.description'),
      link: "/program",
      icon: Presentation
    },
    {
      title: t('HomePageTextCards.awards.title'),
      description: t('HomePageTextCards.awards.description'),
      link: "/cre-awards",
      icon: Trophy
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contents.map((content, index) => (
          <TextCards 
            key={index as number} 
            title={content.title} 
            description={content.description} 
            link={content.link}
            icon={content.icon}
          />
        ))}
      </div>
    </div>
  );
}

export { HomePageTextCards };