import { NavLink, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { MdCallMade } from "react-icons/md";
import { useState } from "react";
import logo from "../assets/PDFGallery_20260717_153225_pages-to-jpg-0001.jpg";
import { MobileNavDropDown } from "./MobileNavDropDown";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="mx-auto lg:max-w-[1300px] py-2 bg-white flex justify-between lg:px-1 items-center px-3 pr-5">
        {/* LOGO */}
        <Link>
          <div className="h-15 w-40">
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/1980276924/vector/no-photo-thumbnail-graphic-element-no-found-or-available-image-in-the-gallery-or-album-flat.jpg?s=612x612&w=0&k=20&c=ZBE3NqfzIeHGDPkyvulUw14SaWfDj2rZtyiKv3toItk="
              alt=""
            />
          </div>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 list-none font-poppins">
            <li>
              <NavLink to="/" end className="nav-link-underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="nav-link-underline">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="nav-link-underline">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className="nav-link-underline">
                Project
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/contact" className="px-2 py-2 font-medium bg-secondary hover:bg-gold-hover text-white rounded-sm flex items-center transition-transform duration-300 hover:-translate-y-0.5">
                Contact Us <MdCallMade size={20} />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* MOBILE / TABLET HAMBURGER */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className=" lg:hidden flex items-center justify-center text-slate-700 hover:text-gold-hover transition-colors duration-300 cursor-pointer" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen} >
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* MOBILE / TABLET DROPDOWN */}
      <MobileNavDropDown closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
    </>
  );
}
