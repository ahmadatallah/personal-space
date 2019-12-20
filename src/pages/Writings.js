/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { Div } from '../elements';
import Header from '../containers/Header';
import Flex from '../components/Flex';
import Footer from '../containers/Footer'
import WritingsContainer from '../containers/WritingsContainer';

function Writings({ ...props }) {
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
        <Div display="grid" pl={[1, 3, 5]} pr={[1, 3, 5]} py={2} mt={1}>
          <WritingsContainer />
        </Div>
      </Flex>
    </>
  );
}

export default Writings;
