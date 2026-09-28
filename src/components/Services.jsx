import { GraduationCap, Receipt, Bot, HeartPulse, Users, Landmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/content";
import { useLang } from "../i18n/LangContext";

const ICONS = { GraduationCap, Receipt, Bot, HeartPulse, Users, Landmark };

export default function Services({ limit, showHeading = true, seeAllLink = false }) {
  const { t } = useLang();
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section id="services" className={showHeading ? "py-16 sm:py-24 bg-white" : "bg-white"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {showHeading && (
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-extrabold tracking-widest uppercase" style={{ color: "var(--color-pink)" }}>{t("What you get")}</p>
            <h2 className="mt-2 font-head font-extrabold text-3xl sm:text-4xl" style={{ color: "var(--color-navy)" }}>
              {t("Everything you need, in one place")}
            </h2>
            <p className="mt-3 text-sm sm:text-base" style={{ color: "#5A5F80" }}>
              {t("Six simple services, free to use, built around how a small business actually runs.")}
            </p>
          </div>
        )}

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <div key={s.key} className="rounded-2xl border border-black/5 p-6 hover:shadow-md hover:border-transparent transition-all" style={{ background: "#FFFAFC" }}>
                <span className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "var(--color-blush)", color: "var(--color-pink)" }}>
                  <Icon size={22} />
                </span>
                <h3 className="font-head font-extrabold text-base" style={{ color: "var(--color-navy)" }}>{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6A6F90" }}>{t(s.text)}</p>
              </div>
            );
          })}
        </div>

        {seeAllLink && (
          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "var(--color-pink)" }}>
              {t("See all services")} <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
