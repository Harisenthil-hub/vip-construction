import { FaPhoneAlt } from "react-icons/fa";

const ProjectButtons = () => {
  return (
    <div className="mt-5 sm:mt-12">
      <a
        href="tel:+919080273030"
        className="inline-flex items-center justify-center gap-1.5 sm:gap-2 border border-white/50 bg-black/10 hover:bg-white/10 text-white font-semibold px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-base rounded-md backdrop-blur-sm transition-colors duration-300"
      >
        <FaPhoneAlt size={15} />
        Contact Us
      </a>
    </div>
  );
};

export default ProjectButtons;