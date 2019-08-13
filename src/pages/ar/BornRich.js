/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { Div } from "../../elements";
import Flex from "../../components/Flex";
import MinimalHeader from "../../containers/MinimalHeader";
import { importMDX } from "mdx.macro";
const Content = lazy(() => importMDX("./BornRich.mdx"));

function BornRich({ ...props }) {
  return (
    <>
      <MinimalHeader />
      <Flex
        dir="rtl"
        justifyConent="center"
        px={[1, 4, 6]}
        py={2}
        mx="auto"
        fontFamily={theme.typefaces.helvetica}
      >
        <Suspense fallback={<Div>Loading...</Div>}>
          <Content />
        </Suspense>
      </Flex>
    </>
  );
}

export default BornRich;
