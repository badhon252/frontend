import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const MyComponent = () => {
  const { toggleSwitch, theme } = useContext(ThemeContext);
  console.log(toggleSwitch);
  return (
    <div className={theme}>
      <h1>Hello World!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        nesciunt nobis excepturi voluptatum neque iure voluptate? Sunt, incidunt
        rerum suscipit dicta, soluta laborum est accusantium similique debitis,
        modi optio quia.
      </p>
      <button onClick={toggleSwitch}>Switch to {theme} Mode</button>
    </div>
  );
};

export default MyComponent;
