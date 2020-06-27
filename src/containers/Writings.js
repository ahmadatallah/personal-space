/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { IoIosLink } from 'react-icons/io';
import Link from '../components/Link';
import StyledLink from '../components/StyledLink';
import { H1, Div, Small, P } from '../elements';
import useColorMode from '../hooks/useColorMode';
import BlockLinkGrow from '../components/BlockLinkGrow';
import { Text } from 'theme-ui';

const LinkIcon = ({ color }) => {
  return (
    <BlockLinkGrow>
      <IoIosLink size={22} />
    </BlockLinkGrow>
  );
};

export function Writings({ title, href, ...props }) {
  const { textColor } = useColorMode();

  return (
    <>
      <H1 fontWeight={600} fontSize={4} color={textColor}>
        {' '}
        Writings{' '}
      </H1>
      <Div mb={3}>
        <StyledLink to="/writings/create-react-app-run-build-envs">
          <Text variant="grow">
            Create React App: Run-time vs Build-time Environment Variables
          </Text>
        </StyledLink>
        <Div ml={[2, 2, 3]}>
          <Small>
            13 Aug, 2019{' '}
            <span role="img" aria-label="min-read">
              • 📖☕️{' '}
            </span>
            7 min read
          </Small>
          <P mt={0}>
            Set create-react-app custom environment variables in build, and run
            time environments without ejecting default configuration.
          </P>
        </Div>
      </Div>
      <Div mb={3}>
        <StyledLink to="/writings/pascal-typescript-example">
          <Text variant="grow">Pattern Matching Example in TypeScript </Text>
        </StyledLink>
        <Div ml={[2, 2, 3]}>
          <Small>
            8 Sep, 2019{' '}
            <span role="img" aria-label="min-read">
              • 📖{' '}
            </span>
            5 min read
          </Small>
          <P mt={0}>A "semi-pattern-matching" example in Typescript.</P>
        </Div>
      </Div>
      <Div mb={3}>
        <StyledLink to="/writings/notify-pwa-updates">
          <Text variant="grow">Notify A Progressive Web App (PWA) Updates</Text>
        </StyledLink>
        <Div ml={[2, 2, 3]}>
          <Small>
            25 Oct, 2019{' '}
            <span role="img" aria-label="min-read">
              • 📖📖☕️{' '}
            </span>
            15 min read{' '}
          </Small>
          <P mt={0}>
            Notify your Offline/Cache-first users in Create React App with
            service worker.
          </P>
        </Div>
      </Div>
      <Div mb={3}>
        <StyledLink to="/writings/change-theme-with-use-layout-effect">
          <Text variant="grow">
            Navigate then Change The Theme; An Experiment to useLayoutEffect
            React Hook
          </Text>
        </StyledLink>
        <Div ml={[2, 2, 3]}>
          <Small>
            04 Apr, 2020
            <span role="img" aria-label="min-read">
              • ⚗️⚗️{' '}
            </span>
            5 min read
          </Small>
          <P mt={0}>
            A proven example on how useLayoutEffect React hook can prevent app
            flickering.
          </P>
        </Div>
      </Div>
    </>
  );
}
