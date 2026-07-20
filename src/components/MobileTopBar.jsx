import {
    FaPhoneAlt,
    FaClock,
  } from "react-icons/fa";
  import { FaLocationDot } from "react-icons/fa6";
  import { MdEmail } from "react-icons/md";

export const MobileTopBar = () => {
  return (
    <div className="flex items-center gap-8 px-4 shrink-0">
      <a
        href="tel:+911234567890"
        className="flex items-center gap-1 whitespace-nowrap"
      >
        <FaPhoneAlt size={15} className="text-secondary" />
        <span>+91 1234567890</span>
      </a>

      <a
        href="mailto:vipconstruction@gmail.com"
        className="flex items-center gap-1 whitespace-nowrap"
      >
        <MdEmail size={19} className="text-secondary" />
        <span>vipconstruction@gmail.com</span>
      </a>

      <div className="flex items-center gap-1 whitespace-nowrap">
        <FaClock size={17} className="text-secondary" />
        <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
      </div>

      <div className="flex items-center gap-1 whitespace-nowrap">
        <FaLocationDot size={17} className="text-secondary" />
        <span>Coimbatore, Udumalpet</span>
      </div>
    </div>
  );
};
