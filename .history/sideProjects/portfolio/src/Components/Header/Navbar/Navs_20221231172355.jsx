import React from "react";
import NavItem from "./NavItem";
import Classes from "./Nav.module.css";

const Navs = () => {
  return (
    <div>
      <nav className={Classes.navBar}>
        <a className="navbar-brand" href="#">
          Khalid
        </a>

        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={Classes.navbarNav}>
            <NavItem text="Home" />
            <NavItem text="Skill" />
            <NavItem text="Features" />
            <NavItem text="Projects" />
            <NavItem text="Contact" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navs;
