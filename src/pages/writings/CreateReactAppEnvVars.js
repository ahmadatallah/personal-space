/** @jsx jsx */
import jsx from '../../jsx';
import { lazy, Suspense } from 'react';
import { Spinner } from 'theme-ui';
import { Div, H2 } from '../../elements';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import Flex from '../../components/Flex';

const Content = lazy(() =>
  import('!babel-loader!mdx-loader!./CreateReactAppEnvVars.mdx')
);

function CreateReactAppEnvVars({ ...props }) {
  return (
    <layout>
      <Flex
        alignItems="left"
        flexDirection="column"
        maxWidth="80em"
        minHeight="100%"
        mr="auto"
        ml="auto"
        minWidth="20rem"
      >
        <Header />
        <Div display="grid" pl={4} pr={4} py={2} mt={1} width={[1, 2 / 3]}>
          <Suspense
            fallback={
              <Flex flexDirection="row" justifyContent="center">
                <H2 fontWeight={300} mr={2}>
                  {' '}
                  Loading{' '}
                </H2>
                <Spinner type="spokes" color="currentcolor" />
              </Flex>
            }
          >
            <Content />
          </Suspense>
        </Div>
        <Footer />
      </Flex>
    </layout>
  );
}

export default CreateReactAppEnvVars;
