import React, { useState } from "react";

const ThemeContext = React.createContext();

export const ThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const changeTheme = () => {
    setDarkTheme((theme) => !theme);
  };
  const context = {
    darkTheme,
    changeTheme,
  };
  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
