import React, { Fragment } from "react";

const HoverCounter = ({ count, increament }) => {
  return (
    <Fragment>
      <h1>Hovered {count} Times.</h1>
    </Fragment>
  );
};

export default HoverCounter;
