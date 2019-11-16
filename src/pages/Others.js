/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import { Div } from "../elements";
import Header from "../containers/Header";
import Flex from "../components/Flex";
import OthersContainer from "../containers/OthersContainer";

function Others({ ...props }) {
  return (
    <>
      <Header />
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="80em"
        minHeight="100%"
        fontFamily={theme.typefaces.helvetica}
        mr="auto"
        ml="auto"
      >
        <Div py={5} mt={[3, 4, 5]}>
          <OthersContainer />
        </Div>
      </Flex>
    </>
  );
}

export default Others;
