import React, { createContext, useState, useContext } from 'react';
import enData from '../data/en.json';
import frData from '../data/fr.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');
  const [content, setContent] = useState(frData);

  const switchLanguage = (newLang) => {
    setLang(newLang);
    if (newLang === 'en') {
      setContent(enData);
    } else {
      setContent(frData);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, content, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);