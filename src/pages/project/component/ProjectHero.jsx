import banner from "../../../assets/project/hero_section/Project_Banner.png";
import ProjectStats from "./ProjectStats";
import ProjectButtons from "./ProjectButtons";
import ProjectWave from "./ProjectWave";

const ProjectHero = () => {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[550px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-black/90 via-primary/80 to-primary/60"></div>

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "35px 35px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-24">
        <div className="max-w-4xl">

          {/* Subtitle */}
          <span className="span-heading text-secondary">
            Our Portfolio
          </span>

          {/* Main Heading */}
          <h1 className="mt-5 font-extrabold leading-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Our{" "}
            <span className="text-secondary">
              Projects
            </span>{" "}
            Portfolio
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-white/80 leading-8 text-base sm:text-lg lg:text-xl">
            Discover our portfolio of residential, commercial, and industrial
            construction projects that showcase engineering excellence,
            innovative design, superior craftsmanship, and timely delivery.
            Every project reflects our commitment to quality, safety, and
            customer satisfaction.
          </p>

          <ProjectStats />

          <ProjectButtons />

        </div>
      </div>

      <ProjectWave />
    </section>
  );
};

export default ProjectHero;