/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Link from "../components/Link";
import theme from "../theme";
import { H1, Div } from "../elements";
import MinimalHeader from "../containers/MinimalHeader";
import { BrowserRouter as Router, Route, Link as L,  Switch } from "react-router-dom";
import About from './About'
import Flex from '../components/Flex'
function HomeAR() {
  return (
    <>
      <MinimalHeader />
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="50em"
        mr="auto"
        ml="auto"
      >
        <Div display="grid" px={6} py={[3, 4, 5]}>
          <Link
            title="كلية الهندسة الحيوية والطبية والمنظومات"
            href="/ar/school-of-biomedical-engineering"
            fontFamily={theme.typefaces.helvetica}
          >
            <L to="/ar/school-of-biomedical-engineering"></L>

          </Link>
          {/* <Link
            title=""
            href="/ar/"
            fontFamily={theme.typefaces.helvetica}
          /> */}
        </Div>
      </Flex>

      <Route path="/ar/school-of-biomedical-engineering" component={About}/>
    </>
  );
}

export default HomeAR;
