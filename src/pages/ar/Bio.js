/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { H3, H2, Div } from "../../elements";
import Flex from "../../components/Flex";
import MinimalHeader from "../../containers/MinimalHeader";
import { importMDX } from "mdx.macro";
const Content = lazy(() => importMDX("./Bio.mdx"));

function Bio({ ...props }) {
  return (
    <>
    <MinimalHeader />
      <Flex px={8} py={2} mx="auto" fontFamily={theme.typefaces.helvetica} >
        <Suspense fallback={<div>Loading...</div>}>
          <Content/>
        </Suspense>
      </Flex>
    </>
  );
}

export default Bio;
