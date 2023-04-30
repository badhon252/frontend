// Child.js
import React from "react";
import MyContext from "./context";

function Child() {
  return (
    <MyContext.Consumer>
      {({ message }) => (
        <div>
          <h1>{message}</h1>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default Child;
