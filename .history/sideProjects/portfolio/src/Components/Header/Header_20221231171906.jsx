import Navs from "./Navbar/Navs";
import Classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={Classes.header}>
      <Navs />
      <h1>Header</h1>
    </div>
  );
};

export default Header;
