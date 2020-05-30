/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { Div } from '../elements';
import Link from '../components/Link';
import { IoIosLink } from 'react-icons/io';
import BlockLinkGrow from '../components/BlockLinkGrow';

const LinkIcon = () => {
  return (
    <BlockLinkGrow>
      <IoIosLink size={22} />
    </BlockLinkGrow>
  );
};

function ReadingLink({ title, link, ...props }) {
  return (
    <Div mb={3}>
      <LinkIcon />
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
