import "./Header.css";
import img4 from "../images/img4.jpg";

export function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.7) 50%,
          rgba(255, 255, 255, 1) 100%
        ), url(${img4})`,
      }}
    >
      <h1 className="header__title">
        Your nails, <br />
        our canvas
      </h1>
      <p className="header__subtitle">
        Artistry meets precision at Tecumseh's premier nail salon
      </p>
      <a
        href="https://www.vagaro.com/tinycanvasnailsbymak"
        target="_blank"
        rel="noopener noreferrer"
        className="header__button"
      >
        Book Your Appointment
      </a>
    </header>
  );
}
