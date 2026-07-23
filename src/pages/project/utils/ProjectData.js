import villa1 from "../../../assets/project/project_gallery/Villa/villa.jpeg";
import villa2 from "../../../assets/project/project_gallery/Villa/villa.jpeg";
import villa3 from "../../../assets/project/project_gallery/Villa/villa.jpeg";
import villa4 from "../../../assets/project/project_gallery/Villa/villa.jpeg";

import office1 from "../../../assets/project/project_gallery/Office/office.jpeg";
import office2 from "../../../assets/project/project_gallery/Office/office.jpeg";
import office3 from "../../../assets/project/project_gallery/Office/office.jpeg";
import office4 from "../../../assets/project/project_gallery/Office/office.jpeg";

export const projects = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Hyderabad, TS",
    category: "Residential",
    status: "Completed",
    cover: villa1,
    images: [villa1, villa2, villa3, villa4],
  },

  {
    id: 2,
    title: "Corporate Office",
    location: "Bangalore, KA",
    category: "Commercial",
    status: "Completed",
    cover: office1,
    images: [office1, office2, office3, office4],
  },
];