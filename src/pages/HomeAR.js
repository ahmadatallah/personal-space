/** @jsx jsx */
import jsx from "../jsx";
import React from "react";

import Container from "../components/Container";
import { H1 } from "../elements";
import Flex from "../components/Flex";
import BlockLinkGrow from "../components/BlockLinkGrow";
import Header from "../containers/Header";

function HomeAR() {
  return (
    <>
      <Header />
      <Container>
        <Flex justifyContent="left">
          <BlockLinkGrow width={1} ml={[0, 0, 4]}>
            <H1 fontSize={45}>Sync... </H1>
            <H1 fontSize={90} mt={-4}>
              Atallah
            </H1>
          </BlockLinkGrow>
        </Flex>
      </Container>
    </>
  );
}

export default HomeAR;
