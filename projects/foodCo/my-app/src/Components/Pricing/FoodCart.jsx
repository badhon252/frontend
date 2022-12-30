import star from "../../image/star.svg";
import vector from "../../image/vector.svg";

export default function FoodCart(props) {
    return (
        <div className="food-card">
            <div className="cart-header">
                <img
                    src={props.src}
                    alt=""
                    className="food-cart-img img-fluid"
                />
                <div className="ratings">
                    <img src={star} alt="" />
                    <span>8.0</span>
                </div>
            </div>
            <div>
                <div className="cart-info row bg-light">
                    <div className="col-md-8">
                        <h4>Rose Muffen</h4>
                        <div className="img-fluid">
                            <img src={vector} alt="" />
                            <img src={vector} alt="" />
                            <img src={vector} alt="" />
                            <img src={vector} alt="" />
                            <img src={vector} alt="" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <p className="food-price">$45</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
