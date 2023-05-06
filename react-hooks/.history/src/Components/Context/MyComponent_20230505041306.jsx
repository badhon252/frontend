import React, { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import MyContent from "./MyContent";
import "../../App.css";
import MyButton from "./MyButton";

const MyComponent = () => {
  const { theme } = useContext(ThemeContext);

  console.log("MyComponent Has rendered!");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <MyContent />

      <ThemeContext.Provider value={value}>
        <MyButton />
      </ThemeContext.Provider>
    </div>
  );
};

export default MyComponent;
