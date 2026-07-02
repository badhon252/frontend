import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const MyComponent = () => {
  const { count, setCount, message } = useContext(ThemeContext);

  return (
    <div>
      <h1>{message}</h1>
      <p>Count: {count}</p>
      <button onClick={handleSwitch}>Switch</button>
    </div>
  );
};

export default MyComponent;
