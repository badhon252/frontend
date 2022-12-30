import logoWhite from "../../image/logo-white.svg";
import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";

export default function Footer() {
    return (
        <footer id="footer">
            <section className="container">
                <div className="row">
                    <div className="col-md-4">
                        <a href="#header">
                            <img src={logoWhite} alt="" className="img-fluid" />
                        </a>
                        <p>
                            Jl. Jend Sudirman Kav 52-53 SCBD <br /> Lot.8
                            Jakarta Selatan <br />
                            DKI Jakarta 12190.
                        </p>
                    </div>
                    <FooterLinks
                        h3="FEATURE"
                        li1="Legal"
                        li2="Download"
                        li3="Terms & Policy"
                    />
                    <FooterLinks
                        h3="COMPANY"
                        li1="Home"
                        li2="About"
                        li3="Partner"
                    />
                    <FooterLinks h3="DOWNLOAD" li1="Android" li2="iOS" />
                    <FooterLinks
                        h3="HELP"
                        li1="FAQ"
                        li2="Instagram"
                        li3="Facebook"
                    />
                </div>

                <Copyright />
            </section>
        </footer>
    );
}
