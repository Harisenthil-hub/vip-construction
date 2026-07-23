// Import Images (WebP format for optimal performance)
import residential1 from "../images/residential1.webp";
import residential2 from "../images/residential2.webp";
import residential3 from "../images/residential3.webp";
import residential4 from "../images/residential4.webp";

import commercial1 from "../images/commercial1.webp";
import commercial2 from "../images/commercial2.webp";
import commercial3 from "../images/commercial3.webp";
import commercial4 from "../images/commercial4.webp";

import industrial1 from "../images/industrial1.webp";
import architecture1 from "../images/architecture1.webp";
import interior1 from "../images/interior1.webp";
import renovation1 from "../images/renovation1.webp";
import villa1 from "../images/villa1.webp";
import villa3 from "../images/villa3.webp";

export const services = [
  {
    id: "residential",
    title: "Residential",
    subtitle: "Luxury Homes Crafted For Modern Living",
    description:
      "We design and construct premium villas, duplex houses, apartments, smart homes and luxury residences with world-class engineering, elegant architecture and superior craftsmanship. Our team of skilled architects and civil engineers ensures every project meets the highest standards of quality, safety and aesthetics.",
    images: [
      residential1,
      residential2,
      residential3,
      residential4,
    ],
    features: [
      "Luxury Villas & Bungalows",
      "Duplex & Triplex Houses",
      "Smart Automated Homes",
      "Farm Houses & Estates",
      "Apartments & Flats",
      "Gated Community Villas",
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    subtitle: "Commercial Buildings Designed For Business Success",
    description:
      "We deliver high-quality commercial construction for office buildings, shopping malls, hospitals, schools, retail stores, hotels and IT parks. Every commercial project is built using modern technology, engineered for longevity and designed to reflect your brand identity.",
    images: [
      commercial1,
      commercial2,
      commercial3,
      commercial4,
    ],
    features: [
      "Corporate Office Buildings",
      "Shopping Malls & Retail Spaces",
      "IT Parks & Tech Campuses",
      "Hotels & Resorts",
      "Hospitals & Clinics",
      "Educational Institutions",
    ],
  },
  {
    id: "industrial",
    title: "Industrial",
    subtitle: "Robust Industrial Infrastructure Built To Last",
    description:
      "We engineer and construct high-performance industrial buildings for warehouses, factories, manufacturing plants and logistics hubs. Our industrial projects are built to withstand heavy operational loads with structural integrity, fire safety compliance and efficient workflow layouts.",
    images: [
      industrial1,
      commercial1,
      commercial3,
      residential2,
    ],
    features: [
      "Factories & Manufacturing Plants",
      "Warehouses & Cold Storage",
      "Industrial Parks & SEZ",
      "Logistics & Distribution Centers",
      "Pre-Engineered Steel Buildings",
      "Utility & Power Infrastructure",
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    subtitle: "Creative Architecture That Defines Excellence",
    description:
      "Our architects blend aesthetics with engineering to create elegant, sustainable and innovative structures. We produce detailed 2D floor plans, 3D elevations, structural drawings and landscape designs that bring your vision to life on paper before the first brick is laid.",
    images: [
      architecture1,
      residential1,
      commercial4,
      villa1,
    ],
    features: [
      "2D Floor Plans & Layouts",
      "3D Elevation & Rendering",
      "Site Planning & Zoning",
      "Landscape & Garden Design",
      "Structural & MEP Drawings",
      "Building Plan Approval",
    ],
  },
  {
    id: "interior",
    title: "Interior Design",
    subtitle: "Beautiful Interiors Designed For The Way You Live",
    description:
      "We transform raw spaces into luxurious, comfortable and modern interiors using premium materials, bespoke furniture and timeless design principles. Our interior designers work closely with clients to craft spaces that reflect personality, maximise comfort and optimise functionality.",
    images: [
      interior1,
      residential3,
      residential4,
      commercial2,
    ],
    features: [
      "Modular Kitchen Design",
      "False Ceiling & Lighting",
      "Bedroom Interior Fit-Out",
      "Custom TV Unit & Wall Panels",
      "Walk-in Wardrobe Design",
      "Living & Dining Area Design",
    ],
  },
  {
    id: "renovation",
    title: "Renovation",
    subtitle: "Transforming Old Buildings Into Modern Spaces",
    description:
      "Breathe new life into ageing properties with our comprehensive renovation services. We renovate villas, apartments, offices and commercial buildings with modern finishes, structural improvements, energy-efficient upgrades and premium interior remodelling.",
    images: [
      renovation1,
      residential3,
      residential4,
      villa3,
    ],
    features: [
      "Full Villa & Home Renovation",
      "Office & Commercial Refurbishment",
      "Kitchen & Bathroom Remodeling",
      "Exterior Painting & Cladding",
      "Waterproofing & Damp Treatment",
      "Structural Repair & Strengthening",
    ],
  },
];
