import {
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MobileTopBar } from "./MobileTopBar";

export function TopBar() {
  return (
    <>
      <div className="bg-primary text-text-muted py-1 text-base">
        {/* DESKTOP */}
        <div className="hidden lg:flex justify-between max-w-[1300px] mx-auto py-0.5">
          {/* TOP BAR LEFT */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919080273030"
              className="flex items-center text-wrap gap-1 hover:text-white"
            >
              <FaPhoneAlt size={15} className="text-secondary inline" />
              <span>+91 9080273030</span>
            </a>
            <a
              href="mailto:vipconstruction.14@gmail.com"
              className="flex items-center gap-1 hover:text-white"
            >
              <MdEmail size={19} className="text-secondary inline" />
              <span>vipconstruction.14@gmail.com</span>
            </a>
            <div className="flex items-center gap-1">
              <FaClock size={17} className="text-secondary" />
              <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
            </div>
          </div>

          {/* TOP BAR RIGHT */}
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <FaLocationDot size={17} className="text-secondary" />
              <a
                href="https://maps.app.goo.gl/CFg6UpyqERAGcK6p8?g_st=aw"
                className="hover:text-white"
                target="_a"
              >
                Udumalpet,
              </a>
              <span>Coimbatore</span>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/share/1DGh2xRqHR/?mibextid=wwXIfr"
                target="_a"
                className="p-2 bg-secondary/20 rounded-full text-secondary hover:bg-secondary hover:text-text-primary"
              >
                <FaFacebookF size={14} strokeWidth={5} />
              </a>
              <a
                href="https://www.instagram.com/vipconstruction_udumalpet?utm_source=qr&igsh=aDhjbGI4ZW1yamw2"
                target="_a"
                className="p-2 bg-secondary/20 rounded-full text-secondary hover:bg-secondary hover:text-text-primary"
              >
                <FaInstagram size={14} strokeWidth={5} />
              </a>
              <a
                href="https://www.youtube.com/@vipconstruction_offical"
                target="_a"
                className="p-2 bg-secondary/20 rounded-full text-secondary hover:bg-secondary hover:text-text-primary"
              >
                <FaYoutube size={14} strokeWidth={5} />
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE + TABLET TICKER */}
        <div className="lg:hidden overflow-hidden w-full">
          <div className="topbar-marquee flex w-max">
            {/* First copy */}
            <MobileTopBar />

            {/* Duplicate for seamless looping */}
            <MobileTopBar />
          </div>
        </div>
      </div>
    </>
  );
}
