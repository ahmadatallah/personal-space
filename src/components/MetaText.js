/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Small } from '../elements';

export default function MetaText({ text }) {
  return (
    <Small
      sx={{
        fontSize: '14px',
        fontWeight: 700,
      }}
    >
      {text}
    </Small>
  );
}
