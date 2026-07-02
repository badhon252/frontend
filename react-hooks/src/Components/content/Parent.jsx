// App.js
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import Child from "./Child";

const Parent = () => {
  const { count, setCount } = useContext(ThemeContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Parent;
