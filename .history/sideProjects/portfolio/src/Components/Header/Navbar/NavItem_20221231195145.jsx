import { Link } from "@reach/router"
import Classes from "./Nav.module.css"
export default function NavItem(props) {
  return (
    <li className="nav-item">
        <Link className={Classes.navLinks} to={props.path}>{props.text}</Link>
    </li>
  )
}
