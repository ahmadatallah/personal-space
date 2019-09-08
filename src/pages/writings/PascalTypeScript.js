/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { Div } from "../../elements";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";

import "prismjs/themes/prism-solarizedlight.css";
import "./pre.css";

const Content = lazy(() =>
  import("!babel-loader!mdx-loader!./PascalTypeScript.mdx")
);

function PascalTypeScript({ ...props }) {
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
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
        <Footer />
      </Div>
    </>
  );
}

export default PascalTypeScript;
