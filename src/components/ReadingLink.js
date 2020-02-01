/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { Div } from '../elements';
import Link from '../components/Link';
import { IoIosLink } from 'react-icons/io';
import useColorMode from '../hooks/useColorMode';

const LinkIcon = ({ color }) => {
  return <IoIosLink size={22} color={color} />;
};

function ReadingLink({ title, link, ...props }) {
  const { textColor } = useColorMode();

  return (
    <Div mb={3}>
      <LinkIcon color={textColor} />
      <Link
        title={title}
        href={link}
        aria-label={title.toLowerCase()}
        fontSize={[2, 3, 3]}
        fontWeight={[700, 600, 600]}
      >
        {' '}
      </Link>
    </Div>
  );
}

export default ReadingLink;
