import "../../scss/style.css";
import HeroSection from "../HeroSection";
import FootItems from "./FootItems";

export default function Feature() {
    /*    function article(params) {
        return params.slice(0, 57) + " " + <br /> + params.slice(58, articles.length);
    }
    console.log(article(articles)); */

    return (
        <section className="third-section container" id="feature">
            <HeroSection
                h5="Who We are"
                h2="Creating Events to Remember"
                article={`At White Table Catering, we are passionate about creating 
                        meaningful celebrations and memorable occasions.`}
            />
            <FootItems />
        </section>
    );
}
