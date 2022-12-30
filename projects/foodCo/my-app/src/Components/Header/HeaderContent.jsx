import Group18525 from "../../image/Group 18525.svg";
import image405 from "../../image/image-405@2x.png";
import Frame1 from "../../image/Frame 1.svg";
import Frame4167 from "../../image/Frame 4167.svg";
import ButtonGroup from "../ButtonGroup";

export default function HeaderContent() {
    return (
        <div className="header-content my-5">
            <div className="row">
                <div className="col-lg-4 left_h_c">
                    <h1 className="my-3">
                        All-time <span>Highest</span> Rated Recipes
                    </h1>
                    <p className="my-5">
                        We source sustainable & line caught <br /> seafood, as
                        well as live crustaceans
                        <br />
                        everyday.
                    </p>
                    <ButtonGroup />
                </div>
                <div className="col-lg-8 right_h_c py-5">
                    <div className="card">
                        <img
                            src={Group18525}
                            alt=""
                            className="ms-auto head-avatar "
                        />
                        <img src={image405} alt="" className="burger " />
                        <img src={Frame1} alt="" className="order-card " />
                        <img src={Frame4167} alt="" className="food-card " />
                    </div>
                </div>
            </div>
        </div>
    );
}
