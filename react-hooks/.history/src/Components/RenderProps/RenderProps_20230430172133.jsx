import React, { Fragment } from "react";
import Counter from "../Counter";
import HoverCounter from "./HoverCounter";

const HOC = () => {
  return (
    <Fragment>
      <h1>Higher Order Component</h1>
      <Counter />
      <HoverCounter />
    </Fragment>
  );
};

export default HOC;
