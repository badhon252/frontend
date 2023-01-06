import Classes from "./Nav.module.css";
export default function NavItem(props) {
  return (
    <li className="nav-item">
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className={Classes.navLinks} link="/">
        {props.text}
      </a>
    </li>
  );
}
