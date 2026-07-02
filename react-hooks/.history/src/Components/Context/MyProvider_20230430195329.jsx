import React, { Children, useState } from "react";
import MyContext from "./MyContext";
import MyComponent from "./MyComponent";

const MyProvider = ({ Children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount, message: "Hello World!" }}>
      {Children}
    </MyContext.Provider>
  );
};

export default MyProvider;
