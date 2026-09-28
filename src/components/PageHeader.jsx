import { useLang } from "../i18n/LangContext";

export default function PageHeader({ eyebrow, title, text }) {
  const { t } = useLang();
  return (
    <section className="pt-12 pb-10 sm:pt-16 sm:pb-14" style={{ background: "linear-gradient(180deg, #FCE1EE 0%, #FFF7FB 100%)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {eyebrow && <p className="text-xs font-extrabold tracking-widest uppercase" style={{ color: "var(--color-pink)" }}>{t(eyebrow)}</p>}
        <h1 className="mt-2 font-head font-extrabold text-3xl sm:text-4xl" style={{ color: "var(--color-navy)" }}>{t(title)}</h1>
        {text && <p className="mt-3 text-sm sm:text-base" style={{ color: "#5A5F80" }}>{t(text)}</p>}
      </div>
    </section>
  );
}
