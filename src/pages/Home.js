/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import theme from '../theme';
import { H1, H2, Section, H3, Div } from '../elements';
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
        <Div py={2} pl={[1, 3, 5]} pr={[1, 3, 5]}>
          <>
            <H2 fontSize={45} mb={0}>
              {' '}
              Sync...{' '}
            </H2>
            <H1 fontSize={80} mt={0} mb={0}>
              Atallah
            </H1>
          </>
          <H3 fontWeight={600} maxWidth="50rem">
            Hi there! I am Ahmad Atallah, a software engineer. Interested in
            functional programming, frontend engineering, and design. Sync...?
            because we are all about sync. So, let the data flow!{' '}
          </H3>
          <Contributions />
          <WritingsContainer />
          <Connect />
          <Footer />
        </Div>
      </Section>
    </ThemeProvider>
  );
}

export default Home;
