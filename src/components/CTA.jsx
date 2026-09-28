import { ArrowRight } from "lucide-react";
import { REGISTER_URL } from "../data/content";
import { useLang } from "../i18n/LangContext";

export default function CTA() {
  const { t } = useLang();
  return (
    <section className="py-16 sm:py-20 bg-white text-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <h2 className="font-head font-extrabold text-2xl sm:text-3xl" style={{ color: "var(--color-navy)" }}>
          {t("Ready to get started?")}
        </h2>
        <p className="mt-3 text-sm sm:text-base" style={{ color: "#6A6F90" }}>
          {t("Create a business profile in minutes and see your first Business Health score today.")}
        </p>
        <a href={REGISTER_URL} className="inline-flex items-center gap-2 mt-6 text-white font-bold px-7 py-3.5 rounded-full grad-pink-h hover:opacity-90 transition-opacity">
          {t("Get started")} <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}
