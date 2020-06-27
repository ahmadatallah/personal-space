/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import { Div } from '../elements';
import Flex from '../components/Flex';
import { Frames as FramesContainer } from '../containers/Frames';
function Frames({ ...props }) {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      maxWidth="80em"
      minWidth="20rem"
      minHeight="100%"
      mr="auto"
      ml="auto"
    >
      <Header />
      <Div display="grid" pl={[1, 3, 4]} pr={[1, 3, 4]} py={2} mt={1}>
        <FramesContainer />
        <Footer />
      </Div>
    </Flex>
  );
}

export default Frames;
