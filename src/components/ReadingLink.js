/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Div } from '../elements';
import BlockLinkGrow from '../components/BlockLinkGrow';
import { Text } from 'theme-ui';

function ReadingLink({ title, link, ...props }) {
  return (
    <Div mb={3}>
      <BlockLinkGrow href={link} aria-label={title.toLowerCase()}>
        <Text
          sx={{
            fontSize: '1.5em',
            mb: '1rem',
            mt: '1rem',
            fontWeight: 'bold',
          }}
          variant="grow"
        >
          {title}
        </Text>
      </BlockLinkGrow>
    </Div>
  );
}

export default ReadingLink;
