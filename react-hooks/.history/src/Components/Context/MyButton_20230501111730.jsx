import React, { Fragment } from "react";

const MyButton = () => {
  return (
    <Fragment>
      <button onClick={toggleTheme}>Switched to {theme} Mode!</button>
    </Fragment>
  );
};

export default MyButton;
