/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import { H1, Div } from "../elements";
import Link from "../components/Link";
import BlockLinkGrow from "../components/BlockLinkGrow";
import { IoIosLink } from "react-icons/io";
import useEveryReloadColorMode from '../hooks/useEveryReloadColorMode';

const LinkIcon = ({ href }) => {
  return (
    <BlockLinkGrow href={href}>
      <IoIosLink size={22} />
    </BlockLinkGrow>
  );
};

function ReadingsContainer({ title, href, ...props }) {
  const { textColor } = useEveryReloadColorMode()

  return (
    <>
      <H1 fontWeight={600} color={textColor}> Readings </H1>
      <Div mb={3}>
        <LinkIcon href="https://bit.ly/33zdmtc" />
        <Link
          title="No, I have no side code projects to show you"
          href="https://bit.ly/33zdmtc"
          fontFamily={theme.typefaces.mono}
          fontSize={[2, 3, 3]}
          fontWeight={[700, 600, 600]}
      >
          {" "}
        </Link>
      </Div>
      <Div mb={3}>
        <LinkIcon href="https://www.tweag.io/posts/2019-02-06-mapping-open-source.html" />

        <Link
          title="Mapping a universe of open source software"
          href="https://www.tweag.io/posts/2019-02-06-mapping-open-source.html"
          fontFamily={theme.typefaces.mono}
          fontSize={[2, 3, 3]}
          fontWeight={[700, 600, 600]}
      >
          {" "}
        </Link>
      </Div>
      <Div mb={3}>
        <LinkIcon href="https://overreacted.io/react-as-a-ui-runtime/" />
        <Link
          title="React as a UI runtime"
          href="https://overreacted.io/react-as-a-ui-runtime/"
          fontFamily={theme.typefaces.mono}
          fontSize={[2, 3, 3]}
          fontWeight={[700, 600, 600]}
      >
          {" "}
        </Link>
      </Div>
      <Div mb={3}>
        <LinkIcon href="https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/" />
        <Link
          title="Category Theory for Programmers: The Preface"
          href="https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/"
          fontFamily={theme.typefaces.mono}
          fontSize={[2, 3, 3]}
          fontWeight={[700, 600, 600]}
      >
          {" "}
        </Link>
      </Div>
    </>
  );
}

export default ReadingsContainer;
