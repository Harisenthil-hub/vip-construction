import {
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const MobileTopBar = () => {
  return (
    <div className="flex items-center gap-8 px-4 shrink-0">
      <Link
        to="tel:+919080273030"
        className="flex items-center gap-1 whitespace-nowrap"
      >
        <FaPhoneAlt size={15} className="text-secondary" />
        <span>+91 9080273030</span>
      </Link>

      <Link
        to="mailto:vipconstruction.13@gmail.com"
        className="flex items-center gap-1 whitespace-nowrap"
      >
        <MdEmail size={19} className="text-secondary" />
        <span>vipconstruction.13@gmail.com</span>
      </Link>

      <div className="flex items-center gap-1 whitespace-nowrap">
        <FaClock size={17} className="text-secondary" />
        <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
      </div>

      <div className="flex items-center gap-1 whitespace-nowrap">
        <FaLocationDot size={17} className="text-secondary" />
        <span>Coimbatore, Udumalpet</span>
      </div>
      <div className="flex gap-2">
        <Link
          to="https://www.facebook.com/share/1DGh2xRqHR/?mibextid=wwXIfr"
          target="_a"
          className="p-2 bg-secondary/20 rounded-full text-secondary hover:bg-secondary hover:text-text-primary"
        >
          <FaFacebookF size={14} strokeWidth={5} />
        </Link>
        <Link
          to="https://www.instagram.com/vipconstruction_udumalpet?utm_source=qr&igsh=aDhjbGI4ZW1yamw2"
          target="_a"
          className="p-2 bg-secondary/20 rounded-full text-secondary hover:bg-secondary hover:text-text-primary"
        >
          <FaInstagram size={14} strokeWidth={5} />
        </Link>
        <Link
          to="https://www.youtube.com/@vipconstruction_offical"
          target="_a"
          className="p-2 bg-secondary/20 rounded-full text-secondary hover:bg-secondary hover:text-text-primary"
        >
          <FaYoutube size={14} strokeWidth={5} />
        </Link>
      </div>
    </div>
  );
};
