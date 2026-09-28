import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import DisclosureBar from "./DisclosureBar";
import Nav from "./Nav";
import Footer from "./Footer";
import { useLang } from "../i18n/LangContext";

export default function Layout() {
  const { pathname } = useLocation();
  const { font } = useLang();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div style={font ? { fontFamily: font } : undefined}>
      <DisclosureBar />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
