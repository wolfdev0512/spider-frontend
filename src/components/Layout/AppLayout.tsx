import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../theme";

import * as Comp from "../../components";

const AppLayout: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const isDarkTheme = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Outlet />
      <Comp.Toast theme={isDarkTheme ? "dark" : "light"} />
      <Comp.DarkModeSwitch setTheme={setTheme} theme={theme} />
    </ThemeProvider>
  );
};

export default AppLayout;
