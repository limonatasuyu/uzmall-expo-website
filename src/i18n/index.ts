'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '@/locales/en.json';
import translationRU from '@/locales/ru.json';
import translationUZ from '@/locales/uz.json';
// Only initialize once
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: translationEN
        },
        ru: {
          translation: translationRU,
        },
        uz: {
          translation: translationUZ,
        },
      },
      fallbackLng: "ru",
      supportedLngs: ["en", "ru", "uz"],
      debug: process.env.NODE_ENV === "development",
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;

export function useClientTranslation() {
  if (!i18n.isInitialized) {
    i18n.init();
  }

  return i18n;
} 