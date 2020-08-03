/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Page from './Page';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import { Div } from '../elements';
import Flex from '../components/Flex';
import { Frames as FramesContainer } from '../containers/Frames';

function Frames({ ...props }) {
  return (
    <Page
      title="Frames"
      path="frames"
      preview="https://syncatallah.cc/static/media/0002carousel.d450fbe3.jpg"
    >
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
        <Div display="grid" pl={4} pr={4} py={2} mt={1}>
          <FramesContainer />
          <Footer />
        </Div>
      </Flex>
    </Page>
  );
}

export default Frames;
