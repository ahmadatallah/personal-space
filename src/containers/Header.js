/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Avatar from "../components/Avatar";
import avatarImg from "../assets/images/avatar.png";
import ColorModeApplier from "./ColorModeApplier";
import { Div, Header as header } from "../elements";
import theme from "../theme";
import useEveryReloadColorMode from "../hooks/useEveryReloadColorMode";
import Link from "../components/Link";
import StyledLink from "../components/StyledLink";
import Flex from "../components/Flex";

function Header() {
  const { colorMode, changeTheme } = useEveryReloadColorMode();

  return (
    <header
      px={[3, 4, 5]}
      py={2}
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      width="100%"
      style={{
        position: "fixed",
        top: 0,
        height: "60px",
        zIndex: 100
      }}
    >
      <Div>
        <StyledLink to="/">
          <Avatar src={avatarImg} borderRadius={100} marginTop={2} width={[32, 46]} />
        </StyledLink>
      </Div>
      <Flex maxWidth="14rem" flexDirection="row">
        <Div>
          <StyledLink to="/readings">
            <Link
              title="Readings"
              fontSize={0}
              mr={3}
              fontWeight={700}
              fontFamily={theme.typefaces.mono}
            />
          </StyledLink>

          <StyledLink to="/writings">
            <Link
              title="Writings"
              fontSize={0}
              mr={3}
              fontWeight={700}
              fontFamily={theme.typefaces.mono}
            />
          </StyledLink>
          <StyledLink to="/frames">
            <Link
              title="Frames"
              fontSize={0}
              mr={3}
              fontWeight={700}
              fontFamily={theme.typefaces.mono}
            />
          </StyledLink>

          <StyledLink to="/ar">
            <Link
              title="كتابات"
              fontSize={0}
              pb={1}
              mr={3}
              fontWeight={700}
              fontFamily={theme.typefaces.helvetica}
            />
          </StyledLink>
        </Div>
      </Flex>
      <ColorModeApplier mode={colorMode} onClick={changeTheme.bind(this)} />
    </header>
  );
}

export default Header;
