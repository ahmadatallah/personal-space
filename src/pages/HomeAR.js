/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useEffect } from "react";
import theme from "../theme";
import { Div } from "../elements";
import Header from "../containers/Header";
import Flex from "../components/Flex";
import ArContainer from "../containers/ArContainer";

function HomeAR({ ...props }) {
  return (
    <>
      <Header />
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="50em"
        minHeight="100%"
        mr="auto"
        ml="auto"
        fontFamily={theme.typefaces.helvetica}
        dir="rtl"
      >
        <Div display="grid" pr={[5, 6, 6]} py={5} mt={[3, 4, 5]}>
          <ArContainer />
        </Div>
      </Flex>
    </>
  );
}

export default HomeAR;
