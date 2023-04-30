// App.js
import React, { useState } from "react";
import ThemeContext from "../Context/ThemeContext";
import Child from "./Child";

const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ThemeContext.Provider value={{ count, setCount }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Parent;
