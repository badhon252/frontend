import React, { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import MyContent from "./MyContent";
import "../../App.css";

const MyComponent = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  console.log("MyComponent Has rendered!");

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

export default React.memo(MyComponent);
