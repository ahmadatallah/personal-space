/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useEffect } from "react";
import { H1, Img } from "../elements";
import Flex from "../components/Flex";
import Header from "../containers/Header";
import { useColorMode } from "theme-ui";
import theme from "../theme";
import { modes } from "../utils/constants";

import ConfusedTravolta from "../assets/images/confused-travolta.svg";
function NotFound() {
  const [colorMode, ] = useColorMode();
  const [textColor, changeTextTheme] = useState();
  const populateTheme = colorTheme => {
    const i = modes.indexOf(colorTheme);
    const n = (i + 1) % modes.length;
    const currentMode = modes[n];
    changeTextTheme(theme.colors.modes[currentMode].secondary);
  };

  useEffect(() => {
    populateTheme(colorMode);

    return () => {
      populateTheme("light");
    };
  }, []);

  return (
    <>
      <Header />
      <Flex justifyContent="center" flexDirection="column" mt={150}>
        <H1 color={textColor} fontFamily={theme.typefaces.mono}>
          404 Not Found
        </H1>
        <Img
          height={219}
          width={219}
          borderRadius="50%"
          src={ConfusedTravolta}
        >
        </Img>
      </Flex>
    </>
  );
}

export default NotFound;
