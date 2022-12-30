export default function Item(props) {
    return (
        <div className="col-md-4">
            <div className="blog">
                <img src={props.imgSrc} className="img-fluid" alt="" />
                <article className="px-4 py-4">
                    On branch level, you can specify which items and options to
                    show as well as you can specify their prices.{" "}
                </article>{" "}
                <button className="btn btn-outline-dark mt-2 mb-4">
                    {" "}
                    Explore{" "}
                </button>{" "}
            </div>
        </div>
    );
}
