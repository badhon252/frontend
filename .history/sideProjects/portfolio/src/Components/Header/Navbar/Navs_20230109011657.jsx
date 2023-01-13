// import NavItem from './NavItem';
import Classes from "./Nav.module.css"
import { Link } from "@reach/router"

const Navs = () => {
    return (
            <nav className={Classes.navBar}>
                <div className={Classes.navbarBrand}> 
                <img src="../../../img/badhon.jpg" alt="" />KHB</div>
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
                <ul className={Classes.navs}>
                    <li>
                        <a href="https://github.com/badhon252" rel="noreferrer" target="_blank" className={Classes.navLinks}> Github </a>
                    </li>
                    <li>
                        <a href="/linkedin" className={Classes.navLinks}> LinkedIn </a>
                    </li>
                    
                </ul>  
            </nav>
    );
}

export default Navs;
