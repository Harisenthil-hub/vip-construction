import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { WaterMark } from "./WaterMark";
import { GiRotaryPhone } from "react-icons/gi";

import SymbolLogo from "../assets/logo/SymbolLogo.webp";
import NameLogo from "../assets/logo/NameLogo.webp";

export default function Footer() {
  const year = new Date().getFullYear();

  const social = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      link: "https://www.facebook.com/share/1DGh2xRqHR/?mibextid=wwXIfr",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      link: "https://www.instagram.com/vipconstruction_udumalpet?utm_source=qr&igsh=aDhjbGI4ZW1yamw2",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      link: "https://www.youtube.com/@vipconstruction_offical",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Project", path: "/project" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-3 py-10">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Company */}
          <div>
            {/* LOGO */}
            <Link className="flex" to="/">
              <div className="h-15 w-20 lg:w-25">
                <img
                  className="w-full h-full object-contain"
                  src={SymbolLogo}
                  alt="VIP CONSTRUCTION UDUMALPET"
                />
              </div>

              <div className="h-15 w-45 lg:w-65">
                <img
                  className="w-full h-full object-contain"
                  src={NameLogo}
                  alt="VIP CONSTRUCTION UDUMALPET"
                />
              </div>
            </Link>
            <p className="mt-4 leading-8 text-slate-400">
              Building homes, offices, and landmark projects across Coimbatore,
              Udumalpet, Pollachi, Dharapuram, and Palani with quality and trust
              since 2019.
            </p>
            {/* Social */}
            <div className="mt-8 flex gap-4">
              {social.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.link}
                    aria-label={item.label}
                    target="_a"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 transition duration-300 hover:bg-amber-500 hover:text-slate-900 text-lg border border-slate-800"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:text-center">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
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

          <div>
            <h3 className="text-xl font-bold text-white">Branches</h3>

            <div className="space-y-3 mt-3">
              <div className="space-y-1">
                <p className="font-bold text-secondary">Udumalpet Branch, <span className="text-gray-500 ml-1">Main Branch</span></p>
                <span>
                  8, Durairam layout, S.V Mill (P.O), Udumalpet, Tiruppur Dist –
                  642128.
                </span>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-secondary">Coimbatore Branch</p>
                <span>
                  No: 46 Srinagar, KK nagar, Ganapathi, Coimbatore – 641006.
                </span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-5">
              <div className="flex gap-4 items-center">
                <FaPhoneAlt className="text-amber-400 text-lg flex-shrink-0" />
                <span>
                  <Link
                    to="tel:+919080273030"
                    className="hover:text-amber-400 transition"
                  >
                    +91 9080273030
                  </Link>
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <GiRotaryPhone
                  size={25}
                  className="text-amber-400 text-lg flex-shrink-0"
                />
                <span>
                  <Link
                    to="tel:+919344432923"
                    className="hover:text-amber-400 transition"
                  >
                    +91 9344432923
                  </Link>
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <FaEnvelope className="text-amber-400 text-lg flex-shrink-0" />
                <span>
                  <Link
                    to="mailto:vipconstruction.14@gmail.com"
                    className="hover:text-amber-400 transition min-w-0 break-all"
                  >
                    vipconstruction.14@gmail.com
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE WATERMARK */}

      <WaterMark />

      {/* Bottom */}
      <div className="border-t border-slate-900 bg-slate-950/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-3 md:flex-row">
          <p className="text-slate-500 text-sm text-center">
            © {year} VIP Construction. All Rights Reserved. | Designed with
            excellence in Tamil Nadu.
          </p>
        </div>
      </div>
    </footer>
  );
}
