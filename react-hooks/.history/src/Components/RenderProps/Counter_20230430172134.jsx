import React, { Fragment } from "react";
import WithCounter from "./HOC/WithCounter";

const Counter = ({ count, increament }) => {
  return (
    <Fragment>
      <button type="button" onClick={increament}>
        Click {count} times.
      </button>
    </Fragment>
  );
};

export default WithCounter(Counter);
