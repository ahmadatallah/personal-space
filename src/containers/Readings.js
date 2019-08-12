/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import { H1 } from "../elements";
import Link from "../components/Link";

function Readings({ title, href, ...props }) {
  return (
    <>
      <H1 fontWeight={400}> Readings </H1>
      <Link
        title="No, I have no side code projects to show you"
        href="https://bit.ly/33zdmtc"
        fontFamily={theme.typefaces.mono}
      >
        {" "}
      </Link>
      <Link
        title="Mapping a universe of open source software"
        href="https://www.tweag.io/posts/2019-02-06-mapping-open-source.html"
        fontFamily={theme.typefaces.mono}
      >
        {" "}
      </Link>
      <Link
        title="React as a UI runtime"
        href="https://overreacted.io/react-as-a-ui-runtime/"
        fontFamily={theme.typefaces.mono}
      >
        {" "}
      </Link>

      <Link
        title="Category Theory for Programmers: The Preface"
        href="https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/"
        fontFamily={theme.typefaces.mono}
      >
        {" "}
      </Link>
    </>
  );
}

export default Readings;
