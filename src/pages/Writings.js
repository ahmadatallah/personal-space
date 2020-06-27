/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { Div } from '../elements';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Flex from '../components/Flex';
import { Writings as WritingsContainer } from '../containers/Writings';

function Writings({ ...props }) {
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
      <Div display="grid" pl={4} pr={4} py={2} mt={1}>
        <WritingsContainer />
        <Footer />
      </Div>
    </Flex>
  );
}

export default Writings;
