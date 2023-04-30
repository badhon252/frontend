import React, { useContext } from "react";

const MyComponent = () => {
  const { count, setCount } = useContext(MyContext);

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
