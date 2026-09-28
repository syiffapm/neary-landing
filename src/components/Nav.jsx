import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LOGIN_URL, REGISTER_URL } from "../data/content";
import { useLang } from "../i18n/LangContext";
import LanguageSwitcher from "./LanguageSwitcher";

const LINKS = [
  { href: "/news", label: "News" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm font-head" style={{ background: "var(--color-pink)" }}>N</span>
          <span className="font-head font-extrabold text-[15px] sm:text-base" style={{ color: "var(--color-navy)" }}>
            Neary <span style={{ color: "var(--color-pink)" }}>Smart Business</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold" style={{ color: "var(--color-navy)" }}>
          {LINKS.map((l) => (
            <NavLink key={l.href} to={l.href} className={({ isActive }) => `hover:text-[var(--color-pink)] transition-colors ${isActive ? "text-[var(--color-pink)]" : ""}`}>{t(l.label)}</NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a href={LOGIN_URL} className="text-sm font-bold px-4 py-2" style={{ color: "var(--color-navy)" }}>{t("Log in")}</a>
          <a href={REGISTER_URL} className="text-sm font-bold text-white px-5 py-2.5 rounded-full grad-pink-h hover:opacity-90 transition-opacity">
            {t("Register")}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <LanguageSwitcher />
          <button className="p-2 -mr-1" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white px-5 py-4 flex flex-col gap-4 text-sm font-semibold" style={{ color: "var(--color-navy)" }}>
          {LINKS.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)}>{t(l.label)}</Link>
          ))}
          <div className="flex gap-3 pt-2">
            <a href={LOGIN_URL} className="flex-1 text-center font-bold px-4 py-2.5 rounded-full border border-[var(--color-navy)]/20">{t("Log in")}</a>
            <a href={REGISTER_URL} className="flex-1 text-center font-bold text-white px-4 py-2.5 rounded-full grad-pink-h">{t("Register")}</a>
          </div>
        </div>
      )}
    </header>
  );
}
