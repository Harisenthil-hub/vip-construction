import cement1 from "../../../assets/project/material_gallery/cement/cement1.jpeg";
// import cement2 from "../../../assets/project/material_gallery/cement/cement2.jpg";
// import cement3 from "../../../assets/project/material_gallery/cement/cement3.jpg";
// import cement4 from "../../../assets/project/material_gallery/cement/cement4.jpg";

import steel1 from "../../../assets/project/material_gallery/steel/steel1.jpeg";
// import steel2 from "../../../assets/project/material_gallery/steel/steel2.jpg";
// import steel3 from "../../../assets/project/material_gallery/steel/steel3.jpg";
// import steel4 from "../../../assets/project/material_gallery/steel/steel4.jpg";

const materials = [
  {
    id: 1,
    name: "UltraTech Cement",
    category: "Cement",
    brand: "UltraTech",
    cover: cement1,

    images: [
      cement1
      ,cement1,
      cement1,
      cement1,
    ],
  },

  {
    id: 2,
    name: "TATA TMT Steel",
    category: "Steel",
    brand: "TATA",
    cover: steel1,

    images: [
      steel1
      ,steel1,
      steel1,
      steel1,
    ],
  },
];

export default materials;