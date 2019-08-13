/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Link from "../components/Link";
import theme from "../theme";
import { H1, Div, Footer as F} from "../elements";
import MinimalHeader from "../containers/MinimalHeader";
import { Link as L } from "react-router-dom";
import Flex from "../components/Flex";
import Footer from "../containers/Footer"
function HomeAR({ ...props }) {
  return (
    <>
      <MinimalHeader />
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="50em"
        minHeight= '100%'
        mr="auto"
        ml="auto"
      >
        <Div display="grid" px={6} py={[3, 4, 5]}>
          <L
            to="/ar/school-of-biomedical-engineering"
            style={{ textDecoration: "none", color: "currentcolor" }}
          >
            <Link
              title="كلية الهندسة الحيوية والطبية والمنظومات ١"
              fontFamily={theme.typefaces.helvetica}
            />
          </L>
          <L
            to="/ar/sorry-being-born-rich-still-leads-to-success"
            style={{ textDecoration: "none", color: "currentcolor" }}
          >
            <Link
              title="الملعقة الذهب التي تؤدي دائمًا للنجاح"
              fontFamily={theme.typefaces.helvetica}
            />
          </L>
        </Div>
      </Flex>
      <F position='absolute'>
        <Footer />
      </F>
    </>
  );
}

export default HomeAR;
