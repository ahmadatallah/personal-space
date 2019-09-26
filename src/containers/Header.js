/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useEffect } from "react";
import Avatar from "../components/Avatar";
import avatarImg from "../assets/images/avatar.png";
import ColorModeApplier from "./ColorModeApplier";
import { useColorMode } from "theme-ui";
import { Div, A } from "../elements";
import { modes } from "../utils/constants";
import theme from "../theme";

function Header() {
  const [colorMode, setColorMode] = useColorMode();
  const [textColor, changeTextTheme] = useState();
  const [backgroundColor, changeBackgroundTheme] = useState();
  const populateTheme = colorTheme => {
    const i = modes.indexOf(colorTheme);
    const n = (i + 1) % modes.length;
    const currentMode = modes[n];
    document.querySelectorAll("h1").forEach(tag => {
      tag.setAttribute(
        "style",
        `color: ${theme.colors.modes[currentMode].secondary}`
      );
    });

    document.querySelectorAll("a").forEach(a => {
      a.setAttribute(
        "style",
        `color: ${theme.colors.modes[currentMode].secondary}`
      );
    });

    document.querySelectorAll("svg").forEach(tag => {
      tag.setAttribute(
        "style",
        `color: ${theme.colors.modes[currentMode].secondary}`
      );
    });

    changeTextTheme(theme.colors.modes[currentMode].secondary);
    changeBackgroundTheme(theme.colors.modes[currentMode].background);
    setColorMode(currentMode);
  };

  useEffect(() => {
    populateTheme(colorMode);

    return () => {
      populateTheme("light");
    };
  }, []);

  const changeTheme = e => {
    populateTheme(colorMode);
  };

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
        mr={3}
        fontWeight={700}
        color="currentcolor"
        href="https://ahmad-atallah.tumblr.com"
        title="Archive"
        fontFamily={theme.typefaces.mono}
      >
        Archive
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

      <ColorModeApplier mode={colorMode} onClick={changeTheme.bind(this)} />
    </header>
  );
}

export default Header;
