/** @jsx jsx */
import jsx from '../jsx';
import React, { useLayoutEffect } from 'react';
import Avatar from '../components/Avatar';
import avatarImg from '../assets/images/avatar.png';
import ColorModeApplier from './ColorModeApplier';
import HeaderElement from '../elements/Header';
import useColorMode from '../hooks/useColorMode';
import Link from '../components/Link';
import StyledLink from '../components/StyledLink';
import Flex from '../components/Flex';

function Header() {
  const { colorMode, populateTheme, changeTheme } = useColorMode();
  useLayoutEffect(() => {
    populateTheme(colorMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <HeaderElement
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
        height: '80px',
      }}
    >
      <Flex flexDirection="row" alignItems="center" mr={2} minWidth={260}>
        <StyledLink to="/">
          <Avatar
            alt="avatar"
            id="avatar"
            src={avatarImg}
            borderRadius="20%"
            borderColor="secondary"
            borderStyle="solid"
            borderWidth="2px"
            mr={1}
            width={50}
          />
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
    </HeaderElement>
  );
}

export default Header;
