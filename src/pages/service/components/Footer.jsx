import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-black text-white">
              VIP Construction
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              Building premium residential, commercial, industrial and architectural projects across Tamil Nadu with innovation, trust and quality since 2010.
            </p>
            {/* Social */}
            <div className="mt-8 flex gap-4">
              {[
                { icon: FaFacebookF, label: "Facebook" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaLinkedinIn, label: "LinkedIn" },
                { icon: FaYoutube, label: "YouTube" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    aria-label={item.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 transition duration-300 hover:bg-amber-500 hover:text-slate-900 text-lg border border-slate-800"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/service" },
                { name: "Projects", path: "/project" },
                { name: "FAQ", path: "/service#faq" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="transition hover:text-amber-400 duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Residential",
                "Commercial",
                "Industrial",
                "Architecture",
                "Interior Design",
                "Renovation",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/service"
                    className="transition hover:text-amber-400 duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Contact Us
            </h3>
            <div className="space-y-5">
              <div className="flex gap-4 items-center">
                <FaMapMarkerAlt className="text-amber-400 text-lg flex-shrink-0" />
                <span>Pollachi, Tamil Nadu — 642001</span>
              </div>
              <div className="flex gap-4 items-center">
                <FaPhoneAlt className="text-amber-400 text-lg flex-shrink-0" />
                <span><a href="tel:+919876543210" className="hover:text-amber-400 transition">+91 98765 43210</a></span>
              </div>
              <div className="flex gap-4 items-center">
                <FaEnvelope className="text-amber-400 text-lg flex-shrink-0" />
                <span><a href="mailto:info@vipconstruction.in" className="hover:text-amber-400 transition">info@vipconstruction.in</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-900 bg-slate-950/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-slate-500 text-sm">
            © {year} VIP Construction. All Rights Reserved. | Designed with excellence in Tamil Nadu.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-slate-900 shadow-lg transition duration-300 hover:bg-amber-400 hover:scale-110 active:scale-95"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
