/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Link from "../components/Link";
import theme from "../theme";
import { Div } from "../elements";
import MinimalHeader from "../containers/MinimalHeader";
import { Link as L } from "react-router-dom";
import Flex from "../components/Flex";

function Writings({ ...props }) {
  return (
    <>
      <MinimalHeader />
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="80em"
        minHeight="100%"
        mr="auto"
        ml="auto"
      >
        <Div display="grid" px={6} py={[3, 4, 5]}>
          <L
            to="/writings/create-react-app-run-build-envs"
            style={{ textDecoration: "none", color: "currentcolor" }}
          >
            <Link
              title="Create React App: Run-time vs Build-time Environment Variables"
              fontFamily={theme.typefaces.mono}
            />
          </L>
        </Div>
      </Flex>
    </>
  );
}

export default Writings;
