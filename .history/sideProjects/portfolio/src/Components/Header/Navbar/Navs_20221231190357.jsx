import React from "react";
import NavItem from "./NavItem";
import Classes from "./Nav.module.css";

const Navs = () => {
  return (
    <div>
      <nav className={Classes.navBar}>
        <a className={Classes.navbarBrand} href="#">
          Khalid
        </a>
        <div className={Classes.navbarNav} id="navbarNav">
          <ul className={Classes.navs}>
            <NavItem text="Home" />
            <NavItem text="Skill" />
            <NavItem text="Projects" />
            <NavItem text="Contact" />
          </ul>
          <ul className={Classes.navs}>
            <NavItem text="Github" />
            <NavItem text="LinkedIn" />
          </ul>
        </div>
        <div className={Classes.navbarNav} id="navbarNav">
          <ul className={Classes.navs}>
            <NavItem text="Github" />
            <NavItem text="LinkedIn" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navs;
