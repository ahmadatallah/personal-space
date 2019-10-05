/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import { Div } from "../elements";
import Header from "../containers/Header";
import Flex from "../components/Flex";
import WritingsContainer from '../containers/WritingsContainer'

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
        <Div display="grid" pl={[4, 4, 6]} pr={[4, 4, 6]} py={5} mt={[3, 4, 5]}>
          <WritingsContainer />
        </Div>
      </Flex>
    </>
  );
}

export default Writings;
