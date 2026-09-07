import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaInfoCircle,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useEffect } from "react";

export function MobileNav({ closeMenu, isMenuOpen }) {
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: FaHome,
    },
    {
      name: "Projects",
      path: "/project",
      icon: FaProjectDiagram,
    },
    {
      name: "Services",
      path: "/service",
      icon: FaTools,
    },
    {
      name: "About Us",
      path: "/about-us",
      icon: FaInfoCircle,
    },
    {
      name: "Contact Us",
      path: "/contact",
      icon: FaPhoneAlt,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Side Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-[82%] max-w-sm bg-primary shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div>
            <p className="font-poppins text-xs tracking-[0.25em] uppercase text-white/50">
              Navigation
            </p>

            <h2 className="mt-0.5 font-poppins text-lg font-semibold text-white">
              Menu
            </h2>
          </div>

          {/* Close Button */}
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:rotate-90"
          >
            <span className="text-xl font-light leading-none">×</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `group relative flex items-center gap-4 rounded-lg px-3 py-3 font-poppins transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 text-gold-hover"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* Icon */}
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
                            isActive
                              ? "bg-gold-hover/10 text-gold-hover"
                              : "bg-white/5 text-white/60 group-hover:text-gold-hover"
                          }`}
                        >
                          <Icon className="text-sm" />
                        </span>

                        {/* Text */}
                        <span className="flex-1 text-[15px] font-medium">
                          {item.name}
                        </span>

                        {/* Arrow */}
                        <FaArrowRight
                          className={`text-xs transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 text-gold-hover opacity-100"
                              : "-translate-x-2 text-white/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 w-full p-5">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <p className="font-poppins text-xs uppercase tracking-wide text-white/50">
              Let's build together
            </p>

            <p className="mt-1 font-poppins text-[12px] leading-relaxed text-white/80">
              Have a project in mind? Get in touch with us.
            </p>

            <NavLink
              to="/contact"
              state={{ scrollTo: "contact-form" }}
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gold-hover px-4 py-3 font-poppins text-sm font-semibold text-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Start a Conversation
              <FaArrowRight className="text-xs" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
