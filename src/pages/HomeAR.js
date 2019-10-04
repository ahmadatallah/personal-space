/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useEffect } from "react";
import Link from "../components/Link";
import theme from "../theme";
import { H1, Div, Small } from "../elements";
import Header from "../containers/Header";
import Flex from "../components/Flex";
import { modes } from "../utils/constants";
import { useColorMode } from "theme-ui";
import { IoMdQuote } from "react-icons/io";
import StyledLink from "../components/StyledLink";

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
        fontFamily={theme.typefaces.helvetica}
        dir="rtl"
      >
        <Div display="grid" pr={[5, 6, 6]} py={5} mt={70}>
          <H1 fontWeight={600} color={textColor}>
            {" "}
            كتابات{" "}
          </H1>
          <Div mb={2}>
            <LinkIcon color={textColor} />
            <StyledLink to="/ar/school-of-biomedical-engineering">
              <Link
                title="كلية الهندسة الحيوية والطبية والمنظومات ١"
                fontWeight={600}
              />
            </StyledLink>
            <LinkIcon color={textColor} />
            <Div mr={3}>
              <Small>
                ١٢ اغسطس ٢٠١٩{" "}
                <span role="img" aria-label="min-read">
                  • ☕️☕️️️️️{" "}
                </span>
              </Small>
            </Div>
          </Div>
          <Div mb={2}>
            <LinkIcon color={textColor} />
            <StyledLink to="/ar/sorry-being-born-rich-still-leads-to-success">
              <Link
                title="الملعقة الذهب التي تؤدي دائمًا للنجاح"
                fontWeight={600}
              />
            </StyledLink>
            <LinkIcon color={textColor} />
            <Div mr={2}>
              <Small>
                ١٣ اغسطس ٢٠١٩{" "}
                <span role="img" aria-label="min-read">
                  • ☕️{" "}
                </span>
              </Small>
            </Div>
          </Div>
          <Div mb={2}>
            <LinkIcon color={textColor} />
            <StyledLink to="/ar/happy-society">
              <Link title="المجتمعات السعيدة" fontWeight={600} />
            </StyledLink>
            <LinkIcon color={textColor} />
            <Div mr={3}>
              <Small>
                ١٧ اغسطس ٢٠١٩{" "}
                <span role="img" aria-label="min-read">
                  • ☕️{" "}
                </span>
              </Small>
            </Div>
          </Div>
          <Div mb={3}>
            <LinkIcon color={textColor} />

            <StyledLink to="/ar/midnight-story">
              <Link title="قصة في منتصف الليل" fontWeight={600} />
            </StyledLink>
            <LinkIcon color={textColor} />
            <Div mr={3}>
              <Small>
                ١ سبتمبر ٢٠١٩{" "}
                <span role="img" aria-label="min-read">
                  • ☕️{" "}
                </span>
              </Small>
            </Div>
          </Div>
        </Div>
      </Flex>
    </>
  );
}

export default HomeAR;
