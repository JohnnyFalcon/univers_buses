import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import igIcon from "../../assets/ig-icon.png";
import fbIcon from "../../assets/fb-icon.png";
import useMediaQuery from "@mui/material/useMediaQuery";
const Navbar = () => {
  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { pathname } = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);
  const isMobile = useMediaQuery("(max-width:1100px)");
  const toggleDrawer = (open) => {
    setShowDrawer(open);
  };
  return (
    <nav>
      <div className="nav-content">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="Logo" />
        </Link>
        {isMobile ? (
          <FontAwesomeIcon
            className="hamburger-icon"
            icon={faBars}
            size="2x"
            onClick={() => toggleDrawer(true)}
          />
        ) : (
          <>
            {pathname !== "/" ? (
              <ul className="links">
                <li>
                  <Link
                    className="nav-link"
                    to="/#about"
                    onClick={() => scroll("about")}
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="/#fleet"
                    onClick={() => scroll("fleet")}
                  >
                    NASZA FLOTA
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="/#contact"
                    onClick={() => scroll("contact")}
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="links">
                <li className="nav-link" onClick={() => scroll("about")}>
                  O nas
                </li>
                <li className="nav-link" onClick={() => scroll("fleet")}>
                  NASZA FLOTA
                </li>
                <li className="nav-link" onClick={() => scroll("contact")}>
                  Kontakt
                </li>
              </ul>
            )}

            <div className="social-links">
              <a href="https://www.instagram.com/sokol_j2000/" target="blank">
                <img src={igIcon} alt="Instagram icon" />
              </a>
              <a href="https://www.instagram.com/sokol_j2000/" target="blank">
                <img src={fbIcon} alt="Facebook icon" />
              </a>
            </div>
          </>
        )}

        <SwipeableDrawer
          sx={{
            ".MuiDrawer-paper": { p: "5%" }
          }}
          className="drawer"
          anchor="right"
          open={showDrawer}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          <ul className="links">
            <li>
              <Link
                className="nav-link"
                to="/#about"
                onClick={() => {
                  scroll("about");
                  setShowDrawer(false);
                }}
              >
                O nas
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/#fleet"
                onClick={() => {
                  scroll("fleet");
                  setShowDrawer(false);
                }}
              >
                NASZA FLOTA
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/#contact"
                onClick={() => {
                  scroll("contact");
                  setShowDrawer(false);
                }}
              >
                Kontakt
              </Link>
            </li>
          </ul>

          <div className="social-links">
            <a href="https://www.instagram.com/sokol_j2000/" target="blank">
              <img src={igIcon} alt="Instagram icon" />
            </a>
            <a href="https://www.instagram.com/sokol_j2000/" target="blank">
              <img src={fbIcon} alt="Facebook icon" />
            </a>
          </div>
        </SwipeableDrawer>
      </div>
    </nav>
  );
};

export default Navbar;
