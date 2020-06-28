/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { Text } from 'theme-ui';
import { H1, Div, P } from '../elements';
import useColorMode from '../hooks/useColorMode';
import BlockLinkGrow from '../components/BlockLinkGrow';

export function Projects({ title, href, ...props }) {
  const { textColor } = useColorMode();

  return (
    <>
      <H1 fontWeight={700} fontSize={3} mb={4} color={textColor}>
        {' '}
        Projects{' '}
      </H1>
      <Div mb={3} width={[1, 1 / 2, 1 / 3]}>
        <BlockLinkGrow href="https://tachyons-styled-tsx.now.sh/">
          <Text variant="grow">tachyons styled tsx</Text>
        </BlockLinkGrow>
        <P>
          Bring Tachyons, implemented with Emotion and Styled System, into your
          React app with types in mind.
        </P>
      </Div>
    </>
  );
}
