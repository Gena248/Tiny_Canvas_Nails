import "./App.css";
import { Navbar } from "./Navbar/Navbar.jsx";
import { Header } from "./Header/Header.jsx";
import { Our_Services } from "./Our_Services/Our_Services.jsx";
import { Our_Work } from "./Our_Work/Our_Work.jsx";
import { Visit_Us } from "./Visit_Us/Visit_Us.jsx";
import { Footer } from "./Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Our_Services />
      <Our_Work />
      <Visit_Us />
      <Footer />
    </>
  );
}

export default App;
