/** @jsx jsx */
import jsx from "../jsx";
import React, { useState } from "react";
import Avatar from "../components/Avatar";
import avatarImg from "../assets/images/avatar.png";
import ColorModeApplier from "./ColorModeApplier";
import { useColorMode } from "theme-ui";
import { Div, A } from "../elements";
import { modes } from "../utils/constants";
import theme from "../theme";


function Header() {
  const [colorMode, setColorMode] = useColorMode();
  const [textColor, changeTextTheme] = useState('black')
  const [backgroundColor, changeBackgroundTheme] = useState('white')
  
  window.theme = theme
  const changeTheme = e => {
    const i = modes.indexOf(colorMode);
    const n = (i + 1) % modes.length;
    const currentMode = modes[n];
    changeTextTheme(window.theme.colors.modes[currentMode].primary)
    changeBackgroundTheme(window.theme.colors.modes[currentMode].background)
    setColorMode(modes[n]);
  }

  return (
    <header
      px={3}
      py={2}
      display="flex"
      alignItems="center"
      width="100%"
      style= {{
        position: "fixed",
        zIndex: 100,
        top: 0,
        height: "80px",
      }}
      color={textColor}
      backgroundColor={backgroundColor}
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
        fontSize={0}
        fontWeight={700}
        pb={1}
        mr={3}
        color="currentcolor"
        href="/ar"
        title="كتابات"
        fontFamily={theme.typefaces.helvetica}
      >
        كتابات
      </A>

      <ColorModeApplier
        mode={colorMode}
        onClick={changeTheme.bind(global)}
      />
    </header>
  );
}

export default Header;
