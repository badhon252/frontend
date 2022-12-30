import appStore from "../image/app_store.svg";
import playStore from "../image/Playstore.svg";

export default function ButtonGroup() {
    return (
        <div className="buttons">
            <button className="btn">
                <img src={appStore} alt="" className="img-fluid" />
            </button>
            <button className="btn">
                <img src={playStore} alt="" className="img-fluid" />
            </button>
        </div>
    );
}
