import "../../scss/style.css";
import HeaderContent from "./HeaderContent";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <main id="header">
            <header className="container">
                <Navbar />
                <HeaderContent />
            </header>
        </main>
    );
}
