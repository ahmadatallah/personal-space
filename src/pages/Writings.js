/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useEffect } from "react";
import Link from "../components/Link";
import theme from "../theme";
import { H1, Div } from "../elements";
import Header from "../containers/Header";
import { Link as L } from "react-router-dom";
import Flex from "../components/Flex";
import { IoMdQuote } from "react-icons/io";
import { modes } from "../utils/constants";
import { useColorMode } from "theme-ui";

const LinkIcon = ({ color }) => {
  return <IoMdQuote size={18} color={color} />;
};

function Writings({ ...props }) {
  const [colorMode] = useColorMode();
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
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="80em"
        minHeight="100%"
        mr="auto"
        ml="auto"
      >
        <Div display="grid" pl={[4, 4, 6]} pr={[4, 4, 6]} py={5} mt={70}>
          <H1 fontWeight={400} color={textColor}>
            {" "}
            Writings{" "}
          </H1>
          <Div mb={3}>
            <LinkIcon color={textColor} />
            <L
              to="/writings/create-react-app-run-build-envs"
              style={{ textDecoration: "none", color: "currentcolor" }}
            >
              <Link
                title="Create React App: Run-time vs Build-time Environment Variables"
                fontFamily={theme.typefaces.mono}
              />
            </L>
            <LinkIcon color={textColor} />
          </Div>
          <Div>
            <LinkIcon color={textColor} />
            <L
              to="/writings/pascal-typescript-example"
              style={{ textDecoration: "none", color: "currentcolor" }}
            >
              <Link
                title="Pattern Matching Example in TypeScript"
                fontFamily={theme.typefaces.mono}
              />
            </L>
            <LinkIcon color={textColor} />
          </Div>
        </Div>
      </Flex>
    </>
  );
}

export default Writings;
