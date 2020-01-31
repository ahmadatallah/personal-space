/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import theme from '../theme';
import { H1, Div } from '../elements';
import Link from '../components/Link';
import BlockLinkGrow from '../components/BlockLinkGrow';
import { IoIosLink } from 'react-icons/io';
import useEveryReloadColorMode from '../hooks/useEveryReloadColorMode';
import ReadingLink from '../components/ReadingLink';

function ReadingsContainer({ title, href, ...props }) {
  const { textColor } = useEveryReloadColorMode();

  return (
    <>
      <H1 fontWeight={600} color={textColor}>
        {' '}
        Readings{' '}
      </H1>
      <ReadingLink
        title="No, I have no side code projects to show you"
        link="https://bit.ly/33zdmtc"
      />
      <ReadingLink
        title="Mapping a universe of open source software"
        link="https://www.tweag.io/posts/2019-02-06-mapping-open-source.html"
      />
      <ReadingLink
        title="React as a UI runtime"
        link="https://overreacted.io/react-as-a-ui-runtime/"
      />
      <ReadingLink
        title="Category Theory for Programmers: The Preface"
        link="https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/"
      />

      <ReadingLink
        title="Algorithms interviews: theory vs. practice"
        link="https://danluu.com/algorithms-interviews/"
      />
    </>
  );
}

export default ReadingsContainer;
