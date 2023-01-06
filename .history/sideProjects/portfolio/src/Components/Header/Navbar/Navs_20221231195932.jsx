import React from 'react';
import NavItem from './NavItem';
import Classes from "./Nav.module.css"

const Navs = () => {
    return (
        <div>
            <nav className={Classes.navBar}>
                <span className={Classes.navbarBrand}>Khalid</span>
                <div className={Classes.navbarNav} id="navbarNav">
                <NavItem/>      
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
}

export default Navs;
