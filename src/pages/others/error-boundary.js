/** @jsx jsx */
import jsx from "../../jsx";
import React from "react";
import theme from "../../theme";
import { Div, H2 } from "../../elements";
function ErrorBoundary({ ...props }) {
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
         Error
        </Div>
      </>
    );
  }
  
  export default ErrorBoundary;
  