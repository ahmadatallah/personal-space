/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { Div } from "../../elements";
import MinimalHeader from "../../containers/MinimalHeader";
import Footer from "../../containers/Footer";

import "prismjs/themes/prism-solarizedlight.css";
import "./pre.css";

const Content = lazy(() =>
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
        <Footer />
      </Div>
    </>
  );
}

export default CreateReactAppEnvVars;
