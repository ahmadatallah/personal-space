/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useEffect } from "react";
import Link from "../components/Link";
import StyledLink from "../components/StyledLink";
import theme from "../theme";
import { H1, Div, Small, P } from "../elements";
import Header from "../containers/Header";
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
          <H1 fontWeight={600} color={textColor}>
            {" "}
            Writings{" "}
          </H1>
          <Div mb={3}>
            <LinkIcon color={textColor} />
            <StyledLink to="/writings/create-react-app-run-build-envs">
              <Link
                title="Create React App: Run-time vs Build-time Environment Variables"
                fontFamily={theme.typefaces.mono}
                fontWeight={600}
              />
            </StyledLink>
            <LinkIcon color={textColor} />
            <Div ml={[2, 2, 4]}>
              <Small>
                13 Aug, 2019{" "}
                <span role="img" aria-label="min-read">
                  • 📖☕️{" "}
                </span>
                7 min read
              </Small>
              <P mt={0}>
                Set create-react-app custom environment variables in build, and
                run time environments without ejecting default configuration.
              </P>
            </Div>
          </Div>
          <Div>
            <LinkIcon color={textColor} />
            <StyledLink to="/writings/pascal-typescript-example">
              <Link
                title="Pattern Matching Example in TypeScript"
                fontFamily={theme.typefaces.mono}
                fontWeight={600}
              />
            </StyledLink>
            <LinkIcon color={textColor} />
            <Div ml={[2, 2, 4]}>
              <Small>
                8 Sep, 2019{" "}
                <span role="img" aria-label="min-read">
                  • 📖{" "}
                </span>
                5 min read
              </Small>
              <P mt={0}>A "semi-pattern-matching" example in Typescript.</P>
            </Div>
          </Div>
        </Div>
      </Flex>
    </>
  );
}

export default Writings;
