import banner from "../../../assets/project/hero_section/Project_Banner.webp";
import ProjectStats from "./ProjectStats";
import ProjectButtons from "./ProjectButtons";

const ProjectHero = () => {
  return (
    <section className="relative min-h-[40vh] md:min-h-[420px] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={banner}
        alt="VIP Construction Projects"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-black/90 via-primary/80 to-primary/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-14 md:py-16">
        <div className="max-w-4xl">

          {/* Subtitle */}
          <span className="span-heading text-secondary">
            Our Portfolio
          </span>

          {/* Heading */}
          <h1 className="mt-4 font-extrabold leading-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Our <span className="text-secondary">Projects</span> Portfolio
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-3xl text-white/80 leading-7 text-sm sm:text-base lg:text-lg">
            Discover our portfolio of residential, commercial, and industrial
            construction projects that showcase engineering excellence,
            innovative design, superior craftsmanship, and timely delivery.
            Every project reflects our commitment to quality, safety, and
            customer satisfaction.
          </p>

          {/* Stats */}
          <div className="mt-8">
            <ProjectStats />
          </div>

          {/* Buttons */}
          <div className="mt-8">
            <ProjectButtons />
          </div>

        </div>
      </div>

    </section>
  );
};

export default ProjectHero;