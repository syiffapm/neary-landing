import { Users, Handshake, TrendingUp, BookOpen, Sparkles } from "lucide-react";
import { NEWS } from "../data/content";
import { useLang } from "../i18n/LangContext";

const ICONS = { Users, Handshake, TrendingUp, BookOpen, Sparkles };
const TAG_BG = {
  "New feature": "#EFF6FF", "Partnership": "#FCEAF3", "Milestone": "#ECFDF5",
  "New content": "#FEF9C3", "Programme": "#F3E8FF",
};
const TAG_FG = {
  "New feature": "#2563EB", "Partnership": "var(--color-pink-deep)", "Milestone": "#059669",
  "New content": "#A16207", "Programme": "#7E22CE",
};

export default function News({ limit }) {
  const { t } = useLang();
  const items = limit ? NEWS.slice(0, limit) : NEWS;
  return (
    <div className="space-y-3">
      {items.map((n) => {
        const Icon = ICONS[n.icon] || Sparkles;
        const bg = TAG_BG[n.tag] || "var(--color-blush-2)";
        const fg = TAG_FG[n.tag] || "var(--color-pink-deep)";
        return (
          <div key={n.title} className="rounded-2xl border border-black/5 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 hover:shadow-sm transition-shadow">
            <span className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: bg, color: fg }}>
              <Icon size={24} />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ background: bg, color: fg }}>{t(n.tag)}</span>
                <span className="text-xs font-bold" style={{ color: "#9CA3AF" }}>{n.date}</span>
              </div>
              <h3 className="font-head font-extrabold text-[15px]" style={{ color: "var(--color-navy)" }}>{t(n.title)}</h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "#6A6F90" }}>{t(n.text)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
