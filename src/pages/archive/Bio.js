/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { Div, H2 } from "../../elements";
import Flex from "../../components/Flex";
import Header from "../../containers/Header";
import Loading from "../../components/Loading";

const Content = lazy(() => import("!babel-loader!mdx-loader!./Bio.mdx"));

function Bio({ ...props }) {
  return (
    <>
      <Div
        dir="rtl"
        justifyConent="center"
        px={[1, 2, 3]}
        py={2}
        mx="auto"
        fontFamily={theme.typefaces.helvetica}
        mt={40}
      >
        <Suspense
          fallback={
            <Flex flexDirection="row" justifyContent="center">
              <H2 fontWeight={300} ml={2}>
                {" "}
                قيد التحميل{" "}
              </H2>
              <Loading type="spokes" color="currentcolor" />
            </Flex>
          }
        >
          <Content />
        </Suspense>
      </Div>
    </>
  );
}

export default Bio;
