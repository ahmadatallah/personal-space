/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import theme from '../theme';
import Container from '../components/Container';
import { H1, H2, Section, H3, Div } from '../elements';
import Flex from '../components/Flex';
import Connect from '../containers/Connect';
import { ThemeProvider, ColorMode } from 'theme-ui';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import WritingsContainer from '../containers/WritingsContainer';
import Contributions from '../containers/Contributions';

function Home({ ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <Section
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
        <Div>
          <Div>
            <H2 fontSize={45} mb={0}>
              {' '}
              Sync...{' '}
            </H2>
            <H1 fontSize={80} mt={0} mb={0}>
              Atallah
            </H1>
          </Div>
          <H3 fontWeight={600} maxWidth="50rem">
            Hi there! I am Ahmad Atallah, a software engineer at Swvl. Interested in
            functional programming, frontend engineering, and design.
          </H3>
        </Div>
        <Contributions />
        <WritingsContainer />
        <Connect />
        <Footer />
      </Section>
    </ThemeProvider>
  );
}

export default Home;
