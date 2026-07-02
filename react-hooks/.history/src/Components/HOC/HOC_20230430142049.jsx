import React, { Fragment } from "react";
import Counter from "./Counter";

const HOC = () => {
  return (
    <Fragment>
      <h1>Higher Order Component</h1>
      <Counter />
    </Fragment>
  );
};

export default HOC;
