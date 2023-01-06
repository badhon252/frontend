import { Link } from "@reach/router"
import Classes from "./Nav.module.css"
export default function NavItem() {
  return (
    <ul className={Classes.navs}>
    <li className="nav-item">
        <Link className={Classes.navLinks} to="/" >Home</Link>
    </li>
    <li className="nav-item">
        <Link className={Classes.navLinks} to="/about" >About</Link>
    </li>
    <li className="nav-item">
        <Link className={Classes.navLinks} to="/contact" >Contact</Link>
    </li>
    
    </ul>
  )
}
