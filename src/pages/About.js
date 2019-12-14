/** @jsx jsx */
import jsx from '../jsx';
import React, { lazy, Suspense } from 'react';
import theme from '../theme';
import Container from '../components/Container';
import { H3, H2, Div } from '../elements';
import Flex from '../components/Flex';
import Connect from '../containers/Connect';
import about from '../assets/images/about-img.jpg';
import Header from '../containers/Header';
import Loading from '../components/Loading';

const Img = lazy(() => import('../elements/Img'));

function About() {
  return (
    <>
      <Flex
        justifyContent="center"
        flexDirection="column"
        minWidth="20rem"
        pr={3}
        pl={3}
        alignItems="center"
        maxWidth="80em"
        minHeight="100%"
        mr="auto"
        ml="auto"
      >
        <Header />
        <Div
          display="block"
          mb={[3, 2, 1]}
          mt={4}
          width={[300, 300, 400]}
          alignItems="center"
        >
          <Suspense
            fallback={
              <Flex flexDirection="column" justifyContent="center" mx="auto">
                <H2 fontWeight={300}> Loading </H2>
                <Loading type="spokes" color="currentcolor" />
              </Flex>
            }
          >
            <Img src={about} />
          </Suspense>
        </Div>
        <Div mx="auto" maxWidth="64rem">
          <H3
            px={[3, 4]}
            fontWeight={4}
            style={{ 'font-family': theme.typefaces.mono }}
          >
            I'm Ahmad Atallah. An egyptian software engineer. Interested in
            functional programming, frontend engineering, and design. What makes
            me alive is doing things I'm interested in, like previously
            mentioned, and the willing to learn more and fastly. I like taking
            visual photos. Photos that I pass by in my daily life; every single
            day. Noam Chomsky once said: "When you walk around, you're talking
            to yourself. You can't stop. I mean, it takes a real act of will not
            to talk to yourself, and what you're doing is thinking" and I find
            this is about the actual state of my mind all the time.
          </H3>
        </Div>
        <Container mx="auto" px={[3, 4]} maxWidth="64rem">
          <Connect />
        </Container>
      </Flex>
    </>
  );
}

export default About;
