import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  width,
  minWidth,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
  borderColor,
  borderRadius,
  borderWidth
} from "styled-system";

const ColorModeButton = styled("button", { shouldForwardProp })(
  space,
  width,
  minWidth,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
  borderColor,
  borderRadius,
  borderWidth,
  {
    minWidth: "32px",
    width: "32px",
    height: "32px",
    display: "inline-block",
    appearance: "none",
    bg: "transparent",
    color: "inherit",
    p: 1,
    m: 0,
    border: 0,
    borderRadius: 9999,
    ":hover,:focus": {
      color: "primary",
      boxShadow: "0 0 0 3px",
      outline: "none"
    }
  }
);

ColorModeButton.defaultProps = {
  bg: "transparent",
  cursor: "pointer"
};

export default ColorModeButton;
