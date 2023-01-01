import React from "react";
import NavItem from "./NavItem";
import Classes from "./Nav.module.css";

const Navs = () => {
  return (
    <div>
      <nav className={Classes.navBar}>
        <span className={Classes.navbarBrand}>Khalid</span>
        <div className={Classes.navbarNav} id="navbarNav">
          <NavItem />
        </div>
      </nav>
    </div>
  );
};

export default Navs;
