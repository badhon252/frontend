import React from 'react';
import NavItem from './NavItem';
import Classes from "./Nav.module.css"

const Navs = () => {
    return (
        <div>
            <nav className={Classes.navBar}>
                <a className={Classes.navbarBrand} href="#">Khalid</a>
                <div id="navbarNav">
                    <ul className={Classes.navs}>
                        <NavItem text="Home" />
                        <NavItem text="Skill's & Projects" />
                        <NavItem text="Contact" />
                    </ul>
                    
                </div>
                <div id="navbarNav">
                     <ul className={Classes.navs}>
                        <NavItem text="Github" />
                        <NavItem text="LinkedIn" />
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
}

export default Navs;
