import React, { Fragment, useContext } from "react";
import ThemeContext from "./ThemeContext";

const MyButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Fragment>
      <button onClick={toggleTheme}>Switched to {theme} Mode!</button>
    </Fragment>
  );
};

export default MyButton;
