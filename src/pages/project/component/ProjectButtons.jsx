import { FaPhoneAlt } from "react-icons/fa";

const ProjectButtons = () => {
  return (
    <div className="mt-12">
      <a
        href="tel:+919080273030"
        className="inline-flex items-center justify-center gap-2 border border-white/50 bg-black/10 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-md backdrop-blur-sm transition-colors duration-300"
      >
        <FaPhoneAlt size={15} />
        Contact Us
      </a>
    </div>
  );
};

export default ProjectButtons;