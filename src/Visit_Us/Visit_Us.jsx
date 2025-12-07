import "./visit_us.css";
import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export function Visit_Us() {
  return (
    <section id="contact" className="visit">
      <h2 className="visit_title">Visit Us</h2>
      <h2 className="visit_caption">
        Find us in the heart of Tecumseh, Michigan
      </h2>

      <div className="visit_list">
        <div className="visit_card">
          <div className="visit_icon">
            <MapPin size={48} />
          </div>
          <h3 className="visit_text">Address</h3>
          <p>120 W Chicago Blvd</p>
          <p>Tecumseh, MI 49286</p>
        </div>

        <div className="visit_card">
          <div className="visit_icon">
            <Phone size={48} />
          </div>
          <h3 className="visit_text">Phone</h3>
          <p>(517) 301-1301</p>
        </div>

        <div className="visit_card">
          <div className="visit_icon">
            <a
              href="https://www.facebook.com/tinycanvasnailsbymak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={48} />
            </a>
          </div>
          <h3 className="visit_text">Facebook</h3>
          <p>Tiny Canvas Nails</p>
        </div>

        <div className="visit_card">
          <div className="visit_icon">
            <Clock size={48} />
          </div>
          <h3 className="visit_text">Hours</h3>
          <p>Monday: 9:30am - 7:00pm</p>
          <p>Friday: 9:30am - 7:00pm</p>
          <p>Saturday: 9:30am - 7:00pm</p>
        </div>
      </div>
    </section>
  );
}
