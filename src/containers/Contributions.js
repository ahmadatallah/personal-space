/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { Img, H1 } from '../elements';
import BlockLinkGrow from '../components/BlockLinkGrow';
import Flex from '../components/Flex';
import useColorMode from '../hooks/useColorMode';

function Contributions({ ...props }) {
  const { textColor } = useColorMode();

  return (
    <>
      <H1 fontWeight={600} fontSize={4} color={textColor}>
        {' '}
        Work & Contributions{' '}
      </H1>
      <Flex flexDirection="row">
        <BlockLinkGrow mr={2} href="https://github.com/swvl" title="Swvl">
          <Img
            borderRadius="50%"
            width={50}
            alt="@swvl github"
            src="https://avatars0.githubusercontent.com/u/29146595?s=60&v=4"
          ></Img>
        </BlockLinkGrow>
        <BlockLinkGrow
          mr={2}
          href="https://github.com/Qobraio"
          title="Qobra"
          borderRadius="50%"
        >
          <Img
            borderRadius={50}
            width={50}
            alt="@qobra github"
            src="https://avatars0.githubusercontent.com/u/59341846?s=200&v=4"
          ></Img>
        </BlockLinkGrow>
        <BlockLinkGrow
          mr={2}
          href="https://github.com/blocks/blocks"
          title="Blocks"
          backgroundColor="white"
          borderRadius="50%"
        >
          <Img
            width={50}
            alt="@blocks github"
            src="https://avatars0.githubusercontent.com/u/6106365?s=88&v=4"
          ></Img>
        </BlockLinkGrow>{' '}
        <BlockLinkGrow
          py={1}
          mr={2}
          href="https://github.com/reach/reach-ui"
          title="Reach-UI"
        >
          <Img
            borderRadius={50}
            width={50}
            alt="@reach-ui github"
            src="https://avatars3.githubusercontent.com/u/38740568?s=60&v=4"
          ></Img>
        </BlockLinkGrow>{' '}
        <BlockLinkGrow
          py={1}
          mr={2}
          href="https://github.com/gatsbyjs/gatsby"
          title="Gatsby"
        >
          <Img
            borderRadius={50}
            width={50}
            alt="@gatsbyjs github"
            src="https://avatars3.githubusercontent.com/u/12551863?s=60&v=4"
          ></Img>
        </BlockLinkGrow>{' '}
        <BlockLinkGrow
          py={1}
          mr={2}
          href="https://github.com/tachyons-css/tachyons-styled-react"
          title="Tachyons"
        >
          <Img
            borderRadius={50}
            width={50}
            alt="@tachyons-css github"
            src="https://avatars0.githubusercontent.com/u/15205635?s=60&v=4"
          ></Img>
        </BlockLinkGrow>{' '}
        <BlockLinkGrow
          py={1}
          mr={2}
          href="https://github.com/system-ui/theme-ui"
          title="Styled System"
        >
          <Img
            borderRadius={50}
            width={50}
            alt="@theme-ui github"
            src="https://avatars0.githubusercontent.com/u/48816045?s=60&v=4"
          ></Img>
        </BlockLinkGrow>
        <BlockLinkGrow
          pt="2px"
          mr={2}
          href="https://github.com/darkreader/darkreader"
          title="Dark Reader"
          backgroundColor="#455E63"
          borderRadius="50%"
          width={52}
        >
          <Img
            alt="@darkreader github"
            src="https://avatars0.githubusercontent.com/u/38494721?s=60&v=4"
          ></Img>
        </BlockLinkGrow>
        <BlockLinkGrow
          href="https://github.com/Hacker0x01/react-datepicker"
          title="HackerOne"
        >
          <Img
            borderRadius={50}
            width={50}
            alt="@hackerone github"
            src="https://avatars1.githubusercontent.com/u/3014877?s=200&v=4"
          ></Img>
        </BlockLinkGrow>
      </Flex>
    </>
  );
}

export default Contributions;
