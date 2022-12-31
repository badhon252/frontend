import { Link } from "@reach/router"
import Classes from "./Nav.module.css"
export default function NavItem(props) {
  return (
    <li className="nav-item">
        <Link className={Classes.navLinks} >{props.text}</Link>
    </li>
  )
}
