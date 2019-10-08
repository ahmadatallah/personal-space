/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Avatar from "../components/Avatar";
import avatarImg from "../assets/images/avatar.png";
import ColorModeApplier from "./ColorModeApplier";
import { Div, A, Header as header } from "../elements";
import theme from "../theme";
import useEveryReloadColorMode from "../hooks/useEveryReloadColorMode";
import BlockLinkGrow from "../components/BlockLinkGrow";

function Header() {
  const {
    colorMode,
    changeTheme
  } = useEveryReloadColorMode();

  return (
    <header
      px={3}
      py={2}
      display="flex"
      alignItems="center"
      width="100%"
      style={{
        position: "fixed",
        zIndex: 100,
        top: 0,
        height: "80px"
      }}
    >
      <Div maxWidth="6rem" mr={2}>
        <BlockLinkGrow display="block" href="/">
          <Avatar src={avatarImg} borderRadius={100} width={[32, 64]} />
        </BlockLinkGrow>
      </Div>
      <BlockLinkGrow
        ml="auto"
        mr={3}
        fontSize={0}
        fontWeight={700}
        href="/readings"
        title="Readings"
        fontFamily={theme.typefaces.mono}
      >
        Readings
      </BlockLinkGrow>
      <BlockLinkGrow
        fontSize={0}
        mr={3}
        fontWeight={700}
        href="/writings"
        title="Writings"
        fontFamily={theme.typefaces.mono}
      >
        Writings
      </BlockLinkGrow>
      <BlockLinkGrow
        fontSize={0}
        mr={3}
        fontWeight={700}
        href="/frames"
        title="Frames"
        fontFamily={theme.typefaces.mono}
      >
        Frames
      </BlockLinkGrow>
      <BlockLinkGrow
        fontSize={0}
        mr={3}
        fontWeight={700}
        href="https://ahmad-atallah.tumblr.com"
        title="Archive"
        fontFamily={theme.typefaces.mono}
      >
        Archive
      </BlockLinkGrow>
      <BlockLinkGrow
        fontSize={0}
        fontWeight={700}
        pb={1}
        mr={3}
        href="/ar"
        title="كتابات"
        fontFamily={theme.typefaces.helvetica}
      >
        كتابات
      </BlockLinkGrow>

      <ColorModeApplier mode={colorMode} onClick={changeTheme.bind(this)} />
    </header>
  );
}

export default Header;
