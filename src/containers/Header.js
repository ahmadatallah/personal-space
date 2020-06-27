/** @jsx jsx */
import jsx from '../jsx';
import { useLayoutEffect } from 'react';
import Avatar from '../components/Avatar';
import avatarImg from '../assets/images/avatar.jpg';
import ColorModeApplier from './ColorModeApplier';
import HeaderElement from '../elements/Header';
import useColorMode from '../hooks/useColorMode';
import StyledLink from '../components/StyledLink';
import Flex from '../components/Flex';
import { Text } from 'theme-ui';

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
      pl={[1, 3, 4]}
      pr={[1, 3, 4]}
    >
      <Flex flexDirection="row" alignItems="center" mr={2} minWidth={260}>
        <StyledLink to="/">
          <Avatar
            alt="avatar"
            id="avatar"
            src={avatarImg}
            borderRadius="50%"
            borderColor="secondary"
            borderStyle="solid"
            borderWidth="2px"
            mr={2}
            width={40}
          />
        </StyledLink>
        <StyledLink to="/readings">
          <Text variant="headergrow">Readings</Text>
        </StyledLink>

        <StyledLink to="/writings">
          <Text variant="headergrow">Writings</Text>
        </StyledLink>
        <StyledLink to="/frames">
          <Text variant="headergrow">Frames</Text>
        </StyledLink>

        <StyledLink to="/archive">
          <Text variant="headergrow">Archive</Text>
        </StyledLink>
      </Flex>
      <ColorModeApplier mode={colorMode} onClick={changeTheme.bind(this)} />
    </HeaderElement>
  );
}

export default Header;
