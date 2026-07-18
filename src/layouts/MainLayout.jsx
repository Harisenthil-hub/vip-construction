import { Outlet } from "react-router-dom";
import { TopBar } from "../components/TopBar";

export function MainLayout() {
  return (
    <div>
      {/* TOP HEADER */}
      <TopBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
