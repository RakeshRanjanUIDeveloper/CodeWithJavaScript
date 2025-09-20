import React from "react";
import ThemeContext from "./ThemeConext";


const ThemeProvider = ({ children }) => {
  const theme = {
    background: "black",
    color: "white",
  };
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
