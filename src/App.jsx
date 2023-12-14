import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Fleet from "./pages/Fleet/Fleet";
import ContactPage from "./pages/ContactPage/ContactPage";
import SingleBus from "./pages/SingleVehicle/SingleBus";
import SingleCar from "./pages/SingleVehicle/SingleCar";
import SingleMini from "./pages/SingleVehicle/SingleMini";
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
        <Route path="bus/:bus" element={<SingleBus />} />
        <Route path="bus/:vehicle/kontakt" element={<ContactPage />} />
        <Route path="mini/:mini" element={<SingleMini />} />
        <Route path="mini/:vehicle/kontakt" element={<ContactPage />} />
        <Route path="car/:car" element={<SingleCar />} />
        <Route path="car/:vehicle/kontakt" element={<ContactPage />} />
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
