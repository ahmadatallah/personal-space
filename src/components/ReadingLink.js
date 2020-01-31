/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { Div } from '../elements';
import Link from '../components/Link';
import BlockLinkGrow from '../components/BlockLinkGrow';
import { IoIosLink } from 'react-icons/io';

const LinkIcon = ({ href }) => {
  return (
    <BlockLinkGrow href={href}>
      <IoIosLink size={22} />
    </BlockLinkGrow>
  );
};

function ReadingLink({ title, link, ...props }) {
  return (
    <Div mb={3}>
      <LinkIcon href={link} />
      <Link
        title={title}
        href={link}
        fontSize={[2, 3, 3]}
        fontWeight={[700, 600, 600]}
      >
        {' '}
      </Link>
    </Div>
  );
}

export default ReadingLink;
