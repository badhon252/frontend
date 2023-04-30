import React from "react";

const Counter = ({ count, increament }) => {
  return (
    <div>
      <h1 onClick={increament}>Count {count}</h1>
    </div>
  );
};

export default Counter;
