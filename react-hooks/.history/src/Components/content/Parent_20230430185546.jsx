// App.js
import React from "react";
import ThemeContext from "../Context/ThemeContext";
import Child from "./Child";

function Parent() {
  return (
    <ThemeContext.Provider value={{ message: "Hello World!" }}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;
