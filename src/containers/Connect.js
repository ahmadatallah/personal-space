/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import BlockLinkGrow from '../components/BlockLinkGrow';
import { Div } from '../elements';
import Resume from '../external/Resume.pdf';
import Avatar from '../components/Avatar';
import avatarImg from '../assets/images/avatar.jpg';
import { StyledLink } from '../components/Link';

import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from 'react-icons/fa';

function Connect() {
  return (
    <Div
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderColor="secondary"
      ml="auto"
      mr="auto"
      p={3}
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
      <BlockLinkGrow
        mr={2}
        fontWeight={700}
        href="https://github.com/ahmadatallah"
        title="ahmadatallah@github"
      >
        <GitHub size={24} />
      </BlockLinkGrow>
      <BlockLinkGrow
        mr={2}
        fontWeight={700}
        href="https://twitter.com/ahmadatallah"
        title="ahmadatallah@twitter"
      >
        <Twitter size={24} />
      </BlockLinkGrow>
      <BlockLinkGrow
        mr={2}
        fontWeight={700}
        href="https://www.instagram.com/ahmad.atallah"
        title="ahmad.atallah@instagram"
      >
        <Instagram size={24} />
      </BlockLinkGrow>
      <BlockLinkGrow
        mr={2}
        fontWeight={700}
        href="https://www.linkedin.com/in/ahmad-atallah/"
        title="ahmad.atallah@linkedin"
      >
        <Linkedin size={24} />
      </BlockLinkGrow>

      <BlockLinkGrow
        mr={2}
        fontWeight={700}
        href={Resume}
        title="Ahmad's Resume"
      >
        Resume
      </BlockLinkGrow>
    </Div>
  );
}

export default Connect;
