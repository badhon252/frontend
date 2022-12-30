export default function Button(props) {
    return (
        <button className="btn" href={props.link}>
            <a className="nav-link text-light" href={props.link}>
                {props.text}
            </a>
        </button>
    );
}
