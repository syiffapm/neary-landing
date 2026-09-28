import { createContext, useContext, useState, useEffect } from "react";
import { DICT, LANGS, SCRIPT_FONT } from "./dict";

const LangContext = createContext({ lang: "en", setLang: () => {} });
export const useLang = () => useContext(LangContext);

const STORAGE_KEY = "neary-landing-lang";
const IDX = { en: -1, km: 0, my: 1, lo: 2, id: 3 };

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "en";
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && IDX[saved] !== undefined) return saved;
    } catch (e) { /* ignore */ }
    return "en";
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l) => setLangState(l);
  const i = IDX[lang];
  const t = (s) => {
    if (i === -1) return s;
    const row = DICT[s];
    return (row && row[i]) || s;
  };
  const font = SCRIPT_FONT[lang];

  return <LangContext.Provider value={{ lang, setLang, t, font, LANGS }}>{children}</LangContext.Provider>;
}
