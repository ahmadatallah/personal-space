/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Avatar from "../components/Avatar";
import avatarImg from "../assets/images/avatar.png";
import BlockLinkGrow from "../components/BlockLinkGrow";
import { A } from "../elements";

function Footer() {
  return (
    <footer borderTop="1px solid" borderColor="black-20" py={4}>
      <div ml="auto" width={1} display="flex">
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
          href="https://www.instagram.com/"
          title="ahmad.atallah"
        >
          Instagram
        </BlockLinkGrow>
      </div>
    </footer>
  );
}

export default Footer;
