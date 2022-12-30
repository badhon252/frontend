export default function Nav(props) {
    return (
        <li className="nav-item">
            <a className="nav-link active" href={props.link}>
                {props.text}
            </a>
        </li>
    );
}
