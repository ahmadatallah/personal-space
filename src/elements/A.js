import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"

import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  fontFamily,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  textStyle
} from "styled-system"

const A = styled('a', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  fontFamily,
  textStyle,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "none",
    ":hover": {
      cursor: "pointer"
    }
  }
)

A.defaultProps = {
  display: "inline-block",
  bg: "transparent",
  color: "secondary"
}

export default A
