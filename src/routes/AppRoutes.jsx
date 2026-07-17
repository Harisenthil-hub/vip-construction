import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Service } from "../pages/service/Service";


export function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
    </Routes>
  );
}