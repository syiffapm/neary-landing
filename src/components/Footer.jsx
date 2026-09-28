import { Link } from "react-router-dom";
import { CMS_URL, LOGIN_URL, REGISTER_URL } from "../data/content";
import { useLang } from "../i18n/LangContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="pt-14 pb-8" style={{ background: "#0B1230" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-4 gap-10">
        <div className="sm:col-span-1">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm font-head" style={{ background: "var(--color-pink)" }}>N</span>
            <span className="font-head font-extrabold text-white">Neary Smart Business</span>
          </div>
          <p className="mt-3 text-xs text-white/50 max-w-xs leading-relaxed">
            {t("A Ministry of Women's Affairs programme, Kingdom of Cambodia — delivered by LinkIT.")}
          </p>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-white/40 mb-3">{t("Get started")}</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href={LOGIN_URL} className="hover:text-white">{t("Log in to the app")}</a></li>
            <li><a href={REGISTER_URL} className="hover:text-white">{t("Register")}</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-white/40 mb-3">{t("Explore")}</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/services" className="hover:text-white">{t("Services")}</Link></li>
            <li><Link to="/news" className="hover:text-white">{t("News")}</Link></li>
            <li><Link to="/faq" className="hover:text-white">{t("FAQ")}</Link></li>
            <li><Link to="/about" className="hover:text-white">{t("About")}</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-white/40 mb-3">{t("In partnership with")}</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>ABA Bank · PRASAC · Wing Bank</li>
            <li>{t("CGCC (guarantee scheme)")}</li>
          </ul>
          <a href={CMS_URL} className="inline-block mt-4 text-xs text-white/30 hover:text-white/60">{t("Admin console")} →</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-white/10 text-[11px] text-white/40 leading-relaxed">
        {t("Neary prepares and connects — it never lends money or holds your funds. Financing decisions are always made by the partner bank. This is a pilot-stage programme and figures shown may include illustrative data during rollout.")}
        <div className="mt-3">© {new Date().getFullYear()} Neary Smart Business.</div>
      </div>
    </footer>
  );
}
