/* eslint-disable jsx-a11y/anchor-is-valid */
import Classes from "./Nav.module.css"
export default function NavItem(props) {
  return (
    <li className="nav-item">
        <a className={Classes.navLinks} link="/">{props.text}</a>
    </li>
  )
}
