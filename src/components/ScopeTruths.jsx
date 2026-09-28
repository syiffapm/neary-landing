import { CheckCircle2 } from "lucide-react";
import { SCOPE_TRUTHS } from "../data/content";
import { useLang } from "../i18n/LangContext";

export default function ScopeTruths() {
  const { t } = useLang();
  return (
    <section id="about" className="py-16 sm:py-20" style={{ background: "var(--color-navy)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-extrabold tracking-widest uppercase text-white/50">{t("About Neary")}</p>
        <h2 className="mt-2 font-head font-extrabold text-2xl sm:text-3xl text-white">
          {t("Good to know")}
        </h2>
        <p className="mt-3 text-sm text-white/60 max-w-2xl">
          {t("A Ministry of Women's Affairs programme, operated by LinkIT. A few things worth knowing before you start.")}
        </p>

        <ul className="mt-8 space-y-4">
          {SCOPE_TRUTHS.map((s) => (
            <li key={s} className="flex items-start gap-3 text-sm sm:text-[15px] text-white/85">
              <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "#F98CBC" }} />
              {t(s)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
