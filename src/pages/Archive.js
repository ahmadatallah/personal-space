/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import theme from '../theme';
import { Div } from '../elements';
import Header from '../containers/Header';
import Flex from '../components/Flex';
import OthersContainer from '../containers/ArchiveContainer';

function Archive({ ...props }) {
  return (
    <>
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="80em"
        minHeight="100%"
        mr="auto"
        ml="auto"
        minWidth="20rem"
        pr={3}
        pl={3}
      >
        <Header />
        <Div pl={[1, 2, 3]} pr={[1, 2, 3]} py={5} mt={1}>
          <OthersContainer />
        </Div>
      </Flex>
    </>
  );
}

export default Archive;
