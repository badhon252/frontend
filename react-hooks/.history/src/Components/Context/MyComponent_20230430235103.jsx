import React, { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import "../../App.css";

const MyComponent = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={theme}>
      <h1>Hello World!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        nesciunt nobis excepturi voluptatum neque iure voluptate? Sunt, incidunt
        rerum suscipit dicta, soluta laborum est accusantium similique debitis,
        modi optio quia.
      </p>
      <button onClick={toggleTheme}>Switch to {theme} Mode</button>
    </div>
  );
};

export default MyComponent;
