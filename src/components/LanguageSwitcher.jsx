import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { useLang } from "../i18n/LangContext";

export default function LanguageSwitcher({ dark }) {
  const [open, setOpen] = useState(false);
  const { lang, setLang, LANGS } = useLang();
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Language"
        aria-haspopup="menu"
        aria-expanded={open}
        className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors"
        style={dark ? { borderColor: "rgba(255,255,255,0.2)", color: "#fff" } : { borderColor: "rgba(0,0,0,0.1)", color: "var(--color-navy)" }}
      >
        <Globe size={16} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div role="menu" className="absolute right-0 mt-2 w-56 bg-white rounded-2xl z-50 p-1.5 shadow-xl border border-black/5">
            {LANGS.map((l) => {
              const on = l.code === lang;
              return (
                <button
                  key={l.code}
                  role="menuitemradio"
                  aria-checked={on}
                  onClick={() => { setLang(l.code); setOpen(false); }}
                  className="w-full flex items-center gap-2.5 text-left px-3 py-2 rounded-xl hover:bg-pink-50"
                >
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-bold" style={{ color: "var(--color-navy)" }}>{l.native}</span>
                    <span className="block text-[11px] text-gray-400">{l.en}</span>
                  </span>
                  {on && <Check size={15} style={{ color: "var(--color-pink)" }} />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
