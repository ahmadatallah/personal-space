/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import BlockLinkGrow from "../components/BlockLinkGrow";

function Footer() {
  return (
    <footer borderTop="1px solid" borderColor="black-20" py={4}>
      <div ml="auto" px="auto" display="flex">
        <BlockLinkGrow
          color="black"
          py={1}
          mr={2}
          fontWeight={700}
          href="https://github.com/syncatallah"
          title="Syncatallah"
        >
          Github
        </BlockLinkGrow>
        <BlockLinkGrow
          color="black"
          py={1}
          mr={2}
          fontWeight={700}
          href="https://twitter.com/ahmadatallah"
          title="ahmadatallah"
        >
          Twitter
        </BlockLinkGrow>
        <BlockLinkGrow
          color="black"
          py={1}
          mr={2}
          fontWeight={700}
          href="https://www.instagram.com/ahmad.atallah"
          title="ahmad.atallah"
        >
          Instagram
        </BlockLinkGrow>
        <BlockLinkGrow
          color="black"
          py={1}
          mr={2}
          fontWeight={700}
          href="https://www.linkedin.com/in/ahmad-atallah/"
          title="ahmad.atallah"
        >
          Linkedin
        </BlockLinkGrow>
      </div>
    </footer>
  );
}

export default Footer;
