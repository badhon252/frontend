import React, { useContext } from "react";
import MyContext from "./MyContext";

const MyComponent = () => {
  const { count = 0, setCount } = useContext(MyContext);

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

export default MyComponent;
