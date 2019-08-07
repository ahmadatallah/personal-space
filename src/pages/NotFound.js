/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";

import Container from "../components/Container";
import { H1 } from "../elements";
import Flex from "../components/Flex";

function NotFound() {
  return (
    <div>
      <Flex justifyContent='center'>
        <H1 color="red"> Not Found </H1>
      </Flex>
    </div>
  );
}

export default NotFound;
