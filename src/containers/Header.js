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
      display="flex"
      alignItems="center"
      mr="auto"
      ml="auto"
      justifyContent="space-around"
      width="100%"
      pt={3}
      pb={3}
      pl={[1, 3, 5]}
      pr={[1, 3, 5]}
      style={{
        top: 0,
        height: "80px"
      }}
    >
      <Flex flexDirection="row" mr={2} minWidth={260}>
        <StyledLink to="/">
          <Avatar src={avatarImg} borderRadius={100} mt={2} mr={1} width={46} />
        </StyledLink>
        <StyledLink to="/readings">
          <Link title="Readings" fontSize={[0, 1, 1]} mr={3} fontWeight={700} />
        </StyledLink>

        <StyledLink to="/writings">
          <Link title="Writings" fontSize={[0, 1, 1]} mr={3} fontWeight={700} />
        </StyledLink>
        <StyledLink to="/frames">
          <Link title="Frames" fontSize={[0, 1, 1]} mr={3} fontWeight={700} />
        </StyledLink>

        <StyledLink to="/archive">
          <Link
            title="Archive"
            fontSize={[0, 1, 1]}
            pb={1}
            mr={3}
            fontWeight={700}
          />
        </StyledLink>
      </Flex>
      <ColorModeApplier mode={colorMode} onClick={changeTheme.bind(this)} />
    </header>
  );
}

export default Header;
