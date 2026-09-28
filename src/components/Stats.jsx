import { STATS } from "../data/content";
import { useLang } from "../i18n/LangContext";

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="py-10 sm:py-12" style={{ background: "var(--color-navy)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-head font-extrabold text-2xl sm:text-4xl text-white">{s.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-white/70">{t(s.label)}</div>
          </div>
        ))}
      </div>
      <p className="max-w-6xl mx-auto px-4 sm:px-6 mt-6 text-[11px] text-white/40">
        {t("Figures from the current pilot, updated regularly.")}
      </p>
    </section>
  );
}
