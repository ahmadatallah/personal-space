/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Flex from "../components/Flex";
import { Div } from "../elements";
import ReadingsContainer from "../containers/ReadingsContainer";
import Header from "../containers/Header";

function Readings({ ...props }) {
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
          <ReadingsContainer />
        </Div>
      </Flex>
    </>
  );
}

export default Readings;
