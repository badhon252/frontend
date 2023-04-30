import React, { Fragment } from "react";
import WithCounter from "./WithCounter";

const Counter = ({ count, increament }) => {
  return (
    <Fragment>
      <h1 onClick={increament}>Count {count}</h1>
    </Fragment>
  );
};

export default WithCounter(Counter);
