import { useState } from "react";

import "./Navbar.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__brand">Tiny Canvas Nails</div>

      <button className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>

      <ul className={`navbar__links ${isOpen ? "open" : ""}`}>
        <li className="navbar__link">
          <a href="#services" onClick={() => setIsOpen(false)}>
            Services
          </a>
        </li>
        <li className="navbar__link">
          <a href="#gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </a>
        </li>
        <li className="navbar__link">
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
        {/* <li className="navbar__link">
          <a href="#book" onClick={() => setIsOpen(false)}>Book Now</a>
        </li> */}
      </ul>
    </nav>
  );
}
