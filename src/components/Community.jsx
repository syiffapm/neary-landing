import { WomanAvatar } from "./Illustrations";
import { COMMUNITY } from "../data/content";
import { useLang } from "../i18n/LangContext";

// Illustrated, not photographic — the same stylized-avatar approach used
// throughout the app and admin console, shown here without names (this is
// not a set of real testimonials, just a visual sense of who uses Neary).
export default function Community() {
  const { t } = useLang();
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-extrabold tracking-widest uppercase mb-8" style={{ color: "var(--color-pink)" }}>
          {t("Some of the businesses on Neary")}
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {COMMUNITY.map((c) => (
            <div key={c.seed} className="flex flex-col items-center gap-2 w-28">
              <WomanAvatar seed={c.seed} size={64} />
              <div className="text-center">
                <div className="text-xs font-bold leading-tight" style={{ color: "var(--color-navy)" }}>{t(c.sector)}</div>
                <div className="text-[11px]" style={{ color: "#9CA3AF" }}>{c.province}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
