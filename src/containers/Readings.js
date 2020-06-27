/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { H1, Div } from '../elements';
import useColorMode from '../hooks/useColorMode';
import ReadingLink from '../components/ReadingLink';

export function Readings({ title, href, ...props }) {
  const { textColor } = useColorMode();

  return (
    <Div mb={[0, 2, '12.9rem']}>
      <H1 fontWeight={600} fontSize={4} color={textColor}>
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
    </Div>
  );
}
