import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string) => import(`../locales/${language}.json`)))
    .init(getOptions(lng, ns));

  return i18nInstance;
}

export async function getTranslations(lang: string) {
  const i18next = await initI18next(lang, 'translation');
  
  if (!i18next) {
    throw new Error(`Failed to load translations for language: ${lang}`);
  }

  return {
    t: i18next.getFixedT(lang, 'translation'),
    i18n: i18next,
  };
} 