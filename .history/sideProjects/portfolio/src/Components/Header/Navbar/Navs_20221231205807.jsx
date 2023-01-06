import React from "react";
// import NavItem from './NavItem';
import Classes from "./Nav.module.css";
import { Link } from "@reach/router";

const Navs = () => {
  return (
    <div>
      <nav className={Classes.navBar}>
        <span className={Classes.navbarBrand}>Khalid</span>
        <div className={Classes.navbarNav} id="navbarNav">
          <ul className={Classes.navs}>
            <li className="nav-item">
              <Link className={Classes.navLinks} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={Classes.navLinks} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={Classes.navLinks} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navs;
