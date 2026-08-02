import { projects as allProjects } from "../../project/utils/ProjectData";

export const projects = allProjects
  .filter((project) => project.status === "Completed")
  .slice(0, 4)
  .map((project) => ({
    ...project,
    image: project.cover,
  }));

