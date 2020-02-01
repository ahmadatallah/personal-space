/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { H1, Img, Div } from '../elements';
import Flex from '../components/Flex';
import Header from '../containers/Header';
import useColorMode from '../hooks/useColorMode';

import ConfusedTravolta from '../assets/images/confused-travolta.svg';
import { Container } from 'theme-ui';
function NotFound() {
  const { textColor } = useColorMode();
  return (
    <>
      <Flex
        maxWidth="80rem"
        minWidth="20rem"
        alignItems="center"
        ml="auto"
        mr="auto"
        pr={3}
        pl={3}
        flexDirection="column"
      >
        <Header />
        <Container
          ma="auto"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <H1 textAlign="center" color={textColor}>
            404 Not Found
          </H1>
          <Img
            height={[300, 400, 500]}
            borderRadius="50%"
            alt="confused travolta aka not found"
            src={ConfusedTravolta}
          ></Img>
        </Container>
      </Flex>
    </>
  );
}

export default NotFound;
