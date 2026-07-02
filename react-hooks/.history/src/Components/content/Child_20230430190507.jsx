// Child.js
import React from "react";
import ThemeContext from "../Context/ThemeContext";

function Child() {
  return (
    <ThemeContext.Consumer>
      {({ message }) => console.log(message)}
    </ThemeContext.Consumer>
  );
}

export default Child;
