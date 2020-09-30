/** @jsx jsx */
import jsx from '../../jsx';
import { Suspense } from 'react';
import Flex from '../../components/Flex';
import { Div, H2 } from '../../elements';
import { Spinner } from 'theme-ui';

const Layout = ({ children }) => (
  <Div justifyConent="center" py={2} mx="auto">
    <Suspense
      fallback={
        <Flex flexDirection="row" justifyContent="center">
          <H2 fontWeight={300} ml={2}>
            Loading
          </H2>
          <Spinner type="spokes" color="currentcolor" />
        </Flex>
      }
    >
      {children}
    </Suspense>
  </Div>
);

export default Layout;
