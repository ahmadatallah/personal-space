/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Flex from "../components/Flex";
import { P, A } from "../elements";
function Footer() {
  return (
    <footer>
      <Flex justifyContent="center" my={0}>
        <P fontFamily={theme.typefaces.mono}>© 2019 syncatallah. </P>
        <A
          ml={3}
          fontWeight={700}
          color="currentcolor"
          href="/about"
          title="About"
          fontFamily={theme.typefaces.mono}
        >
          {"About | "}
        </A>
        <A
          fontSize={1}
          fontWeight={700}
          pb={2}
          ml={3}
          color="currentcolor"
          href="/"
          title="عربي"
          fontFamily={theme.typefaces.helvetica}
        >
          عربي
        </A>
      </Flex>
    </footer>
  );
}

export default Footer;
