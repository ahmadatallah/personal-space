import styled from "@emotion/styled";
import theme from "../theme";
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
  props => ({
    ":hover,:focus": {
      color: theme.colors.modes[props.colorMode].secondary,
      boxShadow: "0 0 0 3px",
      outline: "none"
    }
  }),
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
    minWidth: "28px",
    width: "28px",
    height: "28px",
    display: "inline-block",
    appearance: "none",
    bg: "transparent",
    color: "inherit",
    p: 1,
    m: 0,
    border: 0,
    borderRadius: 9999
  }
);

ColorModeButton.defaultProps = {
  bg: "transparent",
  cursor: "pointer"
};

export default ColorModeButton;
