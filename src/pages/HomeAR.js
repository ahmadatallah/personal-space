/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Link from "../components/Link";
import theme from "../theme";
import { Div } from "../elements";
import MinimalHeader from "../containers/MinimalHeader";
import { Link as L } from "react-router-dom";
import Flex from "../components/Flex";
function HomeAR({ ...props }) {
  return (
    <>
      <MinimalHeader />
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="50em"
        minHeight="100%"
        mr="auto"
        ml="auto"
      >
        <Div dir="rtl" display="grid" pr={[5, 6, 6]} py={5}>
          <L
            to="/ar/school-of-biomedical-engineering"
            style={{
              textDecoration: "none",
              color: "currentcolor",
              marginBottom: "16px"
            }}
          >
            <Link
              title="كلية الهندسة الحيوية والطبية والمنظومات ١"
              fontFamily={theme.typefaces.helvetica}
            />
          </L>
          <L
            to="/ar/sorry-being-born-rich-still-leads-to-success"
            style={{
              textDecoration: "none",
              color: "currentcolor",
              marginBottom: "16px"
            }}
          >
            <Link
              title="الملعقة الذهب التي تؤدي دائمًا للنجاح"
              fontFamily={theme.typefaces.helvetica}
            />
          </L>
          <L
            to="/ar/happy-society"
            style={{
              textDecoration: "none",
              color: "currentcolor",
              marginBottom: "16px"
            }}
          >
            <Link
              title="المجتمعات السعيدة"
              fontFamily={theme.typefaces.helvetica}
            />
          </L>
        </Div>
      </Flex>
    </>
  );
}

export default HomeAR;
