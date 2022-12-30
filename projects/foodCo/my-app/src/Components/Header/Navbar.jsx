import logo from "../../image/logo.svg";
import Button from "../Button";
import Nav from "./Nav";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#header">
                    <img src={logo} alt="" />
                </a>
                {/* navbar toggler  */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto py-3">
                        <Nav link="#voucher" text="voucher" />
                        <Nav link="#feature" text="feature" />
                        <Nav link="#pricing" text="pricing" />
                        <Nav link="#blog" text="blog" />
                        <Nav link="#footer" text="footer" />

                        <Button text="Contactus" link="#footer" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
