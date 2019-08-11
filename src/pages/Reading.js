/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Flex from "../components/Flex";
import { Div } from "../elements";
import Readings from "../containers/Readings";
import MinimalHeader from "../containers/MinimalHeader";

function Reading({ showColorMode, ...props }) {
  return (
    <>
      <MinimalHeader />
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="50em"
        mr="auto"
        ml="auto"
      >
        <Div display="grid" px={5} py={[3, 4, 5]}>
          <Readings />
        </Div>
      </Flex>
    </>
  );
}

export default Reading;
