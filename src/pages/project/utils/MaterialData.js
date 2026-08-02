import cement1 from "../../../assets/project/material_gallery/cement/chettinad.webp";
import cement2 from "../../../assets/project/material_gallery/cement/Dalmia.webp";
import cement3 from "../../../assets/project/material_gallery/cement/Ramco.webp";
import cement4 from "../../../assets/project/material_gallery/cement/Ultratech.webp";

import steel1 from "../../../assets/project/material_gallery/steel/JSW.webp";
import steel2 from "../../../assets/project/material_gallery/steel/PRS.webp";
import steel3 from "../../../assets/project/material_gallery/steel/Pulkit.webp";
import steel4 from "../../../assets/project/material_gallery/steel/TATA.webp";
import steel5 from "../../../assets/project/material_gallery/steel/Vizag.webp";

import brick1 from "../../../assets/project/material_gallery/brick/Fly_Ash.webp";
import brick2 from "../../../assets/project/material_gallery/brick/Solid_Block.webp";
import brick3 from "../../../assets/project/material_gallery/brick/Wirecut.webp";

import wood1 from "../../../assets/project/material_gallery/wood/Burma_Teak.webp";
import wood2 from "../../../assets/project/material_gallery/wood/Nilambur_Teak.webp";
import wood3 from "../../../assets/project/material_gallery/wood/Sal_Wood.webp";

import tiles1 from "../../../assets/project/material_gallery/tiles/Anuj.webp";
import tiles2 from "../../../assets/project/material_gallery/tiles/Kajaria.webp";
import tiles3 from "../../../assets/project/material_gallery/tiles/Simpolo.webp";

import electrical1 from "../../../assets/project/material_gallery/electrical/Crompton.webp";
import electrical2 from "../../../assets/project/material_gallery/electrical/Finolex.webp";
import electrical3 from "../../../assets/project/material_gallery/electrical/GM.webp";
import electrical4 from "../../../assets/project/material_gallery/electrical/Legrand.webp";
import electrical5 from "../../../assets/project/material_gallery/electrical/Phlips.webp";
import electrical6 from "../../../assets/project/material_gallery/electrical/Wipro.webp";

import plumbing1 from "../../../assets/project/material_gallery/plumbing/Ashirvad.webp";
import plumbing2 from "../../../assets/project/material_gallery/plumbing/Supreme.webp";

import paint1 from "../../../assets/project/material_gallery/paint/Asianpaint.webp";
import paint2 from "../../../assets/project/material_gallery/paint/Berger.webp";
import paint3 from "../../../assets/project/material_gallery/paint/Birla_Opus.webp";
import paint4 from "../../../assets/project/material_gallery/paint/JSW.webp";

import wire1 from "../../../assets/project/material_gallery/wire/Kundan_Cab.webp";
import wire2 from "../../../assets/project/material_gallery/wire/RR_Kabel.webp";

import sanfit1 from "../../../assets/project/material_gallery/sanitary_fitting/Hindware.webp";
import sanfit2 from "../../../assets/project/material_gallery/sanitary_fitting/Jaguar.webp";
import sanfit3 from "../../../assets/project/material_gallery/sanitary_fitting/Kohler.webp";
import sanfit4 from "../../../assets/project/material_gallery/sanitary_fitting/Parryware.webp";

const materialCategories = [
  {
    category: "Cement",
    items: [
      {
        id: 1,
        name: "Cement",
        logo: cement1,
        images: [cement1, cement2, cement3, cement4],
      },
    ],
  },

  {
    category: "Steel",
    items: [
      {
        id: 2,
        name: "Steel",
        logo: steel1,
        images: [steel1, steel2, steel3, steel4, steel5],
      },
    ],
  },
  {
    category: "Tiles",
    items: [
      {
        id: 3,
        name: "Tiles",
        logo: tiles1,
        images: [tiles1, tiles2, tiles3],
      },
    ],
  },

  {
    category: "Electrical",
    items: [
      {
        id: 4,
        name: "Electrical",
        logo: electrical1,
        images: [
          electrical1,
          electrical2,
          electrical3,
          electrical4,
          electrical5,
          electrical6,
        ],
      },
    ],
  },

  {
    category: "Plumbing",
    items: [
      {
        id: 5,
        name: "Plumbing",
        logo: plumbing1,
        images: [plumbing1, plumbing2],
      },
    ],
  },

  {
    category: "Paint",
    items: [
      {
        id: 6,
        name: "Paint",
        logo: paint1,
        images: [paint1, paint2, paint3, paint4],
      },
    ],
  },

  {
    category: "Wire",
    items: [
      {
        id: 7,
        name: "Wire",
        logo: wire1,
        images: [wire1, wire2],
      },
    ],
  },

  {
    category: "Sanitary Fitting",
    items: [
      {
        id: 8,
        name: "Sanitary Fitting",
        logo: sanfit1,
        images: [sanfit1, sanfit2, sanfit3, sanfit4],
      },
    ],
  },
  {
    category: "Brick",
    items: [
      {
        id: 9,
        name: "Brick",
        logo: brick1,
        images: [brick1, brick2, brick3],
      },
    ],
  },

  {
    category: "Wood",
    items: [
      {
        id: 10,
        name: "Wood",
        logo: wood1,
        images: [wood1, wood2, wood3],
      },
    ],
  }
];

export default materialCategories;