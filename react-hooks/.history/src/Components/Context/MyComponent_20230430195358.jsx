import React, { useContext } from "react";
import MyContext from "./MyContext";

const MyComponent = () => {
  const { count, setCount, message } = useContext(MyContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{message}</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default MyComponent;
