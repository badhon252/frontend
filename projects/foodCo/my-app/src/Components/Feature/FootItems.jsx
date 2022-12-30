import React from "react";
import Item from "./Item";
import rectangle37992 from "../../image/rectangle-37992@2x.png";
import rectangle3799 from "../../image/rectangle-3799@2x.png";
import rectangle37991 from "../../image/rectangle-37991@2x.png";

export default function FootItems() {
    return (
        <div className="foot_items my-5">
            <div className="row">
                <Item imgSrc={rectangle37992} />
                <Item imgSrc={rectangle3799} />
                <Item imgSrc={rectangle37991} />
            </div>
        </div>
    );
}
