/** @jsx jsx */
import jsx from '../../jsx';
import React, { lazy, Suspense } from 'react';
import theme from '../../theme';
import { Div, Section, H2 } from '../../elements';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import Flex from '../../components/Flex';
import Loading from '../../components/Loading';
import layout from './layout';

const Content = lazy(() =>
  import('!babel-loader!mdx-loader!./NotifyYourPWAViewers.mdx')
);

function NotifyYourPWAViewers({ ...props }) {
  return (
    <layout>
      <Section
        alignItems="center"
        flexDirection="column"
        maxWidth="80em"
        minHeight="100%"
        mr="auto"
        ml="auto"
        minWidth="20rem"
        pl={[1, 3, 5]}
        pr={[1, 3, 5]}
      >
        <Header />
      </Section>{' '}
      <Div
        justifyConent="center"
        maxWidth={900}
        px={[4, 3, 5]}
        py={2}
        mx="auto"
        fontFamily={theme.typefaces.sansSerif}
        mt={30}
      >
        <Suspense
          fallback={
            <Flex flexDirection="row" justifyContent="center">
              <H2 fontWeight={300} mr={2}>
                {' '}
                Loading{' '}
              </H2>
              <Loading type="spokes" color="currentcolor" />
            </Flex>
          }
        >
          <Content />
        </Suspense>
        <Footer />
      </Div>
    </layout>
  );
}

export default NotifyYourPWAViewers;
