// App.js
import React from "react";
import MyContext from "./context";
import Child from "./Child";

function Parent() {
  return (
    <MyContext.Provider value={{ message: "Hello World!" }}>
      <Child />
    </MyContext.Provider>
  );
}

export default App;
