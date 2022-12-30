import React from "react";

export default function FooterLinks(props) {
    return (
        <div className="col-md-2">
            <ul>
                <h3>{props.h3}</h3>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
            </ul>
        </div>
    );
}
