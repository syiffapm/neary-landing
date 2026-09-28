import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { REGISTER_URL, LOGIN_URL } from "../data/content";
import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FCE1EE 0%, #FFF7FB 60%, #FFFFFF 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8 sm:pt-20 sm:pb-16 grid md:grid-cols-2 gap-10 md:gap-6 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/70 border border-white rounded-full px-3 py-1.5 text-xs font-bold mb-5" style={{ color: "var(--color-pink-deep)" }}>
            <ShieldCheck size={14} /> {t("We prepare and connect. We do not lend.")}
          </div>
          <h1 className="font-head font-extrabold text-4xl sm:text-5xl leading-[1.08] tracking-tight" style={{ color: "var(--color-navy)" }}>
            {t("Let's grow your business,")}<br /><span style={{ color: "var(--color-pink)" }}>{t("together.")}</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg" style={{ color: "#4B5170" }}>
            {t("A free app for women entrepreneurs in Cambodia — learn, track your sales, get a mentor, and get connected to financing when you're ready. In Khmer first.")}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href={REGISTER_URL} className="inline-flex items-center gap-2 text-white font-bold px-6 py-3.5 rounded-full grad-pink-h shadow-lg shadow-pink-500/20 hover:opacity-90 transition-opacity">
              {t("Get started")} <ArrowRight size={17} />
            </a>
            <a href={LOGIN_URL} className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-full border-2" style={{ color: "var(--color-navy)", borderColor: "var(--color-navy)" }}>
              {t("I have an account")}
            </a>
          </div>
          <Link to="/services" className="block mt-4 text-sm font-bold underline underline-offset-2" style={{ color: "var(--color-pink)" }}>
            {t("See what you get")} ↓
          </Link>
          <p className="mt-6 text-xs max-w-sm" style={{ color: "#7A80A0" }}>
            {t("Free to use. Available in Khmer, English, Burmese, Lao and Bahasa Indonesia.")}
          </p>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute -inset-10 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #F98CBC 0%, transparent 70%)" }} aria-hidden="true" />
          <div className="relative animate-float" style={{ animationDuration: "6s" }}>
            <div className="rounded-[38px] p-2 bg-[#14121A] shadow-2xl" style={{ width: 264 }}>
              <img src="/hero-home.png" alt="The Neary app's home screen, showing a business owner's readiness score and progress" className="rounded-[30px] w-full block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
