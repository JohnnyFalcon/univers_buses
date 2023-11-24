import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Fleet from "./pages/Fleet/Fleet";
import ContactPage from "./pages/ContactPage/ContactPage";
import SingleBus from "./pages/SingleBus/SingleBus";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();

  // Define a function to check if the current route is the home page
  const isHomePage = () => location.pathname === "/";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nasza-flota" element={<Fleet />} />
        <Route path=":bus" element={<SingleBus />} />
        <Route path=":bus/kontakt" element={<ContactPage />} />
      </Routes>
      {!isHomePage() && (
        <div className="footer-div">
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
