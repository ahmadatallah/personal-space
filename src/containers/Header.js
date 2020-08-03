/** @jsx jsx */
import jsx from '../jsx';
import { useLayoutEffect } from 'react';
import Avatar from '../components/Avatar';
import avatarImg from '../assets/images/avatar.jpg';
import ColorModeApplier from './ColorModeApplier';
import H from '../elements/Header';
import useColorMode from '../hooks/useColorMode';
import StyledLink from '../components/StyledLink';
import Flex from '../components/Flex';
import { Text } from 'theme-ui';
import { Div } from '../elements';

function Header() {
  const { colorMode, populateTheme, changeTheme } = useColorMode();
  return (
    <H
      display="flex"
      alignItems="center"
      flexDirection="column"
      mr="auto"
      ml="auto"
      justifyContent="space-around"
      width="100%"
      pl={4}
      pr={4}
      py={2}
      mt={3}
    >
      <Div
        display="flex"
        flexDirection="row"
        alignItems="center"
        minWidth={260}
        mr={3}
      >
        <StyledLink to="/">
          <Avatar
            alt="avatar"
            id="avatar"
            src={avatarImg}
            borderRadius="50%"
            mr={2}
            width={40}
          />
        </StyledLink>
        <Flex
          flexWrap="nowrap"
          flexDirection={['row-reverse', 'row-reversed', 'row']}
          alignItems="center"
        >
          <Flex
            flexDirection={['column', 'column', 'row']}
            alignItems="flex-end"
          >
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
            <StyledLink to="/about">
              <Text variant="headergrow">About</Text>
            </StyledLink>
          </Flex>
          <Div width="36px">
            <ColorModeApplier
              mode={colorMode}
              onClick={changeTheme.bind(this)}
            />
          </Div>
        </Flex>
      </Div>
    </H>
  );
}

export default Header;
