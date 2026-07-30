import { Outlet } from "react-router-dom";
import { TopBar } from "../components/TopBar";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export function MainLayout() {
  return (
    <div>
      {/* TOP HEADER */}
      <TopBar />

      <nav className="relative z-50  border-y border-y-text-muted bg-[#0F172A]">
        <NavBar />
      </nav>
      <FloatingContact />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
