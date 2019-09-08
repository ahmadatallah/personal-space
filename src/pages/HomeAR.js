/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useEffect } from "react";
import Link from "../components/Link";
import theme from "../theme";
import { H1, Div } from "../elements";
import Header from "../containers/Header";
import { Link as L } from "react-router-dom";
import Flex from "../components/Flex";
import { modes } from "../utils/constants";
import { useColorMode } from "theme-ui";
import { IoMdQuote } from "react-icons/io";

const LinkIcon = ({ color }) => {
  return <IoMdQuote size={18} color={color} />;
};

function HomeAR({ ...props }) {
  const [colorMode, setColorMode] = useColorMode();
  const [textColor, changeTextTheme] = useState();

  const populateTheme = colorTheme => {
    const i = modes.indexOf(colorTheme);
    const n = (i + 1) % modes.length;
    const currentMode = modes[n];
    changeTextTheme(theme.colors.modes[currentMode].secondary);
    setColorMode(currentMode);
  };

  useEffect(() => {
    populateTheme(colorMode);

    return () => {
      populateTheme("light");
    };
  }, []);

  return (
    <>
      <Header />
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="50em"
        minHeight="100%"
        mr="auto"
        ml="auto"
      >
        <Div dir="rtl" display="grid" pr={[5, 6, 6]} py={5} mt={70}>
          <H1 fontWeight={400} color={textColor}>
            {" "}
            كتابات{" "}
          </H1>
          <Div mb={3}>
            <LinkIcon color={textColor} />
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
            <LinkIcon color={textColor} />
          </Div>
          <Div mb={3}>
            <LinkIcon color={textColor} />
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
            <LinkIcon color={textColor} />
          </Div>
          <Div mb={3}>
            <LinkIcon color={textColor} />
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
            <LinkIcon color={textColor} />
          </Div>
          <Div mb={3}>
            <LinkIcon color={textColor} />

            <L
              to="/ar/midnight-story"
              style={{
                textDecoration: "none",
                color: "currentcolor",
                marginBottom: "16px"
              }}
            >
              <Link
                title="قصة في منتصف الليل"
                fontFamily={theme.typefaces.helvetica}
              />
            </L>
            <LinkIcon color={textColor} />
          </Div>
        </Div>
      </Flex>
    </>
  );
}

export default HomeAR;
