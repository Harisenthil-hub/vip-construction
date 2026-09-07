import banner from "../../../assets/project/hero_section/Project_Banner.webp";
import ProjectStats from "./ProjectStats";
import ProjectButtons from "./ProjectButtons";

const ProjectHero = () => {
  return (
    <section className="relative min-h-0 sm:min-h-[calc(100vh-300px)] lg:min-h-[645px] flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={banner}
        alt="VIP Construction Projects"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-black/90 via-primary/80 to-primary/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-4 py-10 md:py-16">
        {/* Subtitle */}
        {/* <span className="span-heading text-secondary">
            Our Portfolio
          </span> */}

        {/* Heading */}
        <h1 className="mt-2 sm:mt-4 font-extrabold leading-tight text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Our Work,<br /><span className="text-secondary">Our Pride & Legacy</span>
        </h1>

        {/* Description */}
        <p className="mt-3 sm:mt-5 max-w-3xl text-white/80 leading-relaxed text-xs sm:text-base lg:text-lg">
          Houses, shops, and offices we've built across Coimbatore, Udumalpet,
          Tiruppur, Pollachi, Dharapuram, and Palani. See the work for yourself
          before you decide.
        </p>

        {/* Stats */}
        <div className="mt-5 sm:mt-8 max-w-4xl">
          <ProjectStats />
        </div>

        {/* Buttons */}
        <div className="mt-5 sm:mt-8">
          <ProjectButtons />
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
