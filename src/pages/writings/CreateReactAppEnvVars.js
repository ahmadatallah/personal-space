/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { H3, H2, Div } from "../../elements";
import Flex from "../../components/Flex";
import MinimalHeader from "../../containers/MinimalHeader";
import { importMDX } from "mdx.macro";
const Content = lazy(() => importMDX("./CreateReactAppEnvVars.mdx"));

function CreateReactAppEnvVars({ ...props }) {
  return (
    <>
      <MinimalHeader />
      <Flex
        justifyConent="center"
        px={[1, 4, 6]}
        py={2}
        mx="auto"
        fontFamily={theme.typefaces.mono}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </Flex>
    </>
  );
}

export default CreateReactAppEnvVars;
