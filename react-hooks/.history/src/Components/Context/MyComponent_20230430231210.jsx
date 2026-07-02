import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const MyComponent = () => {
  const { toggleSwitch } = useContext(ThemeContext);

  return (
    <div>
      <h1>Hello World!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        nesciunt nobis excepturi voluptatum neque iure voluptate? Sunt, incidunt
        rerum suscipit dicta, soluta laborum est accusantium similique debitis,
        modi optio quia.
      </p>
      <button onClick={handleSwitch}>Switch</button>
    </div>
  );
};

export default MyComponent;
