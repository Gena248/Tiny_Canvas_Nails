import "./Our_Services.css";
import React from "react";
import {
  Sparkles,
  Palette,
  Heart,
  Star,
  Wrench,
  Layers,
  Hammer,
  Droplet,
} from "lucide-react";

export function Our_Services() {
  return (
    <section id="services" className="services">
      <h2 className="services_title">Our Services</h2>
      <h2 className="services_caption">
        Discover our range of nail care services designed to pamper and perfect
      </h2>

      <div className="services_list">
        <div className="service_card">
          <div className="service_icon">
            <Sparkles size={48} />
          </div>
          <h3 className="service_text">Gel Manicure</h3>
          <p>Long-lasting gel polish with UV curing</p>
          <p>$35</p>
        </div>

        <div className="service_card">
          <div className="service_icon">
            <Wrench size={48} />
          </div>
          <h3 className="service_text">Nail Replacement</h3>
          <p>Professional nail repair and replacement</p>
          <p>$10</p>
        </div>

        <div className="service_card">
          <div className="service_icon">
            <Star size={48} />
          </div>
          <h3 className="service_text">Gel-X Manicure</h3>
          <p>Premium soft gel extension system</p>
          <p>$50</p>
        </div>

        <div className="service_card">
          <div className="service_icon">
            <Heart size={48} />
          </div>
          <h3 className="service_text">Rubber Base Gel</h3>
          <p>Flexible, durable gel base coat</p>
          <p>$35</p>
        </div>

        <div className="service_card">
          <div className="service_icon">
            <Palette size={48} />
          </div>
          <h3 className="service_text">Nail Art</h3>
          <p>Custom designs tailored to your style</p>
          <p>$5 per nail</p>
        </div>

        <div className="service_card">
          <div className="service_icon">
            <Layers size={48} />
          </div>
          <h3 className="service_text">Gel-X Fill</h3>
          <p>Seamless refill to maintain Gel-X extensions</p>
          <p>$25</p>
        </div>

        <div className="service_card">
          <div className="service_icon">
            <Hammer size={48} />
          </div>
          <h3 className="service_text">Acrylic Fill</h3>
          <p>Fresh fill to restore acrylic strength and shape</p>
          <p>$25</p>
        </div>

        <div className="service_card">
          <div className="service_icon">
            <Droplet size={48} />
          </div>
          <h3 className="service_text">Soak Off</h3>
          <p>Gentle removal of gel or acrylic enhancements</p>
          <p>$20</p>
        </div>
      </div>
    </section>
  );
}
