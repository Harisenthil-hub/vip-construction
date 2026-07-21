import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Service } from "../pages/service/Service";
import Project  from "../pages/project/Project";

export function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project/>} />
    </Routes>
  );
}