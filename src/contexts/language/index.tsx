import { createContext, useState, ReactNode } from 'react';
import { translations } from '../../utils/translations';
import { Translation } from '../../types/translation';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  translation: Translation;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'pt' : 'en');
  };

  const translation = translations[language];

  return (
    <LanguageContext.Provider value={{ language, translation, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

