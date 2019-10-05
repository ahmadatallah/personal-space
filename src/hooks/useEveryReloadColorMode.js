/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useEffect } from "react";
import theme from "../theme";
import { modes } from "../utils/constants";
import { useColorMode } from "theme-ui";

function useEveryReloadColorMode({ ...props }) {
  const [colorMode, setColorMode] = useColorMode();
  const [textColor, changeTextTheme] = useState();
  const [backgroundColor, changeBackgroundTheme] = useState();
  const populateTheme = colorTheme => {
    const i = modes.indexOf(colorTheme);
    const n = (i + 1) % modes.length;
    const currentMode = modes[n];
    document.querySelectorAll("h1").forEach(tag => {
      tag.setAttribute(
        "style",
        `color: ${theme.colors.modes[currentMode].secondary}`
      );
    });

    document.querySelectorAll("a").forEach(a => {
      a.setAttribute(
        "style",
        `color: ${theme.colors.modes[currentMode].secondary}`
      );
    });

    document.querySelectorAll("svg").forEach(tag => {
      tag.setAttribute(
        "style",
        `color: ${theme.colors.modes[currentMode].secondary}`
      );
    });

    changeTextTheme(theme.colors.modes[currentMode].secondary);
    changeBackgroundTheme(theme.colors.modes[currentMode].background);
    setColorMode(currentMode);
  };

  useEffect(() => {
    populateTheme(colorMode);

    return () => {
      populateTheme("light");
    };
  }, []);

  const changeTheme = e => {
    populateTheme(colorMode);
  };


  return { colorMode, textColor, backgroundColor, changeTheme };
}

export default useEveryReloadColorMode;
