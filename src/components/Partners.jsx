import { PROVINCES, LENDERS } from "../data/content";
import { useLang } from "../i18n/LangContext";

export default function Partners() {
  const { t } = useLang();
  return (
    <section id="partners" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-extrabold tracking-widest uppercase" style={{ color: "var(--color-pink)" }}>
          {t("Our partners")}
        </p>

        <div className="mt-8">
          <h3 className="font-head font-extrabold text-sm mb-3 text-center" style={{ color: "var(--color-navy)" }}>{t("Banks who accept our referrals")}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {LENDERS.map((l) => (
              <span key={l.name} title={l.status} className="text-sm font-bold px-4 py-2.5 rounded-full border flex items-center gap-2"
                style={{ borderColor: l.status.startsWith("Active") ? "var(--color-pink)" : "#E5E7EB", color: l.status.startsWith("Active") ? "var(--color-pink-deep)" : "#9CA3AF" }}>
                {l.name}
                {!l.status.startsWith("Active") && <span className="text-[9px] font-extrabold uppercase">{t("soon")}</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-black/5 text-center">
          <h3 className="font-head font-extrabold text-sm mb-3" style={{ color: "var(--color-navy)" }}>{t("Available today in")}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {PROVINCES.map((p) => (
              <span key={p} className="text-sm font-semibold px-4 py-2 rounded-full" style={{ background: "#FFFAFC", color: "#5A5F80" }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
