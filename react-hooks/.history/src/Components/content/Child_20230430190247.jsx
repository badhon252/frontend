// Child.js
import React from "react";
import ThemeContext from "../Context/ThemeContext";

function Child() {
  return (
    <ThemeContext.Consumer>
      {({ message }) => (
        <div>
          <h1>{message}</h1>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Child;
