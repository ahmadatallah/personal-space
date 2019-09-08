/** @jsx jsx */
import jsx from "../jsx";
import React, { lazy, Suspense, useState, useEffect } from "react";
import BlockLinkGrow from "./BlockLinkGrow";
import { modes } from "../utils/constants";
import { useColorMode } from "theme-ui";
import theme from "../theme";

const Img = lazy(() => import("../elements/Img"));

const Card = ({
  href,
  image,
  title,
  subtitle,
  text,
  tag,
  link,
  subLink,
  ...props
}) => {
  const [colorMode] = useColorMode();
  const [textColor, changeTextTheme] = useState();
  const populateTheme = colorTheme => {
    changeTextTheme(theme.colors.modes[colorTheme].secondary);
  };

  useEffect(() => {
    populateTheme(colorMode);

    return () => {
      populateTheme("light");
    };
  }, []);

  return (
    <article {...props}>
      <div position="relative">
        {tag && (
          <div
            position="absolute"
            top={16}
            right={16}
            width="auto"
            px={2}
            py={1}
            borderRadius={1}
            bg="gray"
            color="currentcolor"
            fontSize={0}
          >
            {tag}{" "}
          </div>
        )}
        {props.children ? (
          props.children
        ) : (
          <Suspense
            fallback={
              <div flexDirection="column" justifyContent="center" mx="auto">
                <h2 fontWeight={300}> Loading .... </h2>
              </div>
            }
          >
            <BlockLinkGrow>
              <Img
                src={image}
                alt={link.text}
                onClick={() => (window.location.href = href)}
              />
            </BlockLinkGrow>
          </Suspense>
        )}
      </div>
      <div px={[3, 4]} py={[3, 4]}>
        {title && (
          <h3 fontSize={2} mt={0} mb={1}>
            {title}
          </h3>
        )}
        {subtitle && (
          <h3 fontSize={1} mt={0} mb={2} lineHeight={1.25}>
            {subtitle}
          </h3>
        )}
        {subLink && (
          <>
            <a
              href={subLink}
              fontWeight={500}
              fontSize={1}
              borderRadius={3}
              color="currentcolor"
              px={0}
              py={2}
              mr={2}
            >
              Read or
            </a>
          </>
        )}
        {text && (
          <p fontSize={1} my={0}>
            {text}
          </p>
        )}
        {link && (
          <BlockLinkGrow
            href={link.href}
            fontWeight={700}
            color={textColor}
            textStyle="none"
            fontSize={1}
            borderRadius={3}
            px={0}
            py={2}
          >
            {link.text}
          </BlockLinkGrow>
        )}
      </div>
    </article>
  );
};

Card.defaultProps = {
  border: "1px solid",
  borderColor: "black-10",
  borderRadius: 2,
  style: { overflow: "hidden" }
};

export default Card;
