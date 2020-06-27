/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { Div } from '../elements';
import BlockLinkGrow from '../components/BlockLinkGrow';
import { Text } from 'theme-ui';

function ReadingLink({ title, link, ...props }) {
  return (
    <Div mb={3}>
      <BlockLinkGrow
        href={link}
        aria-label={title.toLowerCase()}
        fontSize={[2, 3, 3]}
        fontWeight={[700, 600, 600]}
      >
        <Text variant="grow">{title}</Text>
      </BlockLinkGrow>
    </Div>
  );
}

export default ReadingLink;
