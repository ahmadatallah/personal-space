/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Header from "../containers/Header";
import { Div } from "../elements";
import Flex from "../components/Flex";
import Frames from "../components/Frames";
import { photos } from "../utils/constants";
import Footer from "../containers/Footer";

function Photography({ ...props }) {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      maxWidth="80em"
      minHeight="100%"
      mr="auto"
      ml="auto"
    >
      <Header />
      <Div pl={[4, 4, 6]} pr={[4, 4, 6]} py={5} mt={[3, 4, 5]}>
        <Frames
          title="Frames"
          totalPages={2}
          initialLength={45}
          photos={photos}
        />
        <Footer />
      </Div>
    </Flex>
  );
}

export default Photography;
