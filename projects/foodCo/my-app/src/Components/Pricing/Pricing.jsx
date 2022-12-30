import "../../scss/style.css";
import rectangle from "../../image/rectangle@2x.png";
import rectangle1 from "../../image/rectangle1@2x.png";
import rectangle4 from "../../image/rectangle4@2x.png";
import rectangle3 from "../../image/rectangle3@2x.png";
import rectangle2 from "../../image/rectangle2@2x.png";
import rectangle5 from "../../image/rectangle5@2x.png";
import rectangle6 from "../../image/rectangle6@2x.png";
import rectangle7 from "../../image/rectangle7@2x.png";
import HeroSection from "../HeroSection";
import FoodCart from "./FoodCart";

export default function Pricing() {
    return (
        <section id="pricing" className="fourth-section py-5">
            <div className="container">
                <HeroSection
                    h5="Menues"
                    h2="Explore Our Best Menu"
                    article="We provide the best menus on each item and even we every
                        month  provide the latest menus that can be an
                        option for you"
                />

                <div className="row">
                    <div className="col-lg-3">
                        <FoodCart src={rectangle} />
                        <FoodCart src={rectangle4} />
                    </div>

                    <div className="col-lg-3 food-items">
                        <FoodCart src={rectangle3} />
                        <FoodCart src={rectangle2} />
                    </div>

                    <div className="col-lg-3">
                        <FoodCart src={rectangle5} />
                        <FoodCart src={rectangle7} />
                    </div>

                    <div className="col-lg-3 food-items">
                        <FoodCart src={rectangle6} />
                        <FoodCart src={rectangle1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
