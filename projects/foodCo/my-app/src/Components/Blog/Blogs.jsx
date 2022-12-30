import "../../scss/style.css";
import image145 from "../../image/image-145@2x.png";
import image146 from "../../image/image-146@2x.png";
import image147 from "../../image/image-147@2x.png";
import HeroSection from "../HeroSection";
import Blog from "./BlogItem";

export default function Blogs() {
    return (
        <section id="blog" className="fifth-section">
            <div className="container">
                <HeroSection
                    h5="Articles"
                    h2="Trensing Stories"
                    article="Our team inspects every single Item and even learns your
                        best day product cake preferences- to make sure delivery
                        just thing you like"
                />

                <div className="fifth-body mt-5">
                    <div className="row">
                        <Blog
                            imgSrc={image145}
                            para="Chocolate cake is easily best piece"
                        />

                        <Blog
                            imgSrc={image146}
                            para="The cake shop: best cakes in town"
                        />

                        <Blog
                            imgSrc={image147}
                            para="A sweet cake menu for a cupcakery"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
