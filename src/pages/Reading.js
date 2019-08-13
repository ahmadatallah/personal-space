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
        maxWidth="60em"
        mr="auto"
        ml="auto"
      >
        <Div display="grid" pl={[4, 4, 6]} pr={[4, 4, 6]} py={5}>
          <Readings />
        </Div>
      </Flex>
    </>
  );
}

export default Reading;
