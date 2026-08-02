import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Service } from "../pages/service/Service";
import { MainLayout } from "../layouts/MainLayout";
import Project from "../pages/project/Project";
import ProjectDetails from "../pages/project/component/ProjectDetails";
import Aboutus from "../pages/aboutus/Aboutus";
import Contact from "../pages/contact/pages/Contact";
import NotFoundPage from "../pages/error/NotFoundPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

