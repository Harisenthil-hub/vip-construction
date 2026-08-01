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
    area: "5,800 sq.ft",
    price: "Rs 2.8 Cr",
    year: "2023",

    cover: villa1,
    images: [villa1, villa2, villa3, villa4],
  },

  {
    id: 2,
    title: "Corporate Office",
    location: "Bangalore, KA",
    category: "Commercial",
    status: "Completed",
    area: "18,500 sq.ft",
    price: "Rs 12 Cr",
    year: "2024",

    cover: office1,
    images: [office1, office2, office3, office4],
  },
];