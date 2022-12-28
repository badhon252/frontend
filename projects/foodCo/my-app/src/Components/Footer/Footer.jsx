import logoWhite from "../../image/logo-white.svg"

export default function Footer() {
  return (
    <footer id="footer">
        <section className="container">
            <div className="row">
                <div className="col-md-4">
                    <a href="#header">

                        <img src={logoWhite} alt="" className="img-fluid"/>
                    </a>
                    <p>Jl. Jend Sudirman Kav 52-53 SCBD <br/> Lot.8 Jakarta Selatan <br/>
                        DKI Jakarta 12190.</p>
                </div>
                <div className="col-md-2">
                    <ul>
                        <h3>FEATURE</h3>
                        <li>Legal</li>
                        <li>Download</li>
                        <li>Terms & Policy</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <h3>COMPANY</h3>
                        <li>Home</li>
                        <li>About</li>
                        <li>Partner</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <h3>DOWNLOAD</h3>
                        <li>Android</li>
                        <li>iOS</li>

                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <h3>HELP</h3>
                        <li>FAQ</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ul>
                </div>
            </div>

            <div className="copyrights my-4">
                © 2022 UIDesign.to - All rights reserved. Developed by: @<a className="text-light"
                    href="https://github.com/badhon252">Khalid Hossain</a>
            </div>
        </section>
    </footer>
  )
}
