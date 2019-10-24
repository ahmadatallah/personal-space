/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Link from "../components/Link";
import StyledLink from "../components/StyledLink";
import { H1, Div, Small, P } from "../elements";
import useEveryReloadColorMode from "../hooks/useEveryReloadColorMode";

function WritingsContainer({ title, href, ...props }) {
  const { textColor } = useEveryReloadColorMode();

  return (
    <>
      <H1 fontWeight={600} color={textColor}>
        {" "}
        Writings{" "}
      </H1>
      <Div mb={3}>
        <StyledLink to="/writings/create-react-app-run-build-envs">
          <Link
            title="Create React App: Run-time vs Build-time Environment Variables"
            fontFamily={theme.typefaces.mono}
            fontSize={[2, 3, 3]}
            fontWeight={[900, 600, 600]}
          />
        </StyledLink>
        <Div ml={[2, 2, 3]}>
          <Small>
            13 Aug, 2019{" "}
            <span role="img" aria-label="min-read">
              • 📖☕️{" "}
            </span>
            7 min read
          </Small>
          <P mt={0}>
            Set create-react-app custom environment variables in build, and run
            time environments without ejecting default configuration.
          </P>
        </Div>
      </Div>
      <Div mb={3}>
        <StyledLink to="/writings/pascal-typescript-example">
          <Link
            title="Pattern Matching Example in TypeScript"
            fontFamily={theme.typefaces.mono}
            fontSize={[2, 3, 3]}
            fontWeight={[900, 600, 600]}
          />
        </StyledLink>
        <Div ml={[2, 2, 3]}>
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
      <Div mb={3}>
        <StyledLink to="/writings/notify-pwa-updates">
          <Link
            title="Notify A Progressive Web App (PWA) Updates"
            fontFamily={theme.typefaces.mono}
            fontSize={[2, 3, 3]}
            fontWeight={[900, 600, 600]}
          />
        </StyledLink>
        <Div ml={[2, 2, 3]}>
          <Small>
            23 Oct, 2019{" "}
            <span role="img" aria-label="min-read">
              • 📖{" "}
            </span>
            7 min read{" "}
          </Small>
          <P mt={0}>Notify your Progressive Web App Viewers in React and Redux using create-react-app.</P>
        </Div>
      </Div>
    </>
  );
}

export default WritingsContainer;
