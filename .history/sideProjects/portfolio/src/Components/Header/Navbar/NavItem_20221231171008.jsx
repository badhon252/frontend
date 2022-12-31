import Clases from "./Nav.module"
export default function NavItem(props) {
  return (
    <li className="nav-item">
        <a className="nav-link">{props.text}</a>
    </li>
  )
}
