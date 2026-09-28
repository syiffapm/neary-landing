import { useLang } from "../i18n/LangContext";

export default function DisclosureBar() {
  const { t } = useLang();
  return (
    <div className="text-white text-[11px] sm:text-xs text-center py-2 px-4" style={{ background: "var(--color-navy)" }}>
      {t("A Ministry of Women's Affairs programme — Kingdom of Cambodia, operated by LinkIT")}
    </div>
  );
}
