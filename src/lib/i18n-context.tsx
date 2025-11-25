import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import ru from '../locales/ru.json';
import zh from '../locales/zh.json';
import ar from '../locales/ar.json';

type Language = 'en' | 'ru' | 'zh' | 'ar';
type Translations = typeof en;

const translations: Record<Language, Translations> = {
  en,
  ru,
  zh,
  ar,
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng') as Language;
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation missing for key: ${path} in language: ${language}`);
        return path;
      }
      current = current[key];
    }
    
    return current as string;
  };

  return (
    <I18nContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      t,
      dir: language === 'ar' ? 'rtl' : 'ltr'
    }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return {
    t: context.t,
    i18n: {
      language: context.language,
      changeLanguage: context.setLanguage,
      dir: context.dir
    }
  };
}
