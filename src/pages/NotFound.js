/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import { H1, Img } from "../elements";
import Flex from "../components/Flex";
import Header from "../containers/Header";
import theme from "../theme";
import useEveryReloadColorMode from "../hooks/useEveryReloadColorMode";

import ConfusedTravolta from "../assets/images/confused-travolta.svg";
function NotFound() {
  const { textColor } = useEveryReloadColorMode()
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
