// import NavItem from './NavItem';
import Classes from "./Nav.module.css"
import { Link } from "@reach/router"

const Navs = () => {
    return (
            <nav className={Classes.navBar}>
                <span className={Classes.navbarBrand}>Khalid</span>
                <div className={Classes.navbarNav} id="navbarNav">
                <ul className={Classes.navs}>
                    <li>
                        <Link to="/" className={Classes.navLinks}> Home </Link>
                    </li>
                    <li>
                        <Link to="/about" className={Classes.navLinks}> About </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={Classes.navLinks}> Contact </Link>
                    </li>
                    
                </ul>    
                </div>
            </nav>
    );
}

export default Navs;
