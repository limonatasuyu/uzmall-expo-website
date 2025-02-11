"use client"

import { useTranslation } from 'react-i18next';
import { 
  Code2, 
  Store, 
  Utensils, 
  Gamepad2, 
  Briefcase, 
  Cpu
} from 'lucide-react';

function HomePageBottomTextSection({ title, items }: { title: string | React.ReactNode; items: string[] }) {
  return (
    <div className="flex flex-col gap-6 w-full bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
      <h2 className="text-xl text-center font-bold text-white border-b border-white/20 pb-4">
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li 
            key={index as number} 
            className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center text-sm"
          >
            <span className="w-1 h-1 bg-white/60 rounded-full mr-3 text-center" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HomePageBottomText() {
  const { t } = useTranslation();

  const sections = [
    { id: 'development', Icon: Code2 },
    { id: 'retail', Icon: Store },
    { id: 'food', Icon: Utensils },
    { id: 'entertainment', Icon: Gamepad2 },
    { id: 'business', Icon: Briefcase },
    { id: 'technology', Icon: Cpu }
  ];

  return (
    <div className="w-full flex justify-center bg-gradient-to-b from-[#15bacc] to-[#095d66] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h4 className="text-center text-white text-5xl font-bold mb-16">
          {t('HomePageBottomText.sectionTitle')}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map(({ id, Icon }) => (
            <HomePageBottomTextSection            
              key={id}
              title={
                <div className="flex items-center justify-center gap-3">
                  <Icon className="w-6 h-6" />
                  <span>{t(`HomePageBottomText.sections.${id}.title`)}</span>
                </div>
              }
              items={t(`HomePageBottomText.sections.${id}.items`, { returnObjects: true }) as string[]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { HomePageBottomText };
