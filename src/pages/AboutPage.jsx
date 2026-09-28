import { Landmark, Cpu, Target, HeartHandshake } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ScopeTruths from "../components/ScopeTruths";
import Partners from "../components/Partners";
import CTA from "../components/CTA";
import { useLang } from "../i18n/LangContext";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <PageHeader eyebrow="About Neary" title="Who runs Neary, and what it's for" />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black/5 p-6" style={{ background: "#FFFAFC" }}>
              <span className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ background: "var(--color-blush)", color: "var(--color-pink)" }}><Landmark size={20} /></span>
              <h2 className="font-head font-extrabold text-base" style={{ color: "var(--color-navy)" }}>{t("Ministry of Women's Affairs")}</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6A6F90" }}>
                {t("Neary is a programme of the Ministry of Women's Affairs, Kingdom of Cambodia — the government body responsible for advancing gender equality and women's economic empowerment nationally. Neary is one part of that wider mandate, focused specifically on women running small and micro businesses.")}
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 p-6" style={{ background: "#FFFAFC" }}>
              <span className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ background: "var(--color-blush)", color: "var(--color-pink)" }}><Cpu size={20} /></span>
              <h2 className="font-head font-extrabold text-base" style={{ color: "var(--color-navy)" }}>{t("Operated by LinkIT")}</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6A6F90" }}>
                {t("The Ministry sets the programme's direction and policy; day-to-day, the app and admin console are built and operated by LinkIT, a technology delivery partner. LinkIT moderates content and AI answers and keeps a full audit trail of sensitive decisions, so the Ministry retains oversight of the programme it owns.")}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--color-blush)", color: "var(--color-pink)" }}><Target size={20} /></span>
              <h2 className="font-head font-extrabold text-lg" style={{ color: "var(--color-navy)" }}>{t("Why Neary exists")}</h2>
            </div>
            <p className="text-sm sm:text-[15px] leading-relaxed" style={{ color: "#5A5F80" }}>
              {t("Most women-run businesses in Cambodia start informally — a stall, a small workshop, a home kitchen — and many stay that way, even as they grow. Without steady records or a registered business, it's hard to prove a business is ready for financing, and just as hard for a bank to say yes. Neary exists to close that gap: a free, guided path from everyday recordkeeping through formalization to a documented readiness score — so that when a woman is ready to ask a bank for financing, she can show up with a real track record, not just a good idea.")}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--color-blush)", color: "var(--color-pink)" }}><HeartHandshake size={20} /></span>
              <h2 className="font-head font-extrabold text-lg" style={{ color: "var(--color-navy)" }}>{t("How we work")}</h2>
            </div>
            <p className="text-sm sm:text-[15px] leading-relaxed" style={{ color: "#5A5F80" }}>
              {t("Neary doesn't try to replace the institutions already doing this well — it connects to them. Business registration goes through the existing government registry. Payments run on QR rails already used across Cambodia. Financing decisions are made by licensed partner banks and a guarantee scheme, never by Neary. Our job is preparation and introduction, with a woman's consent required at every step where her information is shared beyond the app.")}
            </p>
          </div>
        </div>
      </section>

      <Partners />
      <ScopeTruths />
      <CTA />
    </>
  );
}
