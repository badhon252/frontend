import "../../scss/style.css"
import logo from "../../image/logo.svg"
import appStore from "../../image/app_store.svg"
import Playstore from "../../image/Playstore.svg"
import Group18525 from "../../image/Group 18525.svg"
import image405 from "../../image/image-405@2x.png"
import Frame1 from "../../image/Frame 1.svg"
import Frame4167 from "../../image/Frame 4167.svg"


export default function Header() {
  return (
    <main id="header">
        <header className="container">
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#header"><img src={logo} alt=""/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto py-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#vouchers">Vouchers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#feature">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <button className="btn" href="#footer">
                                <a className="nav-link text-light" href="#footer">Contactus</a>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="header-content my-5">
                <div className="row">
                    <div className="col-lg-4 left_h_c">
                        <h1 className="my-3">All-time <span>Highest</span> Rated Recipes</h1>
                        <p className="my-5">We source sustainable & line caught <br/> seafood, as well as live crustaceans
                            <br/>
                            everyday.
                        </p>
                        <div className="app-link">
                            <img className="img-fluid mx-3 my-4" src={appStore} alt=""/>
                            <img className="img-fluid mx-3" src={Playstore} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-8 right_h_c py-5">
                        <div className="card">
                            <img src={Group18525} alt="" className="ms-auto head-avatar "/>
                            <img src={image405} alt="" className="burger "/>
                            <img src={Frame1} alt="" className="order-card "/>
                            <img src={Frame4167} alt="" className="food-card "/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </main>
  )
}
