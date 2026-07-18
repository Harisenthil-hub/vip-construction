import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Service } from "../pages/service/Service";
import { MainLayout } from "../layouts/MainLayout";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
      </Route>
    </Routes>
  );
}
