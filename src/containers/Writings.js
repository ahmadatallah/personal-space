/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { H1, Div } from '../elements';
import useColorMode from '../hooks/useColorMode';
import Link from '../components/Link';
import MetaText from '../components/MetaText';

export function Writings({ title, href, ...props }) {
  const { textColor } = useColorMode();

  return (
    <>
      <H1 fontWeight={600} fontSize={4} color={textColor}>
        Writings
      </H1>
      <Div mb={3}>
        <Link
          to="/writings/change-theme-with-use-layout-effect"
          title="Navigate then Change The Theme; An Experiment to useLayoutEffect React Hook"
        />
        <MetaText text="04 Apr, 2020 • 5 min read" />
      </Div>
      <Div mb={3}>
        <Link
          to="/writings/notify-pwa-updates"
          title="Notify A Progressive Web App (PWA) Updates"
        />
        <MetaText text="25 Oct, 2019 • 15 min read" />
      </Div>
      <Div mb={3}>
        <Link
          to="/writings/pascal-typescript-example"
          title="Pattern Matching Example in TypeScript"
        />
        <MetaText text="8 Sep, 2019 • 5 min read" />
      </Div>
      <Div mb={3}>
        <Link
          to="/writings/create-react-app-run-build-envs"
          title="Create React App: Run-time vs Build-time Environment Variables"
        />
        <MetaText text="13 Aug, 2019 • 7 min read" />
      </Div>
    </>
  );
}
