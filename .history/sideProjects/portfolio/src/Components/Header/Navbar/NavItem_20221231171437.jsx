import Clases from "./Nav.module";
import { link } from "react";
export default function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" link="/">
        {props.text}
      </a>
    </li>
  );
}
