export default function BlogItem(props) {
    return (
        <div className="col-lg-4">
            <div className="fifth-content">
                <img src={props.imgSrc} alt="" className="img-fluid" />
                <p> {props.para} </p>{" "}
            </div>{" "}
        </div>
    );
}
