import { Outlet } from "react-router-dom";
import { TopBar } from "../components/TopBar";
import { NavBar } from "../components/NavBar";

export function MainLayout() {
  return (
    <div>
      {/* TOP HEADER */}
      <TopBar />

      <nav className="relative z-50 bg-white">
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
