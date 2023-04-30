import React from "react";

const Counter = ({ count, increment }) => {
  return (
    <div>
      <h1 onClick={increment}>Count {count}</h1>
    </div>
  );
};

export default Counter;
