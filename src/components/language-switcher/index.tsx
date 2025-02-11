"use client"

import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-2 items-center">
      <button 
        onClick={() => handleLanguageChange('en')}
        className={`text-sm transition-colors ${
          i18n.language === 'en' 
            ? 'text-white' 
            : 'text-white/50 hover:text-white'
        }`}
        type="button"
      >
        EN
      </button>

      <button 
        onClick={() => handleLanguageChange('ru')}
        className={`text-sm transition-colors ${
          i18n.language === 'ru' 
            ? 'text-white' 
            : 'text-white/50 hover:text-white'
        }`}
        type="button"
      >
        RU
      </button>

      <button 
        onClick={() => handleLanguageChange('uz')}
        className={`text-sm transition-colors ${
          i18n.language === 'uz' 
            ? 'text-white' 
            : 'text-white/50 hover:text-white'
        }`}
        type="button"
      >
        UZ
      </button>
    </div>
  );
} 