import React, { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import MyContent from "./MyContent";
import "../../App.css";
import MyButton from "./MyButton";

const MyComponent = () => {
  // const { theme } = useContext(ThemeContext);

  // console.log("MyComponent Has rendered!");

  const [theme, setTheme] = useState("Light");
  console.log("ContextProvider Rendered!");

  function toggleTheme() {
    setTheme(theme === "Light" ? "Dark" : "Light");
  }

  const value = useMemo(() => {
    return { toggleTheme, theme };
  }, [toggleTheme, theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      {/* Making Dark & light mode switcher  */}
      <MyContent />

      <ThemeContext.Provider value={value}>
        <MyButton />
      </ThemeContext.Provider>
    </div>
  );
};

export default MyComponent;
