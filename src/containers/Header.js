/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Avatar from "../components/Avatar";
import avatarImg from "../assets/images/avatar.png";
import ColorModeApplier from "./ColorModeApplier";
import { useColorMode } from "theme-ui";
import { Div, A } from "../elements";
import { modes } from "../utils/constants";

function Header() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header
      px={3}
      py={2}
      borderBottom="1px solid"
      borderColor="black-20"
      display="flex"
      alignItems="center"
      style={{ "box-shadow": "0 1px 9px 0 currentcolor" }}
    >
      <Div maxWidth="6rem" mr={2}>
        <A display="block" href="/">
          <Avatar src={avatarImg} borderRadius={100} width={[32, 64]} />
        </A>
      </Div>
      <A
        ml="auto"
        mr={3}
        fontSize={0}
        fontWeight={700}
        color="currentcolor"
        href="/readings"
        title="Readings"
        fontFamily={theme.typefaces.mono}
      >
        Readings
      </A>
      <A
        fontSize={0}
        mr={3}
        fontWeight={700}
        color="currentcolor"
        href="/writings"
        title="Writings"
        fontFamily={theme.typefaces.mono}
      >
        Writings
      </A>
      <A
        fontSize={0}
        mr={3}
        fontWeight={700}
        color="currentcolor"
        href="/frames"
        title="Frames"
        fontFamily={theme.typefaces.mono}
      >
        Frames
      </A>
      <A
        fontSize={1}
        fontWeight={700}
        pb={2}
        mr={3}
        color="currentcolor"
        href="/ar"
        title="عربي"
        fontFamily={theme.typefaces.helvetica}
      >
        عربي
      </A>

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
