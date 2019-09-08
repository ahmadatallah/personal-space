/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Link from "../components/Link";
import theme from "../theme";
import { Div } from "../elements";
import Header from "../containers/Header";
import { Link as L } from "react-router-dom";
import Flex from "../components/Flex";
import { IoMdQuote } from "react-icons/io";

const LinkIcon = ({ href }) => {
  return <IoMdQuote size={20} />;
};

function Writings({ ...props }) {
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
        <Div display="grid" pl={[4, 4, 6]} pr={[4, 4, 6]} py={5}>
          <Div mb={3}>
            <LinkIcon />
            <L
              to="/writings/create-react-app-run-build-envs"
              style={{ textDecoration: "none", color: "currentcolor" }}
            >
              <Link
                title="Create React App: Run-time vs Build-time Environment Variables"
                fontFamily={theme.typefaces.mono}
              />
            </L>
            <LinkIcon />
          </Div>
          <Div>
            <LinkIcon />
            <L
              to="/writings/pascal-typescript-example"
              style={{ textDecoration: "none", color: "currentcolor" }}
            >
              <Link
                title="Pattern Matching Example in TypeScript"
                fontFamily={theme.typefaces.mono}
              />
            </L>
            <LinkIcon />
          </Div>
        </Div>
      </Flex>
    </>
  );
}

export default Writings;
