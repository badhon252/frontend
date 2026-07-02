import React, { Fragment } from "react";
import WithCounter from "../WithCounter";

const HoverCounter = ({ count = 0, increament }) => {
  return (
    <Fragment>
      <h1 onMouseOver={increament}>Hovered {count} Times.</h1>
    </Fragment>
  );
};

export default WithCounter(HoverCounter);
