import { NavLink, Link } from "react-router-dom";
import logo from "../assets/PDFGallery_20260717_153225_pages-to-jpg-0001.jpg";

export function NavBar() {
  return (
    <div className="mx-auto max-w-[1300px] py-2 bg-white flex justify-between px-1.2 items-center">
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
      <div className="">
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
          <li>
            <NavLink to="/contact" className="nav-link-underline">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
