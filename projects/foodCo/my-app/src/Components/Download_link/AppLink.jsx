import Group4286 from "../../image/Group 4286.svg";
import ButtonGroup from "../ButtonGroup";

export default function Download_link() {
    return (
        <section id="online-app" className="sixth-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="demo-images">
                            <img
                                src={Group4286}
                                alt=""
                                className="img-fluid img-relative"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 products">
                        <h1>
                            Ready to Get <br /> Information from us
                        </h1>
                        <article>
                            Join and get unlimited offers of the best cake{" "}
                            <br /> products from us at an affordable price and{" "}
                            <br />
                            get the product on the same day.
                        </article>
                        <ButtonGroup />
                    </div>
                </div>
            </div>
        </section>
    );
}
