/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Link from "../components/Link";
import { H1, Div, Small } from "../elements";
import StyledLink from "../components/StyledLink";
import useEveryReloadColorMode from "../hooks/useEveryReloadColorMode";

function ArContainer({ ...props }) {
  const { textColor } = useEveryReloadColorMode();
  return (
    <>
      <H1 fontWeight={600} color={textColor}>
        {" "}
        كتابات{" "}
      </H1>
      <Div mb={2}>
        <StyledLink to="/ar/school-of-biomedical-engineering">
          <Link
            title="كلية الهندسة الحيوية والطبية والمنظومات ١"
            fontWeight={[700, 600, 600]}
          />
        </StyledLink>
        <Div mr={2}>
          <Small>
            ١٢ اغسطس ٢٠١٩{" "}
            <span role="img" aria-label="min-read">
              • ☕️☕️️️️️{" "}
            </span>
          </Small>
        </Div>
      </Div>
      <Div mb={2}>
        <StyledLink to="/ar/sorry-being-born-rich-still-leads-to-success">
          <Link
            title="الملعقة الذهب التي تؤدي دائمًا للنجاح"
            fontWeight={600}
          />
        </StyledLink>
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
        <StyledLink to="/ar/happy-society">
          <Link title="المجتمعات السعيدة" fontWeight={600} />
        </StyledLink>
        <Div mr={2}>
          <Small>
            ١٧ اغسطس ٢٠١٩{" "}
            <span role="img" aria-label="min-read">
              • ☕️{" "}
            </span>
          </Small>
        </Div>
      </Div>
      <Div mb={3}>
        <StyledLink to="/ar/midnight-story">
          <Link title="قصة في منتصف الليل" fontWeight={600} />
        </StyledLink>
        <Div mr={2}>
          <Small>
            ١ سبتمبر ٢٠١٩{" "}
            <span role="img" aria-label="min-read">
              • ☕️{" "}
            </span>
          </Small>
        </Div>
      </Div>
    </>
  );
}

export default ArContainer;
