/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { Div, H2 } from "../../elements";
import Flex from "../../components/Flex";
import Header from "../../containers/Header";
import Loading from "../../components/Loading";
import ErrorBoundary from "./error-boundary";
const Content = lazy(() => import("!babel-loader!mdx-loader!./BornRich.mdx"));

function BornRich({ ...props }) {
  return (
    <>
      <Div
        dir="rtl"
        justifyConent="center"
        maxWidth={900}
        px={[4, 4, 5]}
        py={2}
        mx="auto"
        fontFamily={theme.typefaces.helvetica}
        mt={40}
      >
        <ErrorBoundary>
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
        </ErrorBoundary>
      </Div>
    </>
  );
}

export default BornRich;
