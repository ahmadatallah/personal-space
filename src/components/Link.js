/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import { H4 } from "../elements";
import BlockLinkGrow from "./BlockLinkGrow";

function Link({ title, href, ...props }) {
  return (
    <BlockLinkGrow
      fontSize={[1, 2, 3]}
      mx={1}
      my={1}
      fontWeight={400}
      style={{ "font-family": theme.typefaces.mono }}
      href={href}
    >
      {title}
    </BlockLinkGrow>
  );
}

export default Link;
