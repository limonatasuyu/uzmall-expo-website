'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string) => import(`@/locales/${language}.json`)))
  .init({
    fallbackLng: 'ru',
    supportedLngs: ['en', 'ru'],
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
  });

export default i18next; 