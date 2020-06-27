/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { Div } from '../elements';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Flex from '../components/Flex';
import { Archive as ArchiveContainer } from '../containers/Archive';

function Archive({ ...props }) {
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
        <ArchiveContainer />
        <Footer />
      </Div>
    </Flex>
  );
}

export default Archive;
