/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import Page from './Page';
import { H1, Section, H3, Div } from '../elements';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import Contributions from '../containers/Contributions';
import { Projects } from '../containers/Projects';
import avatar from '../assets/images/avatar.jpg';

function Home({ ...props }) {
  return (
    <Page title="Home" path="" preview={avatar}>
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
          <svg
            viewBox="0 0 213.783 66.675"
            width={['90mm, 90mm, 90mm']}
            height={['20mm', '20mm', '20mm']}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="layer1"
              transform="matrix(1, 0, 0, 1, -95.033485, -104.180313)"
            >
              <g
                transform="matrix(0.26458333,0,0,0.26458333,66.458486,45.728502)"
                id="letter"
                aria-label="A A"
              >
                <path
                  id="path181744"
                  d="M 404,91 V 46 h 9 v -9 h 9 v -9 h 27 v 9 h 9 v 9 h 9 V 91 H 449 V 73 h -27 v 18 z m 18,-27 h 27 V 46 h -9 v -9 h -9 v 9 h -9 z"
                  transform="matrix(4,0,0,4,-1508,108.92024)"
                />
                <path
                  id="path181746"
                  d="M 548,91 V 46 h 9 v -9 h 9 v -9 h 27 v 9 h 9 v 9 h 9 V 91 H 593 V 73 h -27 v 18 z m 18,-27 h 27 V 46 h -9 v -9 h -9 v 9 h -9 z"
                  transform="matrix(4,0,0,4,-1528,108.92024)"
                />
              </g>
            </g>
          </svg>
          <H1 fontSize={4} mt={0} mb={0}>
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
