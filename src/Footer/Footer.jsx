import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <h2>Tiny Canvas Nails</h2>
        <div className="footer_socials">
          <a
            href="https://www.instagram.com/tiny.canvas.nails_by.mak?fbclid=IwY2xjawOhtHhleHRuA2FlbQIxMABicmlkETFDY2dvT05PSU15aEczRU15c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuKzHVRlo-t3uGELjGg0qzYtr3mZ61lZlKc-L20e2hGdeRhivysB5GHKaA6V_aem_rCN1w9y0uu0DSCacVH_rNA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={48} />
          </a>
          <a
            href="https://www.facebook.com/tinycanvasnailsbymak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={48} />
          </a>
        </div>
        <p>120 W Chicago Blvd, Tecumseh, MI 49286</p>
        <a
          href="https://www.vagaro.com/tinycanvasnailsbymak"
          target="_blank"
          rel="noopener noreferrer"
          className="footer_button"
        >
          Book Now
        </a>
      </div>
      <div className="footer_bottom">
        <p>© 2025 Tiny Canvas Nails. All rights reserved.</p>
      </div>
    </footer>
  );
}
