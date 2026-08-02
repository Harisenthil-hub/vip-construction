import ProjectHero from "./component/ProjectHero";
import ProjectGallery from "./component/ProjectGallery";
import MaterialGallery from "./component/MaterialGallery";
import { Helmet } from "react-helmet-async";

const Project = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Projects | Completed Homes & Buildings by VIP Construction
        </title>
        <meta
          name="title"
          content="Our Projects | Completed Homes & Buildings by VIP Construction"
        />
        <meta
          name="description"
          content="Browse 100+ completed villas, homes & commercial projects by VIP Construction across Coimbatore, Udumalpet, Pollachi, Dharapuram & Palani."
        />
        <meta
          name="keywords"
          content="VIP Construction projects, completed villas Tamil Nadu, house construction gallery, commercial building projects Coimbatore"
        />
        <link
          rel="canonical"
          href="https://vipconstructions.co.in/project"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vipconstructions.co.in/project"
        />
        <meta
          property="og:title"
          content="Our Projects | Completed Homes & Buildings by VIP Construction"
        />
        <meta
          property="og:description"
          content="A look at the homes, shops, and buildings we've completed across Coimbatore, Udumalpet, Pollachi, Dharapuram & Palani — real work, real quality."
        />
        <meta
          property="og:image"
          content="https://vipconstructions.co.in/vip-construction-og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="VIP Construction" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://vipconstructions.co.in/project"
        />
        <meta
          name="twitter:title"
          content="Our Projects | Completed Homes & Buildings by VIP Construction"
        />
        <meta
          name="twitter:description"
          content="100+ completed villas, homes & commercial projects across Coimbatore, Udumalpet, Pollachi, Dharapuram & Palani."
        />
        <meta
          name="twitter:image"
          content="https://vipconstructions.co.in/vip-construction-twitter-card.png"
        />
      </Helmet>
      <ProjectHero />
      <ProjectGallery />
      <MaterialGallery />
    </>
  );
};

export default Project;
