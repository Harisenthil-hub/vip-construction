import { NavLink } from "react-router-dom";

export function MobileNavDropDown({ closeMenu, isMenuOpen }) {
  return (
    <div
      className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible pointer-events-none"
          }
        `}
    >
      <ul className="flex flex-col font-poppins px-5 py-3">
        <li>
          <NavLink to="/" end onClick={closeMenu}
            className={({ isActive }) => ` block py-3 border-b border-slate-100 transition-colors duration-300 ${ isActive ? "text-gold-hover" : "text-slate-700 hover:text-gold-hover" } ` }
          >
            Home
          </NavLink>
        </li>

       
        <li>
          <NavLink to="/about-us" onClick={closeMenu} className={({ isActive }) => ` block py-3 border-b border-slate-100 transition-colors duration-300 ${ isActive ? "text-gold-hover" : "text-slate-700 hover:text-gold-hover" } ` } >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/service" onClick={closeMenu} className={({ isActive }) => ` block py-3 border-b border-slate-100 transition-colors duration-300 ${ isActive ? "text-gold-hover" : "text-slate-700 hover:text-gold-hover" } ` }
          >
            Service
          </NavLink>
        </li>

        
        <li>
          <NavLink to="/project" onClick={closeMenu} className={({ isActive }) => ` block py-3 border-b border-slate-100 transition-colors duration-300 ${ isActive ? "text-gold-hover" : "text-slate-700 hover:text-gold-hover" } ` } >
            Project
          </NavLink>
        </li>

    
        <li>
          <NavLink
            to="/contact" onClick={closeMenu} className={({ isActive }) => ` block py-3 transition-colors duration-300 ${ isActive ? "text-gold-hover" : "text-slate-700 hover:text-gold-hover" } ` }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
