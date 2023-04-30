import React, { useState } from "react";
import MyContext from "./MyContext";
import MyComponent from "./MyComponent";

const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      <MyComponent />
    </MyContext.Provider>
  );
};

export default MyProvider;
