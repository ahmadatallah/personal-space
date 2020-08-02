/** @jsx jsx */
import jsx from '../../jsx';
import React, { lazy, Suspense } from 'react';
import { Spinner } from 'theme-ui';
import { Div, H2 } from '../../elements';
import Flex from '../../components/Flex';

const Content = lazy(() =>
  import('!babel-loader!mdx-loader!./FlipYourEye.mdx')
);

function FlipYourEye({ ...props }) {
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
              <Spinner type="spokes" color="currentcolor" />
            </Flex>
          }
        >
          <Content />
        </Suspense>
      </Div>
    </>
  );
}

export default FlipYourEye;
