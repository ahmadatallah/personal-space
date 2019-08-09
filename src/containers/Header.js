/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Avatar from "../components/Avatar";
import avatarImg from "../assets/images/avatar.png";
import ColorModeApplier from "./ColorModeApplier";
import { useColorMode } from "theme-ui";

const modes = ["light", "black", "dark", "deep", "hack", "pink"];

function Header() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header
      px={4}
      py={2}
      borderBottom="1px solid"
      borderColor="black-20"
      display="flex"
      minWidth="460px"
      alignItems="center"
      style={{ "box-shadow": "0 1px 9px 0 currentcolor" }}
    >
      <div maxWidth="6rem">
        <a display="block" href="/">
          <Avatar src={avatarImg} borderRadius={100} width={64} />
        </a>
      </div>
      <a
        ml="auto"
        mr={3}
        fontSize={0}
        fontWeight={700}
        color="currentcolor"
        href="/"
        title="Readings"
        style={{ fontFamily: theme.typefaces.mono, ":hover": {color: 'currentcolor'}} }
      >
        Readings
      </a>
      <a
        fontSize={0}
        mr={3}
        fontWeight={700}
        color="currentcolor"
        href="/"
        title="Writings"
        style={{ fontFamily: theme.typefaces.mono }}
      >
        Writings
      </a>
      <a
        fontSize={0}
        mr={3}
        fontWeight={700}
        color="currentcolor"
        href="/"
        title="Frames"
        style={{ fontFamily: theme.typefaces.mono }}
      >
        Frames
      </a>
      <a
        fontSize={0}
        mr={3}
        fontWeight={700}
        color="currentcolor"
        href="/"
        title="Frames"
        style={{ fontFamily: theme.typefaces.mono }}
      >
        Music
      </a>
      <a
        fontSize={0}
        fontWeight={700}
        pb={2}
        mr={3}
        color="currentcolor"
        href="/"
        title="عربي"
        style={{ fontFamily: theme.typefaces.helvetica }}
      >
        عربي
      </a>
      <ColorModeApplier
        mode={colorMode}
        onClick={e => {
          const i = modes.indexOf(colorMode);
          const n = (i + 1) % modes.length;
          setColorMode(modes[n]);
        }}
      />
    </header>
  );
}

export default Header;
