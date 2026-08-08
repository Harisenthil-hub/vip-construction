import cement1 from "../../../assets/project/material_gallery/cement/Chettinad.webp";
import cement2 from "../../../assets/project/material_gallery/cement/Dalmia.webp";
import cement3 from "../../../assets/project/material_gallery/cement/Ramco.webp";
import cement4 from "../../../assets/project/material_gallery/cement/UltraTech.webp";

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
import wood4 from "../../../assets/project/material_gallery/wood/Mahogany.webp";

import tiles1 from "../../../assets/project/material_gallery/tiles/Anuj.webp";
import tiles2 from "../../../assets/project/material_gallery/tiles/Kajaria.webp";
import tiles3 from "../../../assets/project/material_gallery/tiles/Simpolo.webp";
import tiles4 from "../../../assets/project/material_gallery/tiles/Somany.webp";
import tiles5 from "../../../assets/project/material_gallery/tiles/Johnson.webp";
import tiles6 from "../../../assets/project/material_gallery/tiles/Cera.webp";

import electrical1 from "../../../assets/project/material_gallery/electrical/Legrand.webp";
import electrical2 from "../../../assets/project/material_gallery/electrical/GM.webp";
import electrical3 from "../../../assets/project/material_gallery/electrical/Anchor.webp";
import electrical4 from "../../../assets/project/material_gallery/electrical/Schneider.webp";
import electrical5 from "../../../assets/project/material_gallery/electrical/Norwood.webp";

import plumbing1 from "../../../assets/project/material_gallery/plumbing/Ashirvad.webp";
import plumbing2 from "../../../assets/project/material_gallery/plumbing/Supreme.webp";
import plumbing3 from "../../../assets/project/material_gallery/plumbing/Astral.webp";

import paint1 from "../../../assets/project/material_gallery/paint/Asianpaint.webp";
import paint2 from "../../../assets/project/material_gallery/paint/Berger.webp";
import paint3 from "../../../assets/project/material_gallery/paint/Birla_Opus.webp";
import paint4 from "../../../assets/project/material_gallery/paint/JSW.webp";

import wire1 from "../../../assets/project/material_gallery/wire/Kundan_Cab.webp";
import wire2 from "../../../assets/project/material_gallery/wire/RR_Kabel.webp";
import wire3 from "../../../assets/project/material_gallery/wire/Finolex.webp";
import wire4 from "../../../assets/project/material_gallery/wire/Polycab.webp";
import wire5 from "../../../assets/project/material_gallery/wire/Orbit.webp";

import sanfit1 from "../../../assets/project/material_gallery/sanitary_fitting/Jaguar.webp";
import sanfit2 from "../../../assets/project/material_gallery/sanitary_fitting/Kohler.webp";
import sanfit3 from "../../../assets/project/material_gallery/sanitary_fitting/Parryware.webp";
import sanfit4 from "../../../assets/project/material_gallery/sanitary_fitting/Hindware.webp";
import sanfit5 from "../../../assets/project/material_gallery/sanitary_fitting/American_Standard.webp";

const materialCategories = [
  {
    category: "Cement",
    items: [
      {
        id: 1,
        name: "Cement",
        logo: cement1,
        images: [
          { src: cement1, alt: "Chettinad Cement – trusted cement brand used by VIP Construction" },
          { src: cement2, alt: "Dalmia Bharat Cement – premium cement partner brand" },
          { src: cement3, alt: "Ramco Supergrade Cement – strong, reliable cement brand" },
          { src: cement4, alt: "UltraTech Cement – engineer's choice cement brand" },
        ],
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
        images: [
          { src: steel1, alt: "JSW Steel – high-quality structural steel brand" },
          { src: steel2, alt: "PRS Steels & Building Materials logo" },
          { src: steel3, alt: "Pulkit TMT Bars – trusted steel reinforcement brand" },
          { src: steel4, alt: "TATA Steel – premium construction steel brand" },
          { src: steel5, alt: "Vizag Steel – pride of steel, trusted construction material" },
        ],
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
        images: [
          { src: brick1, alt: "Flyash Bricks – quality construction material used by VIP Construction" },
          { src: brick2, alt: "Solid Hallow blocks – strong and durable construction material" },
          { src: brick3, alt: "Wirecut-RedBricks – quality wall construction material used by VIP Construction" },
        ],
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
        images: [
          { src: tiles1, alt: "Anuj Tiles – flooring and tiling brand partner" },
          { src: tiles2, alt: "Kajaria Ceramics – premium tiles brand" },
          { src: tiles3, alt: "Simpolo Tiles & Bathware – quality tiles and bathware brand" },
          { src: tiles4, alt: "Somany Ceramics – premium tiles and flooring brand" },
          { src: tiles5, alt: "Johnson Tiles – trusted tiles and flooring brand" },
          { src: tiles6, alt: "CERA – quality tiles and bathroom solutions brand" },
        ],
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
        images: [
          { src: wood1, alt: "Burma Teakwood – quality wood material used by VIP Construction" },
          { src: wood2, alt: "Nilambur Teakwood – durable wood material for construction" },
          { src: wood3, alt: "Salwood – strong wood material for structural use" },
          { src: wood4, alt: "Mahogany wood – premium hardwood material for construction" },
        ],
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
        images: [
          { src: wire1, alt: "Kundan Cab – trusted wiring cables brand" },
          { src: wire2, alt: "RR Kabel  quality wires and cables brand" },
          { src: wire3, alt: "Finolex – premium electrical wiring brand" },
          { src: wire4, alt: "Polycab – trusted wires and cables brand" },
          { src: wire5, alt: "Orbit – quality electrical wires and cables brand" },
        ],
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
          { src: electrical1, alt: "Legrand – premium electrical solutions brand" },
          { src: electrical2, alt: "GM Switches – reliable electrical switches brand" },
          { src: electrical3, alt: "Anchor – trusted electrical switches and fittings brand" },
          { src: electrical4, alt: "Schneider Electric – premium electrical solutions brand" },
          { src: electrical5, alt: "Norwood – quality electrical and lighting products brand" },
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
        images: [
          { src: plumbing1, alt: "Ashirvad Pipes – trusted plumbing pipes brand" },
          { src: plumbing2, alt: "Supreme Pipes – quality plumbing pipes and fittings used by VIP Construction" },
          { src: plumbing3, alt: "Astral Pipes – reliable plumbing solutions brand" },
        ],
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
        images: [
          { src: sanfit1, alt: "Jaquar – premium sanitary and bathroom fittings brand" },
          { src: sanfit2, alt: "Kohler – quality bathroom and sanitary fittings brand" },
          { src: sanfit3, alt: "Parryware – reliable sanitary ware and bathroom fittings brand" },
          { src: sanfit4, alt: "Hindware – trusted sanitary fittings and bathroom brand" },
          { src: sanfit5, alt: "American Standard – premium sanitary ware and bathroom fittings brand" },
        ],
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
        images: [
          { src: paint1, alt: "Asian Paints – trusted wall paint brand" },
          { src: paint2, alt: "Berger Paints – premium paint brand" },
          { src: paint3, alt: "Birla Opus Paints – quality paint brand" },
          { src: paint4, alt: "JSW Paints – reliable paint brand" },
        ],
      },
    ],
  },

];

export default materialCategories;