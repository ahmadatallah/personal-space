/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import BlockLinkGrow from "./BlockLinkGrow";

function Link({ title, href, ...props }) {
  return (
    <BlockLinkGrow
      fontSize={[1, 2, 3]}
      mx={1}
      textStyle="underline"
      my={2}
      fontWeight={400}
      href={href}
      {...props}
    >
      {title}
    </BlockLinkGrow>
  );
}

export default Link;
