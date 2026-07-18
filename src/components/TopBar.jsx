import {
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function TopBar() {
  return (
    <div className="bg-primary text-text-muted py-1 mx-auto text-base">
      <div className="flex justify-between max-w-[1300px] mx-auto py-0.5">
        {/* TOP BAR LEFT */}
        <div className="flex items-center gap-3">
          <a
            href=""
            className="flex items-center text-wrap gap-1 hover:text-white"
          >
            <FaPhoneAlt size={15} className="text-secondary inline" />
            <span>+91 1234567890</span>
          </a>
          <a href="" className="flex items-center gap-1 hover:text-white">
            <MdEmail size={19} className="text-secondary inline" />
            <span>vipconstruction@gmail.com</span>
          </a>
          <div className="flex items-center gap-1">
            <FaClock size={17} className="text-secondary" />
            <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
          </div>
        </div>

        {/* TOP BAR RIGHT */}
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <FaLocationDot size={17} className="text-secondary" />
            <a href="" className="hover:text-white">
              Coimbatore,
            </a>
            <a href="" className="hover:text-white">
              Udumalpet
            </a>
          </div>
          <div className="flex gap-2">
            <a
              href=""
              className="p-2 bg-secondary/20 rounded-full text-secondary hover:bg-secondary hover:text-text-primary"
            >
              <FaFacebookF size={14} strokeWidth={5} />
            </a>
            <a
              href=""
              className="p-2 bg-secondary/20 rounded-full text-secondary hover:bg-secondary hover:text-text-primary"
            >
              <FaInstagram size={14} strokeWidth={5} />
            </a>
            <a
              href=""
              className="p-2 bg-secondary/20 rounded-full text-secondary hover:bg-secondary hover:text-text-primary"
            >
              <FaWhatsapp size={14} strokeWidth={5} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
