import React, { useContext } from "react";
import MyContext from "./MyContext";

const MyComponent = () => {
  const { count, setCount, message } = useContext(MyContext);

  return (
    <div>
      <h1>{message}</h1>
      <p>Count: {count}</p>
      <button onClick={handleSwitch}>Switch</button>
    </div>
  );
};

export default MyComponent;
