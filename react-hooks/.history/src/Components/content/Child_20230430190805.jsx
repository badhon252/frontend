// Child.js
import React, { useState } from "react";
import ThemeContext from "../Context/ThemeContext";

const Parent = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};

export default Parent;
