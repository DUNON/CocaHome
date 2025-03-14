import { useState } from "react";
import LangContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  let browerLang =
    navigator.language.slice(0, 2).toUpperCase() || navigator.userLanguage;
  console.log(browerLang);
  const [lang, setLang] = useState(browerLang);

  // Fonction pour changer la langue
  const toggleLang = (lang) => {
    setLang(lang);
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default ThemeProvider;
