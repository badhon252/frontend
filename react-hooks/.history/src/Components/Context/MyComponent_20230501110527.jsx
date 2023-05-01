import React, { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import "../../App.css";

const MyComponent = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <MyContent />
      <button onClick={toggleTheme}>Switched to {theme} Mode!</button>
    </div>
  );
};

export default MyComponent;
