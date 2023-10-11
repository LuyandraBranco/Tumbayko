import { createContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: string;
  changeLanguage: (newLanguage: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState('pt'); // Definido o idioma padrão aqui

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
