/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { Div, H2 } from "../../elements";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import Flex from "../../components/Flex";
import Loading from "../../components/Loading";

const Content = lazy(() =>
  import("!babel-loader!mdx-loader!./CreateReactAppEnvVars.mdx")
);

function CreateReactAppEnvVars({ ...props }) {
  return (
    <>
      <Header />
      <Div
        justifyConent="center"
        maxWidth={900}
        px={[4, 3, 5]}
        py={2}
        mx="auto"
        fontFamily={theme.typefaces.sansSerif}
        mt={70}
      >
        <Suspense
          fallback={
            <Flex flexDirection="row" justifyContent="center">
              <H2 fontWeight={300} mr={2}>
                {" "}
                Loading{" "}
              </H2>
              <Loading type="spokes" color="currentcolor" />
            </Flex>
          }
        >
          <Content />
        </Suspense>
        <Footer />
      </Div>
    </>
  );
}

export default CreateReactAppEnvVars;
