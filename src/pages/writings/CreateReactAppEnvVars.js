/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { H3, H2, Div } from "../../elements";
import Flex from "../../components/Flex";
import MinimalHeader from "../../containers/MinimalHeader";
import { importMDX } from "mdx.macro";
import "prismjs/themes/prism-tomorrow.css";

const Content = React.lazy(() =>
  import("!babel-loader!mdx-loader!./CreateReactAppEnvVars.mdx")
);

function CreateReactAppEnvVars({ ...props }) {
  return (
    <>
      <MinimalHeader />
      <Div
        justifyConent="center"
        maxWidth={900}
        px={[4, 3, 5]}
        py={2}
        mx="auto"
        fontFamily={theme.typefaces.sansSerif}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </Div>
    </>
  );
}

export default CreateReactAppEnvVars;
