/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import theme from '../theme';
import Flex from '../components/Flex';
import { P } from '../elements';
import BlockLinkGrow from '../components/BlockLinkGrow.js';

function Footer() {
  return (
    <footer
      display="flex"
      alignItems="center"
      width="100%"
      fontFamily={theme.typefaces.mono}
    >
      <P fontFamily={theme.typefaces.mono} fontWeight={600}>
        {' '}
        Proudly built with Tachyons, Styled System and React © syncatallah 2019{' '}
        {' •'}
        <BlockLinkGrow
          ml={2}
          fontWeight={700}
          color="currentcolor"
          href="/about"
          title="About"
          fontFamily={theme.typefaces.mono}
        >
          {'About'}
        </BlockLinkGrow>
      </P>
    </footer>
  );
}

export default Footer;
