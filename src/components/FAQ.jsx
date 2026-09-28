import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/content";
import { useLang } from "../i18n/LangContext";

export default function FAQ({ showHeading = true }) {
  const [open, setOpen] = useState(0);
  const { t } = useLang();
  return (
    <section id="faq" className="py-16 sm:py-20" style={{ background: "var(--color-blush)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {showHeading && (
          <div className="text-center mb-10">
            <p className="text-xs font-extrabold tracking-widest uppercase" style={{ color: "var(--color-pink)" }}>{t("Frequently asked")}</p>
            <h2 className="mt-2 font-head font-extrabold text-3xl sm:text-4xl" style={{ color: "var(--color-navy)" }}>
              {t("Questions people ask us")}
            </h2>
          </div>
        )}

        <div className="space-y-2.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl bg-white overflow-hidden">
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 text-left px-5 py-4">
                  <span className="font-head font-bold text-sm sm:text-[15px]" style={{ color: "var(--color-navy)" }}>{t(f.q)}</span>
                  <ChevronDown size={18} className="shrink-0 transition-transform" style={{ color: "var(--color-pink)", transform: isOpen ? "rotate(180deg)" : "none" }} />
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#6A6F90" }}>{t(f.a)}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
