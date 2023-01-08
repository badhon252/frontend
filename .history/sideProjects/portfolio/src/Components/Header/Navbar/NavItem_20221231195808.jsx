import { Link } from "@reach/router";
import Classes from "./Nav.module.css";
export default function NavItem(props) {
  return (
    <ul className={Classes.navs}>
      <li className="nav-item">
        <Link className={Classes.navLinks}>{props.text}</Link>
      </li>
    </ul>
  );
}
