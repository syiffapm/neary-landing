import { HOW_IT_WORKS } from "../data/content";
import { useLang } from "../i18n/LangContext";

export default function HowItWorks() {
  const { t } = useLang();
  return (
    <section id="how-it-works" className="py-16 sm:py-20" style={{ background: "var(--color-blush)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-extrabold tracking-widest uppercase" style={{ color: "var(--color-pink)" }}>{t("How it works")}</p>
          <h2 className="mt-2 font-head font-extrabold text-3xl sm:text-4xl" style={{ color: "var(--color-navy)" }}>
            {t("Four steps, at your own pace")}
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-full flex items-center justify-center font-head font-extrabold text-sm text-white shrink-0 grad-pink-h">{s.n}</span>
                {i < HOW_IT_WORKS.length - 1 && <span className="hidden lg:block flex-1 h-px" style={{ background: "#F3C6DA" }} />}
              </div>
              <h3 className="font-head font-extrabold text-[15px]" style={{ color: "var(--color-navy)" }}>{t(s.title)}</h3>
              <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "#6A6F90" }}>{t(s.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
