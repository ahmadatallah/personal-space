/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import Page from './Page';
import { H1, Section, H3, Div } from '../elements';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import Contributions from '../containers/Contributions';
import { Projects } from '../containers/Projects';

function Home({ ...props }) {
  return (
    <Page title="Home" path="">
      <Section
        alignItems="center"
        flexDirection="column"
        maxWidth="80em"
        minWidth="20rem"
        minHeight="100%"
        mr="auto"
        ml="auto"
      >
        <Header />
        <Div py={2} mt={4} pl={4} pr={4}>
          <H1 fontSize={4} mt={0} mb={0} color="secondary">
            Ahmad Atallah
          </H1>
          <H3 fontWeight={600} maxWidth="50rem" mb={4}>
            Software engineer who's doing mostly frontend stuff. Here, you are
            on my personal space where I share things like readings, writings,
            frames I take in daily life and random thoughts.
          </H3>
          <Contributions />
          <Projects />
          <Footer />
        </Div>
      </Section>
    </Page>
  );
}

export default Home;
