/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Link from "../components/Link";
import { H1, Div, Small } from "../elements";
import { IoMdQuote } from "react-icons/io";
import StyledLink from "../components/StyledLink";
import useEveryReloadColorMode from '../hooks/useEveryReloadColorMode';

const LinkIcon = ({ color }) => {
  return <IoMdQuote size={18} color={color} />;
};

function ArContainer({ ...props }) {
  const { textColor } = useEveryReloadColorMode();
  return (
    <>
      <H1 fontWeight={600} color={textColor}>
        {" "}
        كتابات{" "}
      </H1>
      <Div mb={2}>
        <LinkIcon color={textColor} />
        <StyledLink to="/ar/school-of-biomedical-engineering">
          <Link
            title="كلية الهندسة الحيوية والطبية والمنظومات ١"
            fontWeight={[700, 600, 600]}
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
    </>
  );
}

export default ArContainer;
