/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Flex from "../components/Flex";
import { P } from "../elements";
import BlockLinkGrow from "../components/BlockLinkGrow.js";

function Footer() {
  return (
    <footer
      mb={1}
      px={2}
      py={3}
      display="flex"
      alignItems="center"
      width="100%"
      style={{
        bottom: 0
      }}
    >
      <Flex
        fontFamily={theme.typefaces.mono}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        my={0}
      >
        <P pt="7%" textAlign="center" fontWeight={600}>
          {" "}
          Proudly built with Tachyons, Styled System and React © syncatallah
          2019 {" •"}
          <BlockLinkGrow
            ml={2}
            fontWeight={700}
            color="currentcolor"
            href="/about"
            title="About"
            fontFamily={theme.typefaces.mono}
          >
            {"About"}
          </BlockLinkGrow>
        </P>
      </Flex>
    </footer>
  );
}

export default Footer;
