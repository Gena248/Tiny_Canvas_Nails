import "./Header.css";

export function Header() {
  return (
    <header className="header">
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
