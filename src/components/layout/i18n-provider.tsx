'use client';

import { useEffect, useState } from 'react';
import i18n from '@/i18n';
import { I18nextProvider } from 'react-i18next';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init().then(() => {
        setIsInitialized(true);
      });
    } else {
      setIsInitialized(true);
    }
  }, []);

  if (!isInitialized) {
    return null; // or a loading spinner
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
} 