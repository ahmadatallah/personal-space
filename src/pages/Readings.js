/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import Page from './Page';
import Flex from '../components/Flex';
import { Div } from '../elements';
import { Readings as ReadingsContainer } from '../containers/Readings';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

function Readings() {
  return (
    <Page title="Readings" path="readings">
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
          <ReadingsContainer />
          <Footer />
        </Div>
      </Flex>
    </Page>
  );
}

export default Readings;
