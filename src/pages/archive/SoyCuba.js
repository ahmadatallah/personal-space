/** @jsx jsx */
import jsx from '../../jsx';
import React, { lazy, Suspense } from 'react';
import { Div, H2 } from '../../elements';
import Flex from '../../components/Flex';
import Loading from '../../components/Loading';
const Content = lazy(() => import('!babel-loader!mdx-loader!./SoyCuba.mdx'));

function SoyCuba({ ...props }) {
  return (
    <>
      <Div justifyConent="center" py={2} mx="auto">
        <Suspense
          fallback={
            <Flex flexDirection="row" justifyContent="center">
              <H2 fontWeight={300} ml={2}>
                {' '}
                Loading{' '}
              </H2>
              <Loading type="spokes" color="currentcolor" />
            </Flex>
          }
        >
          <Content />
        </Suspense>
      </Div>
    </>
  );
}

export default SoyCuba;
