import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Community from "../components/Community";
import News from "../components/News";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLang } from "../i18n/LangContext";

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <Hero />
      <Services limit={3} seeAllLink />
      <HowItWorks />
      <Stats />
      <Community />
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
            <div>
              <p className="text-xs font-extrabold tracking-widest uppercase" style={{ color: "var(--color-pink)" }}>{t("News & updates")}</p>
              <h2 className="mt-2 font-head font-extrabold text-3xl sm:text-4xl" style={{ color: "var(--color-navy)" }}>{t("What's new")}</h2>
            </div>
            <Link to="/news" className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "var(--color-pink)" }}>
              {t("See all news")} <ArrowRight size={15} />
            </Link>
          </div>
          <News limit={3} />
        </div>
      </section>
      <CTA />
    </>
  );
}
