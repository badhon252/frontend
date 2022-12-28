import "../../scss/style.css"
import rectangle from "../../image/rectangle@2x.png"
import star from "../../image/star.svg"
import vector from "../../image/vector.svg"
import rectangle1 from "../../image/rectangle1@2x.png"
import rectangle4 from "../../image/rectangle4@2x.png"
import rectangle3 from "../../image/rectangle3@2x.png"
import rectangle2 from "../../image/rectangle2@2x.png"
import rectangle5 from "../../image/rectangle5@2x.png"
import rectangle6 from "../../image/rectangle6@2x.png"
import rectangle7 from "../../image/rectangle7@2x.png"

export default function Pricing() {
  return (
     <section id="pricing" className="fourth-section py-5">
        <div className="container">
            <div className="fourth-header">

                <h5 className="mt-4">Menues</h5>
                <h2 className="my-4">Explore Our Best Menu</h2>
                <article className="my-4">
                    We provide the best menus on each item and even we every month <br/> provide the latest menus that
                    can be
                    an
                    option for you
                </article>
            </div>
            <div className="row">

                <div className="col-lg-3">
                    <div className="food-card">
                        <div className="cart-header"><img src={rectangle} alt=""
                                className="food-cart-img img-fluid"/>
                            <div className="ratings"><img src={star} alt=""/><span>8.0</span></div>
                        </div>
                        <div>
                            <div className="cart-info row bg-light">

                                <div className="col-xsm-8">

                                    <h4>Rose Muffen</h4>
                                    <div className="img-fluid">
                                        <img src={vector} alt=""/>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <p className="food-price">$45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="food-card food-card-center">
                        <div className="cart-header"><img src={rectangle4} alt=""
                                className="food-cart-img img-fluid"/>
                            <div className="ratings"><img src={star} alt=""/><span>8.0</span></div>
                        </div>
                        <div>
                            <div className="cart-info row bg-light">

                                <div className="col-md-8">

                                    <h4>Rose Muffen</h4>
                                    <div className="img-fluid">
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p className="food-price">$45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 food-items">
                    <div className="food-card">
                        <div className="cart-header"><img src={rectangle3} alt=""
                                className="food-cart-img img-fluid"/>
                            <div className="ratings"><img src={star} alt=""/><span>8.0</span></div>
                        </div>
                        <div>
                            <div className="cart-info row bg-light">

                                <div className="col-md-8">

                                    <h4>Rose Muffen</h4>
                                    <div className="img-fluid">
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                      
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p className="food-price">$45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="food-card food-card-center">
                        <div className="cart-header"><img src={rectangle2} alt=""
                                className="food-cart-img img-fluid"/>
                            <div className="ratings"><img src={star} alt=""/><span>8.0</span></div>
                        </div>
                        <div>
                            <div className="cart-info row bg-light">

                                <div className="col-md-8">

                                    <h4>Rose Muffen</h4>
                                    <div className="img-fluid">
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                     
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p className="food-price">$45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="food-card">
                        <div className="cart-header"><img src={rectangle5} alt=""
                                className="food-cart-img img-fluid"/>
                            <div className="ratings"><img src={star} alt=""/><span>8.0</span></div>
                        </div>
                        <div>
                            <div className="cart-info row bg-light">

                                <div className="col-md-8">

                                    <h4>Rose Muffen</h4>
                                    <div className="img-fluid">
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                       
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p className="food-price">$45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="food-card food-card-center">
                        <div className="cart-header"><img src={rectangle7} alt=""
                                className="food-cart-img img-fluid"/>
                            <div className="ratings"><img src={star} alt=""/><span>8.0</span></div>
                        </div>
                        <div>
                            <div className="cart-info row bg-light">

                                <div className="col-md-8">

                                    <h4>Rose Muffen</h4>
                                    <div className="img-fluid">
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p className="food-price">$45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 food-items">
                    <div className="food-card">
                        <div className="cart-header"><img src={rectangle6} alt=""
                                className="food-cart-img img-fluid"/>
                            <div className="ratings"><img src={star} alt=""/><span>8.0</span></div>
                        </div>
                        <div>
                            <div className="cart-info row bg-light">

                                <div className="col-md-8">

                                    <h4>Rose Muffen</h4>
                                    <div className="img-fluid">
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p className="food-price">$45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="food-card food-card-center">
                        <div className="cart-header"><img src={rectangle1} alt=""
                                className="food-cart-img img-fluid"/>
                            <div className="ratings"><img src="./../src/image/star.svg" alt=""/><span>8.0</span></div>
                        </div>
                        <div>
                            <div className="cart-info row bg-light">

                                <div className="col-md-8">

                                    <h4>Rose Muffen</h4>
                                    <div className="img-fluid">
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                        <img src={vector} alt=""/>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p className="food-price">$45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
  )
}
