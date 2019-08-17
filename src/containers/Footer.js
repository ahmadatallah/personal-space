/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Flex from "../components/Flex";
import { P } from "../elements";
import BlockLinkGrow from '../components/BlockLinkGrow.js';

function Footer() {
  return (
    <footer>
      <Flex justifyContent="center" my={0}>
        <P fontFamily={theme.typefaces.mono}>© 2019 syncatallah. </P>
        <BlockLinkGrow
          ml={3}
          fontWeight={700}
          color="currentcolor"
          href="/about"
          title="About"
          fontFamily={theme.typefaces.mono}
        >
          {"About"}
        </BlockLinkGrow>
      </Flex>
    </footer>
  );
}

export default Footer;
