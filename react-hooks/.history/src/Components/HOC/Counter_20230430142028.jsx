import React from "react";

const Counter = ({ count, increament }) => {
  return (
    <Fragment>
      <h1 onClick={increament}>Count {count}</h1>
    </Fragment>
  );
};

export default Counter;
