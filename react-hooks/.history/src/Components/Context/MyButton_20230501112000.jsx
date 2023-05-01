import React, { Fragment, useContext } from "react";
import ThemeContext from "./ThemeContext";

const MyButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log("Button has rendered!");
  return (
    <Fragment>
      <button onClick={toggleTheme}>Switched to {theme} Mode!</button>
    </Fragment>
  );
};

export default React.memo(MyButton);
