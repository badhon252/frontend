// Child.js
import ThemeContext from "../Context/ThemeContext";
import React, { useState } from "react";

const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};
