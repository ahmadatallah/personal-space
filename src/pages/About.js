/** @jsx jsx */
import jsx from '../jsx';
import React, { lazy, Suspense } from 'react';
import Page from './Page';
import { Text, Spinner } from 'theme-ui';
import { H2, Div } from '../elements';
import Flex from '../components/Flex';
import about from '../assets/images/about-img.jpg';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

const Img = lazy(() => import('../elements/Img'));

function About() {
  return (
    <Page
      title="Home"
      path="about"
      preview="https://atallahsan.cc/static/media/about-img.589f3ca2.jpg"
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
                <Spinner type="spokes" color="currentcolor" />
              </Flex>
            }
          >
            <Img src={about} alt="my portrait picture" />
          </Suspense>
        </Div>
        <Div mx="auto" maxWidth="64rem">
          <Text py={2} px={[3, 4]} fontWeight={4}>
            I&apos;m Ahmad Atallah. An egyptian software engineer who&apos;s
            doing mostly frontend stuff. Also, I&apos;m interested in functional
            programming, and design. I do minimal things that&apos;s why
            terseness is something I prefer. I like taking visual photos. Photos
            that I pass by in my daily life; every single day. Noam Chomsky once
            said: &quot;When you walk around, you&apos;re talking to yourself.
            You can&apos;t stop. I mean, it takes a real act of will not to talk
            to yourself, and what you&apos;re doing is thinking&quot;, and I
            find this is about the actual state of my mind all the time.
          </Text>
        </Div>
        <Footer />
      </Flex>
    </Page>
  );
}

export default About;
