/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { Div, H2 } from "../../elements";
import Flex from "../../components/Flex";
import Header from "../../containers/Header";
import { importMDX } from "mdx.macro";
import Loading from "../../components/Loading";

const Content = lazy(() => importMDX("./Society.mdx"));

function Society({ ...props }) {
  return (
    <>
      <Header />
      <Flex
        dir="rtl"
        justifyConent="center"
        maxWidth={900}
        px={[4, 4, 5]}
        py={2}
        mx="auto"
        fontFamily={theme.typefaces.helvetica}
        mt={70}
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
      </Flex>
    </>
  );
}

export default Society;
