import Navs from "./Navbar/Navs";
import Classes from "./Header.module.css";
import HeaderContent from "./HeaderContent";

const Header = () => {
    return (
        <div className={Classes.header}>
            <Navs/>
            <HeaderContent/>
            
        </div>
    );
}

export default Header;
