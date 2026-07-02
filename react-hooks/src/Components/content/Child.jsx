// Child.js
import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const Child = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ThemeContext.Provider value={{ count, setCount }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Child;
