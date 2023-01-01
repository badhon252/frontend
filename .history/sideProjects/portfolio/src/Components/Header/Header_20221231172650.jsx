import Navs from "./Navbar/Navs";
import Classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={Classes.header}>
      <Navs />
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis vel
        sequi quis velit qui tenetur pariatur facere quisquam, aliquid nisi,
        quasi quam magnam, cum dolores itaque placeat praesentium fugit magni?
      </p>
    </div>
  );
};

export default Header;
