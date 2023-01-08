import Classes from "./Nav.module";
export default function NavItem(props) {
  return (
    <li className="nav-item">
      <a className={Classes.navLinks} link="/">
        {props.text}
      </a>
    </li>
  );
}
